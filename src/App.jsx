import React from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = React.useState('');
  const [incompleteTodos, setIncompleteTodos] = React.useState([]);
  const [completeTodos, setCompleteTodos] = React.useState([]);

  // inputに入力された値を取得する関数
  // eventは、onChangeで発生したイベント
  // event.target.valueで、inputに入力された値を取得できる
  // setTodoTextで、todoTextの値を更新する
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンを押した時の処理
  const onClickAdd = () => {
    // inputに入力された値が空の場合、処理を終了する(追加しない)
    if (todoText === '') return;

    // 未完了のTODOリストに、inputに入力された値を追加する
    // 追加するための配列を作成
    // ここでは、incompleteTodosの配列に、inputに入力された値を追加する
    // ...incompleteTodosで、incompleteTodosの配列の要素を一つずつ取り出して、配列の最後にtodoTextを追加する(配列の結合)
    const newTodos = [...incompleteTodos, todoText];
    // 未完了のTODOリストを更新する
    setIncompleteTodos(newTodos);

    // inputに入力された値を空にする
    setTodoText('');
  };

  // 削除ボタンを押した時の処理
  const onClickDelete = (index) => {
    // 未完了のTODOリストから、削除する要素を除いた配列を作成する
    // まずは、newTodosにincompleteTodos(現在の未完了のTODOリスト)を代入する
    const newTodos = [...incompleteTodos];

    // 削除実行
    deleteFromIncompleteTodos(newTodos, index);
  };

  // 完了ボタンを押した時の処理
  const onClickComplete = (index) => {
    // 未完了のTODOリストから、削除する要素を除いた配列を作成する
    // まずは、newIncompleteTodosにincompleteTodos(現在の未完了のTODOリスト)を代入する
    const newIncompleteTodos = [...incompleteTodos];
    // 完了のTODOリストに、値を追加する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);

    // 削除実行
    deleteFromIncompleteTodos(newIncompleteTodos, index);
  };

  // 戻すボタンを押した時の処理
  const onClickBack = (index) => {
    // 完了のTODOリストから、削除する要素を除いた配列を作成する
    // まずは、newCompleteTodosにcompleteTodos(現在の完了のTODOリスト)を代入する
    const newCompleteTodos = [...completeTodos];

    // 未完了のTODOリストに、値を追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);

    // 削除実行
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  // 未完了のTODOリストから、削除する要素を除いた配列を作成する関数
  const deleteFromIncompleteTodos = (incompleteTodos ,index) => {
    // splice関数で、配列から要素を削除する
    // splice関数の第一引数には、削除する要素のインデックス番号を指定する
    // splice関数の第二引数には、削除する要素の数を指定する
    // ここでは、削除する要素のインデックス番号をindexで指定し、削除する要素の数を1で指定している
    incompleteTodos.splice(index, 1);
    // 未完了のTODOリストを更新する
    setIncompleteTodos(incompleteTodos);
  };

  return (
    <>
      {/* jsxではclass名を与えるのに、classNameを使う点に注意 */}
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map関数を使って、配列の要素を一つずつ取り出す */}
          {/* この場合、incompleteTodosの要素を一つずつ取り出している */}
          {/* そのため、incompleteTodosの要素の数だけli要素が生成される */}
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return(
              <li key={index}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
