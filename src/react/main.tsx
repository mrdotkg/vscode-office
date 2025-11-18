import ReactDOM from 'react-dom/client';
import './util/vscode.js';
import './main.css'

document.getElementById('_defaultStyles')?.parentNode?.removeChild(document.getElementById('_defaultStyles'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>Markdown Editor Ready</div>
)
