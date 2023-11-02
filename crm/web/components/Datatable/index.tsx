import React from "react";
import style from "./style.module.css";

function Datatable({ header, children }: any) {
  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            {header.map((e: any) => (
              <th key={e}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
          {/* <tr>
            <td>Dom</td>
            <td>6000</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Dom</td>
            <td>6000</td>
            <td>6000</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}

export default Datatable;
