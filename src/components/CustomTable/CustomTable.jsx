import TableHead from "../TableHead/index.jsx";
import TableBody from "../TableBody/index.jsx";
import { useSortableTable } from "../../useSortableTable";
import { useState } from 'react';
import TableFooter from "../TableFooter/index.jsx";
import usePagesTable from "../../usePagesTable";
import '../../styles/global.css'

export function CustomTable ({data, columns, searchFeature}) {
  const [query, setQuery] = useState("")
  const [tableData, handleSorting] = useSortableTable(data)
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { slice, range } = usePagesTable(tableData, page, rowsPerPage, columns, query);


  return (
    <div className='table_container'>
      <div className="table-options">
        {searchFeature 
        ? <input type='text' placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())} /> 
        : ""}
        <div className="rows-select">
        <label htmlFor="rowsPerPage">Number of rows per page</label>
        <select name="rowsPerPage" id="rowsPerPage" onChange={(e) => setRowsPerPage(e.target.value)}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
        </select>
        </div>
      </div>
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody tableData={slice} columns={columns} />
      </table>
      {
        range < 2 ? "" : <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      }
      
    </div>

  )
}