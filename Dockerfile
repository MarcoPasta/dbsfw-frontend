# Verwende ein leichtgewichtiges Node.js-Image als Basis
FROM node:alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopiere die Projektdateien in das Arbeitsverzeichnis
COPY . .

# Installiere Abhängigkeiten und baue das Projekt
RUN npm install
RUN npm run build

# Exponiere den Port, den dein React-Server verwenden wird (standardmäßig 3000)
EXPOSE 8080

# Starte die Anwendung
CMD ["npm", "run", "dev"]
