import React, { useEffect, useState } from "react";
import Items from "../components/news/Items";
import { getNews } from "../utils/getNews";
import NewsCategories from "../components/news/NewsCategories";
import Pagination from "../components/news/Pagination";
import { MdNotificationsActive } from "react-icons/md";
import NotRegisters from "../components/shared/NotRegisters";
import { Row, Col } from "react-bootstrap";
import Banner from "../components/shared/Banner";
import CustomCarousel from "../components/shared/CustomCarousel";
function News() {
  const itemsPerPage = 1;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const [filter, setFilter] = useState("Novedades");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsList, setNewsList] = useState([
    {
      _id: "",
      title: "",
      type: "",
      content: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const data = await getNews();
      setNewsList(data.dataNew);
    };
    getData();
  }, []);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredNewsList = newsList.filter((news) => {
    if (filter === "Novedades") {
      return news.type === filter;
    } else {
      return news.type === filter;
    }
  });

  const currentNews = filteredNewsList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredNewsList.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = e.selected * itemsPerPage;
    setItemOffset(newOffset);
    setCurrentPage(e.selected + 1);
  };

  console.log(currentNews);

  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Banner from={"NOTICIAS"} />
        <NewsCategories
          newsList={newsList}
          handleFilterChange={handleFilterChange}
          filter={filter}
        />

        {currentNews.length > 0 ? (
          <>
            <Row className="ms-5 me-5 text-end">
              <Col>
                <a href="/us" target="_blank" style={{ color: "red" }}>
                  Suscribete a nuestro boletín <MdNotificationsActive />{" "}
                </a>
              </Col>
            </Row>
            <Items currentNews={currentNews} />
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </>
        ) : (
          <NotRegisters icon={true} text={true} />
        )}
      </div>
    </>
  );
}

export default News;
