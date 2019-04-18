import React from "react";
import moment from 'moment';

import { TableContainer, TableHeader, TableRow } from "./tableStyles";

const Table = props => {
  const { data, growth, dataType } = props;
  return (
    <TableContainer>
      {/* ------------------------------ Table Header ------------------------------ */}
      <TableHeader bottomBorder={true}>
        <div>
          <h2>{dataType}</h2>
          <h3>most recent</h3>
        </div>
        <div>
          <h2 className="percentage">{`+${growth}%`}<i className="fas fa-arrow-circle-up"/></h2>
        </div>
      </TableHeader>
      {/* ------------------------------ Table ------------------------------ */}
      <table>
        <tbody>
          {data.length ? data.sort((first, second) => {
            return Date.parse(second.created_at) - Date.parse(first.created_at)
          }).map((data, i) => (
            <TableRow key={i}>
              <td>
                <h4>{data.browser} </h4>
                <p>{moment(data.created_at, "YYYY-MM-DO, hh:mm:ss Z").fromNow()}</p>
              </td>
              <td>{`${data.region || "Unknown"}, ${data.country || "Unknown"}`}</td>
            </TableRow>
          )):
            <tr className="no-data">
              <td>
                <h1>No clicks yet...</h1>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
