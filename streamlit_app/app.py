"""LLM Apps Explorer — Streamlit.

Menampilkan SEMUA kategori & template dari katalog
(catalog/templates.json, digenerate dari README fork
bangke1212/awesome-llm-apps). Jalankan:
    pip install -r requirements.txt
    streamlit run streamlit_app/app.py
"""
import json
from pathlib import Path

import streamlit as st

ROOT = Path(__file__).resolve().parent.parent
catalog = json.loads((ROOT / "catalog" / "templates.json").read_text(encoding="utf-8"))
templates = catalog["templates"]

st.set_page_config(page_title="LLM Apps Explorer", layout="wide")
st.title("LLM Apps Explorer")
st.caption(
    f"{catalog['total_templates']} template • {catalog['total_categories']} kategori • "
    f"Lisensi {catalog['license']} • Sumber: {catalog['source_fork']}"
)

q = st.text_input("Cari template", placeholder="mis. podcast, RAG, travel")
cat = st.selectbox("Kategori", ["Semua kategori"] + catalog["categories"])

rows = [
    t for t in templates
    if (cat == "Semua kategori" or t["category"] == cat)
    and (not q or q.lower() in (t["name"] + " " + t["description"] + " " + t["category"]).lower())
]
st.write(f"Menampilkan **{len(rows)}** dari {len(templates)} template.")
for t in rows:
    with st.container(border=True):
        st.markdown(f"**{t['name']}**  \n`{t['category']}`")
        if t["description"]:
            st.write(t["description"])
        st.markdown(f"[Buka di fork GitHub →]({t['source_url']})")
