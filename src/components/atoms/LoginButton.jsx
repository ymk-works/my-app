
import { useState } from "react";

// LoginButton.cssからボタンのデザインを読み込む
import "./LoginButton.css";

// ========================================
// ログインボタンのコンポーネント
// ========================================

// export default：ほかのファイルから読み込めるようにする
// LoginButton：この部品（コンポーネント）の名前
export default function LoginButton() {

  // ① ログイン状態を管理する
  // isLoggedIn：現在ログインしているかどうか
  // setIsLoggedIn：ログイン状態を変更するための関数
  // false：初期状態は未ログイン
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ② ボタンがクリックされたときの処理
  const toggleLogin = () => {

    // ! は真偽値を反転させる演算子
    // false（未ログイン）→ true（ログイン中）
    // true（ログイン中）→ false（未ログイン）
    setIsLoggedIn(!isLoggedIn);
  };

  // ③ 画面に表示するボタン
  return (
    <button

      // ログイン中なら「logged-in」というCSSクラスを付ける
      // 未ログインならクラス名は空文字にする
      className={isLoggedIn ? "logged-in" : ""}

      // ボタンをクリックしたらtoggleLogin関数を実行する
      onClick={toggleLogin}
    >

      {/* ④ 三項演算子で表示する文字を切り替える */}
      {/* trueなら「ログアウト」、falseなら「ログイン」 */}
      {isLoggedIn ? "ログアウト" : "ログイン"}

    </button>
  );
}
