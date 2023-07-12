import React, { useState } from "react";
import Pagination from "./Pagination";
import Summary from "../New-Service/Summary";
import SummaryButton from "../New-Service/SummaryButton"
import imagen from "../../assets/img/banner1.jpg";

function Items({ currentNews, pageCount, handlePageClick }) {
  const [see, setSee] = useState(false);
  const changeState = () => {
    setSee(!see);
  };
  return (
    <div className={"container-fluid p-0 mb-3"}>
      {currentNews.map((news, index) => (
        <>
          {/* Title */}
          <div key={news._id} className="p-2 title">
            <h1
              className="text-start ms-4 mt-5"
              style={{ color: "#00743B", fontWeight: "bold" }}
            >
              {news.title}
            </h1>
          </div>
         <SummaryButton notice={true}/>
          {/* Resume */}
         <Summary image={imagen} changeState={changeState} data={news.summary} see={see}/>
          <div className="mt-4">
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>

          {/* Content */}
          {see && (
            <div
              className="content p-4"
              key={news._id}
              dangerouslySetInnerHTML={{ __html: news.content }}
            ></div>
          )}
        </>
      ))}
    </div>
  );
}

export default Items;
