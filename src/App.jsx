import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
// LikeButton.jsxで作ったコンポーネントを読み込む
import LikeButton from "./components/atoms/LikeButton.jsx";
// LikeButton専用のCSSを読み込む
import "./components/atoms/LikeButton.css";
// atomsフォルダで作成したLoginButtonコンポーネントを読み込む
import LoginButton from "./components/atoms/LoginButton.jsx";
// atomsフォルダで作った共通ボタンを読み込む
import Button from "./components/atoms/Button.jsx";
function App() {

  return (
    <>
<>
  {/* 青色の「送信する」ボタン */}
  <Button color="blue" text="送信する" />

  {/* 赤色の「キャンセル」ボタン */}
  <Button color="red" text="キャンセル" />
</>
      
    </>
  );
}

export default App;
