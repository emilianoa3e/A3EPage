import React, { useState } from "react";
import "../../assets/css/components/Items.css";
import { Button, Image } from "react-bootstrap";
import imagen from "../../assets/img/banner1.jpg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Pagination from "./Pagination";
function Items({ currentNews, pageCount, handlePageClick }) {
  console.log(pageCount);
  const [see, setSee] = useState(false);
  const changeState = () => {
    setSee(!see);
  };
  return (
    <div className={"container-fluid p-0 mb-3"}>
      {currentNews.map((news) => (
        <>
          {/* Title */}
          <div className="p-2 title">
            <h1
              className="text-start ms-4 mt-5"
              style={{ color: "#00743B", fontWeight: "bold" }}
            >
              {news.title}
            </h1>
          </div>
          <div className="button d-flex justify-content-center">
            <a
              href="https://www.google.com"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              className="mt-2 pe-2"
            >
              <strong className="pe-2">Suscríbete al boletín</strong>
              <MdOutlineNotificationsActive style={{ fontSize: "30px" }} />
            </a>
          </div>
          {/* Resume */}
          <div className="img-resume">
            <Image
              src={imagen}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div className="text-resume ">
              <p>{news.summary}</p>
              <Button
                className="btn btn-success"
                style={{ borderRadius: "0px 30px 30px 30px" }}
                onClick={changeState}
              >
                {see ? "Retraer noticia" : "Continuar leyendo"}
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>

          {/* Content */}
          {see && (
            <div
              className="notice-content p-4"
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
