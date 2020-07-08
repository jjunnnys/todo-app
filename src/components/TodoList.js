import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
/*
  - 위 최적화 코드는 현재 프로젝트 성능에 전혀 영향을 주지 않음
  - 왜냐면 TodoList 컴포넌트의 부모 컴포넌트인 App 컴포넌트가 리렌더링되는 유일한 이유가 todos 배열이 업데이트될 때만 해당
  - 즉, 지금 TodoList 컴포넌트는 불필요한 리렌더링 발생 안함
  - App 컴포넌트에 다른 state가 추가되어 해당 값들이 업데이트될 때는 TodoList 컴포넌트가 불필요한 리렌더링을 할 수 있음
  - 그렇기 때문에 미리 React.memo로 최적화해 줌
  - ** 리스트 관련 컴포넌트를 작성할 땐 ListItem과 List -> 이 두가지 컴포넌트를 최적화 해줘야 함 (단, 데이터양과 빈번한 업데이트인 경우 해당)
*/
