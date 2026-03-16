# ⚡ Belajar Claude

> Platform belajar Claude AI dan dasar coding gratis, bahasa santai, untuk orang Indonesia yang awam teknologi.

🌐 **Live website:** [belajar-claude.netlify.app](https://belajar-claude.netlify.app)

---

## 🗂️ Struktur File

```
belajar-claude/
│
├── index.html          → Landing page utama
├── fase-1.html         → Fase 1: Kenalan Dulu
├── fase-2.html         → Fase 2: Belajar Ngomong ke Claude
├── fase-3.html         → Fase 3: Prompt Level Lanjut
├── fase-4.html         → Fase 4: Claude untuk Coding
├── fase-5.html         → Fase 5: Claude API Dasar
├── fase-6.html         → Fase 6: Bangun Sesuatu yang Nyata
├── fase-7.html         → Fase 7: Dasar Koding untuk Pemula
├── fase-8.html         → Fase 8: Bikin Aplikasi Web Sederhana
├── fase-9.html         → Fase 9: Bikin Aplikasi EXE (Desktop)
├── fase-10.html        → Fase 10: Bikin Aplikasi APK (Android)
├── style.css           → Styling semua halaman
├── main.js             → Progress tracker & quiz logic
└── README.md           → File ini
```

> Semua file flat di root — tidak ada subfolder. Langsung upload semua ke GitHub root.

---

## 📚 Isi Tiap Fase

| Fase | Judul | Poin | Topik |
|------|-------|------|-------|
| 1 | Kenalan Dulu | 5 | AI, LLM, Claude vs ChatGPT, context window |
| 2 | Belajar Ngomong ke Claude | 6 | Prompt dasar, role prompting, chain of thought |
| 3 | Prompt Level Lanjut | 6 | System prompt, temperature, iterasi, dokumen |
| 4 | Claude untuk Coding | 6 | Debug, review kode, pair programmer |
| 5 | Claude API Dasar | 6 | API key, request, token, biaya |
| 6 | Bangun Sesuatu yang Nyata | 6 | Integrasi API, fitur AI, SOP workflow |
| 7 | Dasar Koding untuk Pemula | 5 | Variabel, fungsi, logika, VS Code, mindset |
| 8 | Bikin Aplikasi Web Sederhana | 5 | HTML, CSS, JS, struktur file, deploy Netlify |
| 9 | Bikin Aplikasi EXE (Desktop) | 5 | Electron, PyInstaller, distribusi .exe |
| 10 | Bikin Aplikasi APK (Android) | 5 | Capacitor, Android Studio, Play Store |

**Total: 10 Fase · 55 Titik Belajar · 10 Quiz**

---

## ✏️ Cara Update Materi

1. Edit file HTML yang mau diubah di VS Code
2. Simpan
3. Push ke GitHub:
   ```
   git add .
   git commit -m "update materi fase X"
   git push
   ```
4. Netlify otomatis deploy dalam ~1–2 menit ✅

Atau bisa langsung edit via GitHub web — klik file → klik ikon pensil → edit → commit.

---

## 🚀 Cara Deploy ke Netlify (Pertama Kali)

1. Buka [netlify.com](https://netlify.com) → Login
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **GitHub** → Pilih repo `belajar-claude`
4. Build command: *(kosongkan)*
5. Publish directory: `/`
6. Klik **Deploy site** ✅

---

## ⚙️ Fitur Website

| Fitur | Cara Kerja | Server? |
|-------|-----------|---------|
| Progress tracker | localStorage browser | ❌ Tidak perlu |
| Quiz + skor | JavaScript murni | ❌ Tidak perlu |
| Tombol "Coba di Claude" | Link ke claude.ai | ❌ Tidak perlu |

---

## 🛠️ Tech Stack

- **HTML + CSS + JavaScript** murni (no framework)
- **Google Fonts** — Syne + Plus Jakarta Sans
- **Netlify** — hosting gratis, auto-deploy dari GitHub

---

## 📝 Lisensi

Konten bebas dipakai untuk belajar. Dibuat dengan ❤️ dan banyak ngopi.
