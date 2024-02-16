import { useEffect, useState } from "react"

function calculateRange (data, rowsPerPage) {
  const range = []
  const numberOfPages = Math.ceil(data.length / rowsPerPage)
  for(let i = 1; i <= numberOfPages; i++){
    range.push(i)
  }
  return range
}

function sliceData(data, page, rowsPerPage) {
  return data.slice((page -1) * rowsPerPage, page * rowsPerPage)
}


const search = (dataToFilter, columns, query) => {
  return dataToFilter.filter((item) =>
    {

      const copyItem = {}
      columns.forEach((column) => 
      {
        if(column.searchable){
          copyItem[column.accessor] = item[column.accessor]
        }
      })
    return JSON.stringify(copyItem).toLowerCase().includes(query.toLowerCase())
    }
  );
};

function usePagesTable (data, page, rowsPerPage, columns, query) {
  const [tableRange, setTableRange] = useState([])
  const [slice, setSlice] = useState([])

  useEffect(() => {
    const searchedData = search(data, columns, query)
    const range = calculateRange(searchedData, rowsPerPage)
    setTableRange([...range])

    const slice = sliceData(searchedData, page, rowsPerPage)
    setSlice([...slice])
  }, [data, setTableRange, page, setSlice, query, rowsPerPage])

  return { slice, range: tableRange }
}

export default usePagesTable