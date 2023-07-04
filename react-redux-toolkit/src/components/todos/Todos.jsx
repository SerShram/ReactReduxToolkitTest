import {useDispatch, useSelector} from 'react-redux';
import Todo from "./Todo";
import Paginate from "../paginate/Paginate";
import {setCurrentPage, setTodosPerPage} from "../../store/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const totalTodos = useSelector(state => state.todos.todos);
  const currentPage = useSelector(state => state.todos.currentPage);
  const todosPerPage = useSelector(state => state.todos.todosPerPage);

  const indexOfLastTodo = todosPerPage * currentPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const currentTodos = totalTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const setPageOfPaginate = (pageNumber) => {
    pageNumber !== currentPage && dispatch(setCurrentPage(pageNumber));
  }
  const setCountTodosPerPage = (count) => {
    dispatch(setTodosPerPage(count++));
  }

  return (
    <>
      <ul className="todos">
        {
          currentTodos.map(todo => (
            <Todo key={todo.id} todo={todo}/>
          ))
        }
      </ul>
      <Paginate
        totalItemsCount={totalTodos.length}
        itemsPerPage={todosPerPage}
        currentPage={currentPage}
        setCurrentPage={setPageOfPaginate}
        setCountItemsPerPage={setCountTodosPerPage}
      />
    </>
  );
};

export default Todos;