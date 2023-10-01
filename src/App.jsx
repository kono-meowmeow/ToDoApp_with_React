import React from "react";
import { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos"

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
      {/* componentにpropsで各関数を渡す */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClick={onClickBack}
      />
    </>
  );
};
