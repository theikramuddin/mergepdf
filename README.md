# Merge PDF Online

A fast, private, client-side PDF merger built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📁 Drag & drop PDF upload via **react-dropzone**
- 🔀 Reorder files with drag handles via **@dnd-kit**
- 🔒 100% client-side merging via **pdf-lib** — no server upload
- 📱 Mobile responsive
- ✅ File validation (PDF only, 20MB max)
- 🎨 Clean modern UI with Syne + DM Sans fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| pdf-lib | Client-side PDF merging |
| react-dropzone | File upload UX |
| @dnd-kit | Drag-and-drop file reordering |

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout + metadata/SEO
    page.tsx         # Main page
    globals.css      # Global styles + font imports
  components/
    MergeTool.tsx    # Main stateful tool component
    DropZone.tsx     # File upload drop zone
    FileList.tsx     # DnD-kit sortable list wrapper
    SortableFileItem.tsx  # Individual file row
    MergeButton.tsx  # Merge CTA with loading state
    SeoContent.tsx   # How-to / FAQ / benefits sections
  lib/
    pdf.ts           # mergePDFs(), formatFileSize(), downloadBlob()
```
