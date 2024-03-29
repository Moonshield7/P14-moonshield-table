function TableBody ({tableData, columns}) {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
          {columns.map(({ accessor }) => {
           const tData = data[accessor] ? data[accessor] : "---";
           return <td key={tData}>{tData}</td>;
          })}
         </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody;