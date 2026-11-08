import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ① message.jsから変数messageを読み込む
import { message } from './message.js'

// ② 読み込んだ変数をブラウザのコンソールに表示する
console.log(message)

// ③ Reactアプリを画面に表示する（元からあるコード）
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)