import React from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = React.useState(["ああああ", "いいいい"]);
  const [completeTodos, setCompleteTodos] = React.useState(["うううう"]);
  return (
    <>
      {/* jsxではclass名を与えるのに、classNameを使う点に注意 */}
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map関数を使って、配列の要素を一つずつ取り出す */}
          {/* この場合、incompleteTodosの要素を一つずつ取り出している */}
          {/* そのため、incompleteTodosの要素の数だけli要素が生成される */}
          {incompleteTodos.map((todo) => {
            return(
              // map関数の中でreturnを使う場合、keyを設定する必要がある
              // このkeyは、Reactが仮想DOM内で要素を識別するためのもの
              // このkeyは、一意である必要がある
              // そのため、ここではtodoをkeyとしている
              <li key={todo} >
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return(
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
