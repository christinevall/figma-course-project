# Figma Course Project

The example files for the course. One folder per lesson. You can look, change and break everything here — it's for learning.

## 1. Download

Click the lesson you need. The ZIP downloads straight away:

- [01 Starting with MCP](https://github.com/christinevall/figma-course-project/releases/latest/download/01-Starting-with-MCP.zip)
- [02 Figma to CSS](https://github.com/christinevall/figma-course-project/releases/latest/download/02-Figma-to-CSS.zip)
- [03 Auto Layout to code example](https://github.com/christinevall/figma-course-project/releases/latest/download/03-Auto-Layout-to-code-example.zip)
- [04 Figma to Design System](https://github.com/christinevall/figma-course-project/releases/latest/download/04-Figma-to-Design-System.zip)

Double-click the ZIP to unzip it. Move the folder somewhere you'll find it again (e.g. Documents).

No GitHub account needed.

**Just want to look?** The Storybook of folder 04 is online: https://christinevall.github.io/figma-course-project/

**The Figma file** the code was built from: [Hand-made Figma to Code](https://www.figma.com/community/file/1681259703873319741/01-step-1-hand-made-figma-to-code). Click **Open in Figma** and you get your own copy in your Drafts, free to change. You need a (free) Figma account.

## 2. Open a lesson

| Folder | What it is | How to open it |
| --- | --- | --- |
| `01 Starting with MCP` | A studio homepage, built from Figma via MCP in plain HTML and CSS | Double-click `index.html` |
| `02 Figma to CSS` | A portfolio page, built from Figma in plain HTML and CSS | Double-click `index.html`. It opens in your browser |
| `03 Auto Layout to code example` | A blog page: Figma Auto Layout turned into CSS | Double-click `index.html` |
| `04 Figma to Design System` | The same portfolio as React components, with Storybook | Needs a few steps, see below |

Each folder has a `GAPS.md`, `gaps.md` or `README.md`: what was built, and what Figma didn't answer.

### Folder 04: run it on your computer

Do this once: install [Node.js](https://nodejs.org) (the **LTS** version, like any other app).

Then:

1. Open **Terminal** (Mac) or **PowerShell** (Windows).
2. Type `cd ` (with a space), drag the `04 Figma to Design System` folder into the window, press **Enter**.
3. Type these, pressing **Enter** after each:

```bash
npm install
```

```bash
npm run storybook
```

Storybook opens at http://localhost:6010. To stop it, press `Ctrl + C` in the Terminal.

`npm install` is only needed the first time. After that, `npm run storybook` is enough.

## Stuck?

- **"npm: command not found"** → Node.js isn't installed yet, or Terminal was open before you installed it. Close Terminal, open it again.
- **Page looks broken** → Unzip the whole folder first. Don't open files from inside the ZIP.
- **Want to start over?** → Download the ZIP again.
