import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

function LinearIndeterminate(props) {
  return (
    <LinearProgress
      style={{
        position: "fixed",
        top: "62px",
        width: "100%",
        zIndex: 9999
      }}
    />
  );
}

export default LinearIndeterminate;
