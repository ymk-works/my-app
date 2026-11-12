
import { useState } from "react";

// UserCardのデザインを設定するCSSファイルを読み込む
import "./UserCard.css";

// ========================================
// ① UserCardコンポーネントを作成
// ========================================

// props：親コンポーネントから渡されたデータを受け取る
// =>：アロー関数というJavaScriptの書き方
const UserCard = (props) => {

  // ========================================
  // ② 画面に表示する内容を指定
  // ========================================
  return (
    // user-cardというCSSクラスを持つdivで全体を囲む
    <div className="user-card">

      {/* 名前を表示する */}
      {/* props.name：親から渡されたnameの値 */}
      <h2 className="user-name">名前：{props.name}</h2>

      {/* 年齢を表示する */}
      {/* props.age：親から渡されたageの値 */}
      <p className="user-age">年齢：{props.age}</p>

    </div>
  );
};

// ========================================
// ③ ほかのファイルで使えるようにする
// ========================================
export default UserCard;
