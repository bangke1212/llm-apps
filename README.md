# LLM Apps

Aplikasi katalog **semua** template dari fork [bangke1212/awesome-llm-apps](https://github.com/bangke1212/awesome-llm-apps) — **124 template, 16 kategori, tanpa terkecuali** (termasuk 2 entri eksternal yang ditandai sebagai eksternal). Struktur kategorinya mengikuti struktur repo sumber persis.

Sumber upstream: [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — lisensi **Apache-2.0**: gratis dipakai, diubah, dan dijual, dengan atribusi (lihat `NOTICE.md`).

## Tiga bentuk aplikasi (semuanya ada)

### 1. Dashboard App Web — `web/`
Katalog statis, tanpa build, tanpa server khusus.
```bash
python3 -m http.server 8000
# buka http://localhost:8000/web/
```
Fitur: cari, filter per kategori, urut A–Z / Z–A / per kategori, kartu per template dengan link ke foldernya di fork.

### 2. DApp Web3 — `dapp/`
Versi Web3 dari katalog yang sama: hubungkan wallet browser (EIP-1193, mis. MetaMask), tanda tangani pesan di browser untuk membuka katalog. Tidak ada kontrak pintar yang di-deploy dan tidak ada biaya gas untuk masuk. Terinspirasi template *AI x402 Paying Agent* di repo sumber.
```bash
# sajikan folder repo yang sama, lalu buka http://localhost:8000/dapp/
```

### 3. Aplikasi Streamlit (Python) — `streamlit_app/`
```bash
pip install -r streamlit_app/requirements.txt
streamlit run streamlit_app/app.py
```
Fitur: cari, filter per kategori, daftar lengkap 124 template dengan link sumber.

## Katalog — `catalog/templates.json`
Satu-satunya sumber data untuk ketiga aplikasi di atas. Digenerate dari README fork dengan:
```bash
python3 scripts/generate_catalog.py
```
Isi per template: nama, kategori, path folder, URL sumber, eksternal/tidak, deskripsi.

## Kategori (16)
Agent Skills • Standalone Apps & Tools • Starter AI Agents • Advanced AI Agents • Always-on Agents • Multi-agent Teams • Voice AI Agents • Generative UI and Agentic Frontends • Autonomous Game-Playing Agents • MCP AI Agents • RAG • LLM Apps with Memory • Chat with X • LLM Optimization Tools • LLM Fine-tuning • AI Agent Framework Crash Courses

## Soal biaya
Kode di repo ini dan di repo sumber gratis (Apache-2.0). Biaya saat menjalankan template tergantung modelnya: template lokal (Ollama / Llama / Qwen / DeepSeek lokal) bisa Rp0; free tier (mis. Gemini / Groq) gratis berkuota; API berbayar (GPT / Claude) bayar per pemakaian ke penyedia model.
