import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <ul>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div></div>
    </>
  );
};
