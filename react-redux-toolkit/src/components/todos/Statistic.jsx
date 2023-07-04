
const Statistic = ({totalTodos}) => {
  let openedTodos = 0;
  let closedTodos = 0;

  totalTodos.forEach(todo => {
    todo.completed ? closedTodos++ : openedTodos++ ;
  })

  return (
    <div className="statistic">
      <div>Total todos = <span className="statistic-total">{totalTodos.length}</span></div>
      <div>Opened todos = <span className="statistic-opened">{closedTodos}</span></div>
      <div>Closed todos = <span className="statistic-closed">{openedTodos}</span></div>
    </div>
  );
};

export default Statistic;