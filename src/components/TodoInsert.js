import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form action="" className="TodoInsert">
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">
        <TiPlusOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
