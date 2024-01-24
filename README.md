# Userrole Form

Projektaufgabenstellung: Responsive ReactJS-Anwendung mit Tailwind CSS, TypeScript und verschiedenen Funktionen

Ziel des Projekts: Entwickeln Sie eine responsive ReactJS-Anwendung unter Verwendung von Tailwind CSS, TypeScript und verschiedenen Funktionen wie React Hook Form, Validierung mit Yup und die Speicherung der Daten im Local Storage. Die Anwendung soll ein Formular mit Eingabefeldern für Vorname, Nachname und eine Auswahlliste für die Benutzerrolle enthalten. Nach dem Absenden des Formulars sollen die eingegebenen Daten in einer Liste auf der rechten Seite angezeigt und im Local Storage gespeichert werden.

## Aufgabenstellung:

Entwickeln Sie eine Benutzerverwaltungsanwendung, bei der Benutzer ihre Informationen eingeben können. Die Anwendung soll die folgenden Funktionen umfassen:

1. Erstellen Sie ein responsives Formular unter Verwendung von React Hook Form.

   - Das Formular soll Eingabefelder für Vorname, Nachname und eine Auswahlliste für die Benutzerrolle enthalten.
   - Verwenden Sie die Validierungsbibliothek Yup, um sicherzustellen, dass alle Felder ausgefüllt sind.
   - Die Benutzerrolle soll aus den Optionen "Admin", "Editor" und "User" ausgewählt werden können.
   - Feld Newsletter ist optional
   - Stellen Sie sicher, dass alle drei Felder als Pflichtfelder markiert sind.

2. Implementieren Sie die Funktionalität zum Absenden des Formulars.

   - Beim Klick auf den Absenden-Button sollen die eingegebenen Daten validiert werden.
   - Wenn die Validierung erfolgreich ist, sollen die eingegebenen Daten in einer Liste auf der rechten Seite angezeigt werden.
   - Verwenden Sie React useState-Hook, um den Zustand der eingegebenen Daten in der Komponente zu verwalten.
   - Speichern Sie die Daten im Local Storage, so dass sie zwischen den Sitzungen erhalten bleiben. (optional --> advanced feature)

3. Stellen Sie sicher, dass die Anwendung responsive ist.

   - Verwenden Sie Tailwind CSS, um das Layout der Anwendung zu gestalten und sicherzustellen, dass es sich verschiedenen Bildschirmgrößen anpasst.
   - Testen Sie die Anwendung in verschiedenen Ansichtsmodi (Desktop, Tablet, Mobilgerät) und stellen Sie sicher, dass alle Elemente korrekt dargestellt werden.
   - Wenn die Liste Rechts zu lange wird sollte diese Section in der y-Achse scrollbar sein

Hinweis: Sie können zusätzliche Funktionen hinzufügen oder das Projekt erweitern, um es Ihren Anforderungen anzupassen. Die oben genannten Funktionen dienen als grundlegender Leitfaden für das Projekt.

![alt text](src/assets/Bildschirm_foto_2023-07-06.png)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# Userrole_Form
