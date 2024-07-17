import React from "react";

const Preloader = ({ loading }) => {
  return (
    loading && (
      <div>
        <div id="preloader"></div>
      </div>
    )
  );
};

export default Preloader;
