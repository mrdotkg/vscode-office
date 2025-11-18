# Markdown Editor - Cleanup Instructions

## Files and Directories to Delete

### Provider Files (Delete)
```
src/provider/officeViewerProvider.ts
src/provider/javaDecompilerProvider.ts
src/provider/compress/  (entire directory)
  - commonHandler.ts
  - decompressHandler.ts
  - zipHandler.ts
  - rarHandler.ts
src/provider/handlers/  (entire directory)
  - classHandler.ts
  - imageHanlder.ts
```

### Service Files (Delete)
```
src/service/htmlService.ts
src/service/autoClearCacheStorage.ts
src/service/zip/  (entire directory)
  - zipUtils.ts
  - pretty-bytes/
```

### React Components (Delete)
```
src/react/view/compress/  (entire directory - Zip viewer)
src/react/view/excel/  (entire directory - Excel viewer)
src/react/view/image/  (entire directory - Image viewer)
src/react/view/word/  (entire directory - Word viewer)
src/react/view/fontViewer/  (entire directory - Font viewer)
src/react/antThemeConfig.ts
src/react/util/vscodeConfig.ts (if office-specific)
```

### Configuration Files (Delete)
```
theme/  (entire directory)
  - onedark-modern.json
  - onedark-modern-classic.json
  - material-icons.json
  - github-markdown.css (optional - keep if needed for markdown)

syntaxes/  (entire directory)
  - http-language-configuration.json
  - http.tmLanguage.json
  - reg-language-configuration.json
  - reg.tmLanguage

snippets/  (entire directory)
  - http.json

icons/  (entire directory - 638 material icon theme files)

resource/java-decompiler.jar
```

### Bundle Files (Delete)
```
src/bundle/  (entire directory - HTTP extension bundle)
```

## Files Modified

### Core Files (Already Modified)
- ✅ package.json - Removed office dependencies, themes, icons, languages
- ✅ src/extension.ts - Removed office providers and HTTP activation
- ✅ src/service/markdownService.ts - Removed PDF export logic
- ✅ src/react/main.tsx - Removed office viewer routes
- ✅ build.ts - Removed unnecessary dependencies and copy plugins

## Files to Keep

### Essential Markdown Files
```
src/provider/markdownEditorProvider.ts ✅
src/service/markdownService.ts ✅
src/service/markdown/  (all files)
  - holder.ts
  - markdown-pdf.js (optional - for PDF export if needed)
  - outline.js
  - html-export.js
  - markdown-it-katex.js
  - ext/

src/react/view/vscode.tsx ✅
src/react/util/vscode.js ✅
src/react/main.tsx ✅
src/react/main.css ✅

resource/vditor/  (markdown editor UI)
template/  (markdown templates - optional)
```

### Common Utilities
```
src/common/handler.ts ✅
src/common/util.ts ✅
src/common/fileUtil.ts ✅
src/common/Output.ts ✅
src/common/global.ts ✅
```

## Cleanup Commands (PowerShell)

```powershell
# Navigate to project
cd c:\Users\mrdot\Github\vscode-office

# Delete provider files
Remove-Item -Recurse -Force src/provider/officeViewerProvider.ts
Remove-Item -Recurse -Force src/provider/javaDecompilerProvider.ts
Remove-Item -Recurse -Force src/provider/compress
Remove-Item -Recurse -Force src/provider/handlers

# Delete service files
Remove-Item -Recurse -Force src/service/htmlService.ts
Remove-Item -Recurse -Force src/service/autoClearCacheStorage.ts
Remove-Item -Recurse -Force src/service/zip

# Delete React components
Remove-Item -Recurse -Force src/react/view/compress
Remove-Item -Recurse -Force src/react/view/excel
Remove-Item -Recurse -Force src/react/view/image
Remove-Item -Recurse -Force src/react/view/word
Remove-Item -Recurse -Force src/react/view/fontViewer
Remove-Item -Recurse -Force src/react/antThemeConfig.ts

# Delete configuration
Remove-Item -Recurse -Force theme
Remove-Item -Recurse -Force syntaxes
Remove-Item -Recurse -Force snippets
Remove-Item -Recurse -Force icons
Remove-Item -Recurse -Force src/bundle
Remove-Item -Recurse -Force resource/java-decompiler.jar

# Clean up node_modules (optional - will be reinstalled)
# Remove-Item -Recurse -Force node_modules
# npm install
```

## Summary of Changes

### Size Reduction
- **Before**: ~85% office-related code
- **After**: ~15% office-related code (removed)
- **Remaining**: Pure Markdown editing with instant rendering

### Dependencies Removed (~25 packages)
- @ant-design/icons
- adm-zip
- antd
- axios
- cheerio
- chrome-finder
- docx-preview
- file-type
- iconv-lite
- opentype.js
- pdf-lib
- puppeteer-core
- react-image-gallery
- udsv
- vscode-html-to-docx
- x-data-spreadsheet
- xlsx

### Dependencies Kept (~10 packages)
- date-format
- highlight.js
- katex
- markdown-it (+ plugins)
- mustache
- react
- react-dom

### Features Removed
- ❌ Excel/CSV viewing
- ❌ Word document viewing
- ❌ PDF viewing
- ❌ Image gallery
- ❌ Archive (ZIP/RAR) viewing
- ❌ Font viewer
- ❌ Java decompiler
- ❌ HTML viewer
- ❌ HTTP client
- ❌ Registry editor
- ❌ PDF export
- ❌ DOCX export
- ❌ Theme customization
- ❌ Icon theme

### Features Kept
- ✅ Markdown editing
- ✅ Instant rendering
- ✅ WYSIWYG editor
- ✅ Code highlighting
- ✅ Math rendering (KaTeX)
- ✅ Mermaid diagrams
- ✅ PlantUML diagrams
- ✅ Table of contents
- ✅ Checkboxes
- ✅ Clipboard image paste
- ✅ Outline view
- ✅ Toolbar toggle
- ✅ Theme selection (Light/Solarized)
- ✅ Code preview with syntax highlighting

## Next Steps

1. Run cleanup commands above
2. Run `npm install` to update dependencies
3. Run `npm run build` to build the extension
4. Test markdown editing functionality
5. Package with `npm run package`

## Notes

- The extension is now focused exclusively on Markdown editing
- All office file viewing capabilities have been removed
- The vditor editor remains the core UI for markdown editing
- No breaking changes to markdown editing functionality
