
const Statistic = ({totalTodos}) => {
  let openedTodos = 0;
  let closedTodos = 0;

  totalTodos.forEach(todo => {
    todo.completed ? closedTodos++ : openedTodos++ ;
  })

  return (
    <div className="statistic">
      <div>Total todos = <span className="statistic-total">{totalTodos.length}</span></div>
      <div>Opened todos = <span className="statistic-opened">{openedTodos}</span></div>
      <div>Closed todos = <span className="statistic-closed">{closedTodos}</span></div>
    </div>
  );
};

export default Statistic;