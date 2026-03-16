# ⚡ Belajar Claude

> Platform belajar Claude AI gratis, bahasa santai, untuk orang Indonesia yang awam teknologi.

🌐 **Live website:** [belajar-claude.netlify.app](https://belajar-claude.netlify.app)

---

## 🗂️ Struktur Folder

```
belajar-claude/
│
├── index.html              → Landing page utama
│
├── fase/
│   ├── fase-1.html         → Fase 1: Kenalan Dulu
│   ├── fase-2.html         → Fase 2: Belajar Ngomong ke Claude
│   ├── fase-3.html         → Fase 3: Prompt Level Lanjut
│   ├── fase-4.html         → Fase 4: Claude untuk Coding
│   ├── fase-5.html         → Fase 5: Claude API Dasar
│   └── fase-6.html         → Fase 6: Bangun Sesuatu yang Nyata
│
├── assets/
│   ├── css/style.css       → Styling global (warna, font, layout)
│   ├── js/main.js          → Progress tracker & quiz logic
│   └── img/                → Gambar dan ilustrasi
│
└── README.md               → File ini
```

---

## 📚 Isi Tiap Fase

| Fase | Judul | Jumlah Poin |
|------|-------|-------------|
| 1 | Kenalan Dulu | 5 poin |
| 2 | Belajar Ngomong ke Claude | 6 poin |
| 3 | Prompt Level Lanjut | 6 poin |
| 4 | Claude untuk Coding | 6 poin |
| 5 | Claude API Dasar | 6 poin |
| 6 | Bangun Sesuatu yang Nyata | 6 poin |

---

## ✏️ Cara Update Materi

Karena website ini **HTML statis**, cara update-nya gampang banget:

1. Edit file HTML yang mau diubah (misal `fase/fase-1.html`)
2. Simpan
3. Push ke GitHub:
   ```
   git add .
   git commit -m "update materi fase 1"
   git push
   ```
4. Netlify otomatis deploy dalam ~1–2 menit ✅

---

## 🚀 Cara Deploy ke Netlify (Pertama Kali)

1. Buka [netlify.com](https://netlify.com) → Login
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **GitHub** → Pilih repo `belajar-claude`
4. Pengaturan build:
   - Build command: *(kosongkan)*
   - Publish directory: `/` *(root)*
5. Klik **Deploy site**
6. Ganti nama site jadi `belajar-claude` di Site Settings

---

## ⚙️ Fitur Website

| Fitur | Cara Kerja | Server? |
|-------|-----------|---------|
| Progress tracker | localStorage browser | ❌ Tidak perlu |
| Quiz + skor | JavaScript murni | ❌ Tidak perlu |
| Tombol "Coba di Claude" | Link ke claude.ai | ❌ Tidak perlu |
| Komentar pembaca | Giscus (GitHub Discussions) | ❌ Gratis |

---

## 🛠️ Tech Stack

- **HTML + CSS + JavaScript** murni (no framework)
- **Google Fonts** — Syne + Plus Jakarta Sans
- **Giscus** — sistem komentar gratis via GitHub Discussions
- **Netlify** — hosting gratis, auto-deploy dari GitHub

---

## 📝 Lisensi

Konten bebas dipakai untuk belajar. Dibuat dengan ❤️ dan banyak ngopi.
