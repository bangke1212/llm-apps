import re, json, urllib.request, pathlib, html
SRC = pathlib.Path(__file__).resolve().parent.parent
SRC.mkdir(parents=True, exist_ok=True)
FORK="https://github.com/bangke1212/awesome-llm-apps"
UP="https://github.com/Shubhamsaboo/awesome-llm-apps"
txt=urllib.request.urlopen("https://raw.githubusercontent.com/bangke1212/awesome-llm-apps/main/README.md", timeout=30).read().decode()
cur=None; items=[]
for line in txt.splitlines():
    m=re.match(r'###\s+(.*)', line)
    if m: cur=m.group(1).strip(); continue
    m=re.match(r'\s*[\*\-]\s+\[(.*?)\]\((.*?)\)\s*-?\s*(.*)', line)
    if m and cur:
        name=m.group(1).strip(); url=m.group(2).strip(); desc=re.sub(r'<[^>]+>','',m.group(3)).strip(' -')
        external=url.startswith('http')
        items.append({
            "name": name, "category": cur,
            "path": None if external else url.rstrip('/'),
            "source_url": url if external else f"{FORK}/tree/main/{url.rstrip('/')}",
            "external": external, "description": desc,
        })
cats=[]
for it in items:
    if it["category"] not in cats: cats.append(it["category"])
catalog={"source_fork":FORK,"upstream":UP,"license":"Apache-2.0","total_templates":len(items),"total_categories":len(cats),"categories":cats,"templates":items}
(SRC/"catalog").mkdir(exist_ok=True)
(SRC/"catalog"/"templates.json").write_text(json.dumps(catalog,ensure_ascii=False,indent=2),encoding="utf-8")
print("catalog", len(items), len(cats))
