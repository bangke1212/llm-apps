const C=window.CATALOG, grid=document.getElementById('grid'), q=document.getElementById('q'), cat=document.getElementById('cat');
document.getElementById('stats').textContent=`${C.total_templates} template • ${C.total_categories} kategori • Lisensi ${C.license} • Sumber: ${C.source_fork}`;
C.categories.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;cat.appendChild(o)});
function render(){
  let list=C.templates.filter(t=>(!cat.value||t.category===cat.value)&&(!q.value||(t.name+' '+t.description+' '+t.category).toLowerCase().includes(q.value.toLowerCase())));
  const s=document.getElementById('sort').value;
  list.sort((a,b)=>s==='za'?b.name.localeCompare(a.name):s==='cat'?a.category.localeCompare(b.category)||a.name.localeCompare(b.name):a.name.localeCompare(b.name));
  grid.innerHTML=list.map(t=>`<article class="card"><span class="tag">${t.category}</span><h3>${t.name}</h3><p>${t.description||''}</p><p><a href="${t.source_url}" target="_blank" rel="noopener">Buka di fork GitHub →</a>${t.external?' <span class="tag">eksternal</span>':''}</p></article>`).join('');
  document.getElementById('empty').hidden=list.length>0;
}
[q,cat,document.getElementById('sort')].forEach(el=>el.addEventListener('input',render)); render();
