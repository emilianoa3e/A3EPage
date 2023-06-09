import React, { useEffect, useState } from "react";
import Items from "../components/news/Items";
import NewsCategories from "../components/news/NewsCategories";
import NotRegisters from "../components/shared/NotRegisters";
import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import { getNews } from "../utils/getNews";
import "../assets/css/components/EditorContent.css";
import { Container } from "react-bootstrap";

function News() {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      try {
        const data = await getNews();
        setNewsList(data.dataNew);
      } catch (error) {
        console.log("Error getting news", error);
      }
      setIsLoading(false);
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="m-0 pt-0 p-0" fluid>
      <Banner from={"NOTICIAS"} />
      <NewsCategories
        newsList={newsList}
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
      {currentNews.length > 0 ? (
        <>
          {/* content */}
          <Items
            currentNews={currentNews}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </>
      ) : (
        <NotRegisters icon={true} text={true} />
      )}
    </Container>
  );
}

export default News;
