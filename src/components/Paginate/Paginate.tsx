import ReactPaginate from "react-paginate";
import css from "./Paginate.module.css";

interface PaginateProps {
  totalPages: number;
  onChange: (nextPage: number) => void;
  page: number;
}

export default function Paginate({ page, totalPages, onChange }: PaginateProps) {
    
    return (
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onChange(selected + 1)}
        forcePage={page - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
        renderOnZeroPageCount={null}
      />
    );
}
