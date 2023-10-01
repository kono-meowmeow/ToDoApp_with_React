import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map関数を使って、配列の要素を一つずつ取り出す */}
          {/* この場合、incompleteTodosの要素を一つずつ取り出している */}
          {/* そのため、incompleteTodosの要素の数だけli要素が生成される */}
          {todos.map((todo, index) => {
            return(
              // map関数の中でreturnを使う場合、keyを設定する必要がある
              // このkeyは、Reactが仮想DOM内で要素を識別するためのもの
              // このkeyは、一意である必要がある
              // そのため、ここではindexをkeyとしている
              <li key={index} >
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  {/* 下記の記述だと、ページ読み込み時にonClickDeleteが実行されてしまう */}
                  {/* <button onClick={onClickDelete(index)}>削除</button> */}
                  {/* 関数に引数を渡したいときは、そのまま書くとページ読み込み時に実行される */}
                  {/* そのため、(アロー)関数を使って、関数を返すようにする */}
                  {/* 下記の記述だと、ページ読み込み時にonClickDeleteが実行されない */}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
