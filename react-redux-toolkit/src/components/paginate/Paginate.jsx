import s from './Paginate.module.css'

const Paginate = ({totalItemsCount, itemsPerPage, currentPage, setCurrentPage, setCountItemsPerPage}) => {
  const pages = Math.ceil(totalItemsCount / itemsPerPage);
  const pageNumbers = [];

  for(let el = 1; el <= pages; el++) {
    pageNumbers.push(el);
  }

  const setSelectValue = (event) => {
    setCountItemsPerPage(event.target.value)
  }

  return (
    <div className={s.paginate_row}>
      <ul className={s.paginate}>
        {
          pageNumbers.map(page => (
            <li
              className={`${s.page} ${page === currentPage && s.active}`}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </li>
          ))
        }
      </ul>
      <div className={s.selection}>
        <div className={s.selection_title}>On the page</div>
        <select
          value={itemsPerPage}
          onChange={(event) => setSelectValue(event)}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Paginate;