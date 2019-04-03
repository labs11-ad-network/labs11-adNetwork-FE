import React from "react";
import { TableContainer } from "./tableStyles";

const Table = props => {
  const { offerAnalytics } = props;
  return (
    <TableContainer>
      <table>
        {offerAnalytics.clicks.map(click => (
          <tr>
            <td>{click.browser}</td>
          </tr>
        ))}
      </table>
    </TableContainer>
  );
};

export default Table;
