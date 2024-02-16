import { useEffect, useState } from "react";
import styles from "./TableFooter.module.css";

function TableFooter ({ range, setPage, page, slice }) {
  const [showPages, setShowPages] = useState(false)

  useEffect(() => {
    if(slice.length < 1 && page !== 1){
      setPage(page -1)
    }
  }, [slice, page, setPage])

  return (
  <>
    <div id="table-footer" className={`${styles.tableFooter} ${showPages ? "" :"reduced-footer"}`}>
      {range.map((el, index) => (
        <button 
          key={`${index}-${el}`} 
          onClick={() => setPage(el)}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}>
            {el}
        </button>
      ))}
      
    </div>
    <p className="show-pages-button" onClick={() => setShowPages(!showPages)}>{showPages ? "Hide" : "See"} all pages</p>
  </>
  )
}

export default TableFooter