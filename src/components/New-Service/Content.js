import React from "react";

function Content({content}) {
  return (
    <div
      className="p-3 mt-5 content"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}

export default Content;
