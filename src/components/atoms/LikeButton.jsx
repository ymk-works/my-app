// ReactからuseStateという機能を読み込む
import { useState } from "react";

// LikeButtonという名前のコンポーネントを作成する
// export defaultを付けることで、別のファイルから読み込める
export default function LikeButton() {

  // いいねの状態を管理する（初期値はfalse＝いいねしていない）
  // isLiked：現在の状態
  // setIsLiked：状態を変更するための関数
  const [isLiked, setIsLiked] = useState(false);

  // ボタンがクリックされたときの処理
  const toggleLike = () => {

    // 現在の状態を反転する
    // falseならtrue、trueならfalseになる
    setIsLiked(!isLiked);
  };

  // 画面に表示する内容
  return (
    <button
      // いいね済みならlikedというCSSクラスを付ける
      className={isLiked ? "liked" : ""}

      // ボタンをクリックしたらtoggleLikeを実行する
      onClick={toggleLike}
    >
      {/* 状態に応じてボタンの文字を切り替える */}
      {isLiked ? "いいね済み" : "いいね"}
    </button>
  );
}