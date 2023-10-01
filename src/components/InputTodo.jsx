import React from 'react';

// component化すると、同じクラス名は他のcomponentでは出なさそうなのに、styles.cssに定義しているという問題が出てくる
// そこで、CSS-in-JSという手法を使う
// 今回は、inline styleを使う
// ただし、JSのオブジェクトなので、キャメルケースで書く必要があり、また、文字列で書く必要がある
const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
};
// また、必ずしもCSS-in-JSを使うことが正解というわけではないことにも注意

export const InputTodo = (props) => {
  // propsから、todoTextとonChangeとonClickを取得する
  const { todoText, onChange, onClick } = props;

  return (
    <>
      <div style={style}>
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
}
