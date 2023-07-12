import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="p-2 title">
      <h1
        className="text-start ms-4 mt-5"
        style={{ color: "#00743B", fontWeight: "bold" }}
      >
        {title}
      </h1>
      {subtitle && <h3 className="text-center mt-2 mb-4">{subtitle}</h3>}
    </div>
  );
}

export default Title;
