import React from "react";
import moment from 'moment';

import { TableContainer, TableHeader, TableRow } from "./tableStyles";

const Table = props => {
  const { data } = props;
  return (
    <TableContainer>
      <TableHeader bottomBorder={true}>
        <div>
          <h2>{props.dataType}</h2>
          <h3>most recent</h3>
        </div>
        <div>
          <h2 className="percentage">{`+${props.growth}%`}<i className="fas fa-arrow-circle-up"/></h2>
        </div>
      </TableHeader>
      <table>
        {data.length ? data.sort((first, second) => {
          return Date.parse(second.created_at) - Date.parse(first.created_at)
        }).map(data => (
          <TableRow>
            <td>
              <h4>{data.browser || "Unknown"} </h4>
              <p>{moment(data.created_at, "YYYY-MM-DO, hh:mm:ss Z").fromNow()}</p>
            </td>
            <td>{`${data.region || "Unknown"}, ${data.country || "Unknown"}`}</td>
          </TableRow>
        )):
        <h1>No clicks yet...</h1>
      }
      </table>
    </TableContainer>
  );
};

export default Table;
