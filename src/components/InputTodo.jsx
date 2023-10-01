import React from 'react';

export const InputTodo = (props) => {
  // propsから、todoTextとonChangeとonClickを取得する
  const { todoText, onChange, onClick } = props;

  return (
    <>
      {/* jsxではclass名を与えるのに、classNameを使う点に注意 */}
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
}
