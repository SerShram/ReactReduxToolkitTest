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
        <select
          value={itemsPerPage}
          onChange={(event) => setSelectValue(event)}
        >
          <option value="3">3 / pages</option>
          <option value="5">5 / pages</option>
          <option value="10">10 / pages</option>
          <option value="20">20 / pages</option>
        </select>
      </div>
    </div>
  );
};

export default Paginate;