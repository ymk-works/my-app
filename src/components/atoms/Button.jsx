
import { useState } from "react";
import "./Button.css"; // ボタンのデザインを読み込む

// colorとtextをPropsとして受け取る
export default function Button({ color, text }) {
  // 受け取ったcolorをCSSクラス名に組み込む
  // 受け取ったtextをボタンの文字として表示する
  return <button className={`btn-${color}`}>{text}</button>;
}
