# KI-Chatbot – Fragen zu allen Themen

## 🌍 Über das Projekt

Dieses Projekt ist ein **KI-Chatbot**, der Fragen zu **allen Themen** beantworten kann. Egal, ob du mehr über Technologie, Wissenschaft, Kultur, Geschichte oder andere Bereiche wissen möchtest – hier findest du Antworten.

## 🚀 Features

- **Responsive Design**: Funktioniert auf allen Geräten (Desktop, Tablet, Mobil).
- **Moderne Chat-Oberfläche**: Benutzerfreundlich und ansprechend.
- **KI-Backend**: Nutzt Hugging Face Router über OpenAI-Client.
- **GitHub Pages**: Hosting der Frontend-Website.

## 🛠️ Technologien

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express, OpenAI-Client
- **KI-Modell**: `deepseek-ai/DeepSeek-V3.2:novita` (über Hugging Face Router)
- **Hosting**: GitHub Pages (Frontend), Node.js-Server (Backend)

## 📂 Projektstruktur

```
KI/
├── index.html          # Chat-Oberfläche (Frontend)
├── server.js           # Backend-Server (Node.js/Express)
├── package.json        # Abhängigkeiten und Skripte
├── README.md           # Projektbeschreibung
└── .github/
    └── workflows/
        └── deploy_pages.yml  # GitHub Pages Deployment
```

## 🌐 GitHub Pages

Die Frontend-Website wird über **GitHub Pages** gehostet. Um sie zu aktivieren:

1. **Repository öffentlich machen** (bereits erledigt!)
2. **GitHub Pages aktivieren**:
   - Gehe zu [GitHub.com](https://github.com) und öffne dein Repository: [Firestream999/KI](https://github.com/Firestream999/KI).
   - Klicke auf **Settings** (Einstellungen).
   - Scrolle nach unten zu **Pages** (Seiten).
   - Wähle als Quelle den `main`-Branch und den Ordner `/ (root)`.
   - Klicke auf **Save** (Speichern).

3. **Website aufrufen**:
   Nach einigen Minuten ist die Website unter folgender URL verfügbar:
   👉 [https://firestream999.github.io/KI/](https://firestream999.github.io/KI/)

## ⚙️ Backend einrichten

Das Backend muss auf einem Server oder lokal laufen, damit der Chatbot funktioniert.

### 1. Abhängigkeiten installieren
```bash
npm install
```

### 2. Umgebungsvariable setzen
Erstelle eine `.env`-Datei und füge dein **Hugging Face Token** hinzu:
```env
HF_TOKEN=dein_hugging_face_token
```

### 3. Backend starten
```bash
npm start
```
Das Backend läuft dann auf `http://localhost:3000`.

### 4. Backend-URL in der Frontend anpassen
In der `index.html` musst du die `backendUrl` anpassen, damit die Frontend mit deinem Backend kommunizieren kann:
```javascript
const backendUrl = "http://deine-backend-url:3000/chat";
```

## 💡 Hinweise

- **CORS**: Das Backend ist so konfiguriert, dass es Anfragen von `https://firestream999.github.io` akzeptiert. Falls du eine andere Domain verwendest, passe die CORS-Einstellungen in `server.js` an.
- **Backend-Hosting**: Für eine vollständige Lösung musst du das Backend auf einem Server hosten (z. B. Render, Vercel, Heroku).
- **KI-Modell**: Du kannst das Modell in `server.js` ändern, indem du den `model`-Parameter anpasst.

## 📝 Lizenz

Dieses Projekt ist **open source** und kann frei verwendet werden.

---

💬 **Fragen oder Unterstützung?** Öffne ein Issue oder kontaktiere uns!
