import React from "react";
import "../../assets/css/components/Items.css";

function Items({ currentNews }) {
  return (
    <div className={"container-fluid"}>
      {currentNews.map((news) => (
        <div
          className="notice-content"
          key={news._id}
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></div>
      ))}
    </div>
  );
}

export default Items;
