import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Spinner = () => {
  return (
    <div className="App-header">
      <CircularProgress disableShrink size={80} />
    </div>
  );
};
