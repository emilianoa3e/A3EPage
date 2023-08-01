import React, { useState, useRef } from "react";
import Pagination from "./Pagination";
import Summary from "../New-Service/Summary";
import { Col } from "react-bootstrap";
import { Button } from "@mui/material";
import Colors from "../../utils/Colors";

function Items({ image, currentNews, pageCount, handlePageClick }) {
  const [see, setSee] = useState(false);
  const targetSectionRef = useRef(null);

  const scrollToUp = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const changeState = () => {
    if (see) {
      scrollToUp();
    }
    setSee(!see);
  };

  return (
    <>
      {currentNews.map((news, index) => (
        <div
          key={index}
          className={"container-fluid p-0 mb-3"}
          
        >
          <>
            {/* Title */}
            <div className="p-2" ref={targetSectionRef}>
              <h1
                className="text-start ms-4 mt-4 "
                style={{ color: "#00743B", fontWeight: "bold" }}
              >
                {news.title}
                <p
                  className="text-end me-5"
                  style={{
                    fontSize: "initial",
                    fontStyle: "italic",
                    color: "gray",
                  }}
                >{`${news.author} | ${news.date}`}</p>
              </h1>
            </div>
            <Summary
              image={image}
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
              <>
                <div
                  className="p-3 pe-3 ps-3 mt-5 content"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                ></div>
                <Col className="col-12 text-center">
                  <Button
                    variant={see ? "contained" : "outlined"}
                    color={see ? "primary" : "success"}
                    sx={{ borderRadius: "30px", padding: "5px 30px" }}
                    style={
                      see ? { backgroundColor: Colors.PalleteGreenA3E } : {}
                    }
                    onClick={changeState}
                  >
                    {see ? "Ver menos" : "Ver más"}
                  </Button>
                </Col>
              </>
            )}
          </>
        </div>
      ))}
    </>
  );
}

export default Items;
