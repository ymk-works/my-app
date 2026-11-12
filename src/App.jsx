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
// moleculesフォルダのUserCardコンポーネントを読み込む
import UserCard from "./components/molecules/UserCard.jsx";

function App() {
  // ① ユーザー名を変数に保存する
  const userName = "山田太郎";

  return (
    <>
      {/* ② 変数userNameを使って挨拶を表示する */}
      <h1>こんにちは、{userName}さん！</h1>

      {/* ③ ユーザーカードを表示するエリア */}
      {/* paddingは内側の余白。上下左右に10px設定する */}
      <div style={{ padding: "10px" }}>

        {/* 1人目：名前と年齢をPropsとして渡す */}
        <UserCard name={"佐藤花子"} age={28} />

        {/* 2人目：同じ部品に別のデータを渡す */}
        <UserCard name={"田中耕一"} age={40} />

      </div>
    </>
  );
}

export default App;
