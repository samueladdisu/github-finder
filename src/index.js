import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'

// ⛔️ ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API,
// your app will behave as if it's running React 17.
ReactDOM.render( // 👈️ deprecated starting React 18
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);