import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
