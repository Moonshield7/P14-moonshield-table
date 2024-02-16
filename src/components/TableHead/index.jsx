import { useState } from "react";

function TableHead ({columns, handleSorting}) {
  const [sortField, setSortField] = useState("")
  const [order, setOrder] = useState("asc")

  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc"
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
   }
  
  return (
    <thead>
      <tr>
        {columns.map(({label, accessor, sortable}) => {
          const cl = sortable 
            ? sortField === accessor && order === "asc" 
              ? "fa-solid fa-arrow-up"
            : sortField === accessor && order === "desc" 
              ? "fa-solid fa-arrow-down"
              : "fa-solid fa-arrows-up-down"
            : ""
          return <th key={accessor} onClick={sortable ? () => handleSortingChange(accessor) : null}>{label} <i className={cl} /></th>
        })}
      </tr>
    </thead>
  );
}

export default TableHead;