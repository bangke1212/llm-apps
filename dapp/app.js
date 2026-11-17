let account=null; const statusEl=document.getElementById('status');
document.getElementById('connect').onclick=async()=>{
  if(!window.ethereum){statusEl.textContent='Wallet EIP-1193 tidak ditemukan. Pasang MetaMask atau wallet browser lain, lalu coba lagi.';return;}
  try{const accs=await window.ethereum.request({method:'eth_requestAccounts'});account=accs[0];
    const chain=await window.ethereum.request({method:'eth_chainId'});
    statusEl.textContent=`Terhubung: ${account} • Chain ID ${chain}`;document.getElementById('sign').disabled=false;
  }catch(e){statusEl.textContent='Koneksi wallet ditolak: '+e.message;}
};
document.getElementById('sign').onclick=async()=>{
  try{const msg='Buka katalog LLM Apps untuk '+account;
    await window.ethereum.request({method:'personal_sign',params:[msg,account]});
    statusEl.textContent='Tanda tangan terverifikasi di browser. Katalog dibuka.';render();
  }catch(e){statusEl.textContent='Tanda tangan ditolak: '+e.message;}
};
const C=window.CATALOG, cat=document.getElementById('cat'), q=document.getElementById('q');
C.categories.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;cat.appendChild(o)});
function render(){
  const list=C.templates.filter(t=>(!cat.value||t.category===cat.value)&&(!q.value||(t.name+' '+t.description).toLowerCase().includes(q.value.toLowerCase())));
  document.getElementById('grid').innerHTML=list.map(t=>`<article class="card"><span class="tag">${t.category}</span><h3>${t.name}</h3><p>${t.description||''}</p><p><a href="${t.source_url}" target="_blank" rel="noopener">Buka di fork GitHub →</a></p></article>`).join('')||'<p>Tidak ada yang cocok.</p>';
}
[q,cat].forEach(el=>el.addEventListener('input',()=>{if(account)render()}));
