import React from "react";

const Loading = (props) => {
  return (
    <div>
      {props.loading && (
        <div className="loading">
          CARREGANDO
          <div>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
