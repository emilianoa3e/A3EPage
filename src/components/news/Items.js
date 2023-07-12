import React, { useState } from "react";
import Pagination from "./Pagination";
import Summary from "../New-Service/Summary";
import imagen from "../../assets/img/banner1.jpg";

function Items({ currentNews, pageCount, handlePageClick }) {
  const [see, setSee] = useState(false);
  const changeState = () => {
    setSee(!see);
  };
  return (
    <>
      {currentNews.map((news, index) => (
        <div key={index} className={"container-fluid p-0 mb-3"}>
          <>
            {/* Title */}
            <div className="p-2">
              <h1
                className="text-start ms-4 mt-4"
                style={{ color: "#00743B", fontWeight: "bold" }}
              >
                {news.title}
              </h1>
            </div>
            <Summary
              image={imagen}
              notice={true}
              changeState={changeState}
              data={news.summary}
              see={see}
            />
            <div className="mt-4">
              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            </div>
            {/* Content */}
            {see && (
              <div
                className="p-3 pe-5 ps-5 mt-5 content"
                dangerouslySetInnerHTML={{ __html: news.content }}
              ></div>
            )}
          </>
        </div>
      ))}
    </>
  );
}

export default Items;
