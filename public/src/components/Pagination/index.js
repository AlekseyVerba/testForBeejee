import React, { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux"
import { useActions } from "../../hooks/useActions"
import "./index.scss"

const Pagination = ({ itemsPerPage }) => {

  const { count, currentPage } = useSelector(state => state.task)
  const { actionChangeOffset, actionChangeCurrentPage } = useActions()

  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    setPageCount(Math.ceil(count / itemsPerPage));
  }, [count]);

  const handlePageClick = ({selected}) => {
    const newOffset = (selected * itemsPerPage);
    actionChangeOffset(newOffset)
    actionChangeCurrentPage(selected)
  };


  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="&raquo;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="&laquo;"
        renderOnZeroPageCount={null}
        activeClassName="active"
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        disabledClassName="disabled"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        initialPage={currentPage}
      />
    </div>
  );


}

export default Pagination