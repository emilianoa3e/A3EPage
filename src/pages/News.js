import React, {useEffect, useState} from "react";
import Items from "../components/news/Items";
import NewsCategories from "../components/news/NewsCategories";
import NotRegisters from "../components/shared/NotRegisters";
import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import {getNews} from "../utils/getNews";
import "../assets/css/components/EditorContent.css";
import {Container} from "react-bootstrap";

import novedades from '../assets/img/default/Sec_NOTICIAS_Nov_01.jpg'
import cursos_1 from '../assets/img/default/Sec_NOTICIAS_Curso-01-B.jpg'
import cursos_2 from '../assets/img/default/Sec_NOTICIAS_Curso-02-B.jpg'
import convocatorias from '../assets/img/default/Sec_NOTICIAS_Conv-01-B.jpg'
import ErrorComponent from "../components/shared/ErrorComponent";

function News() {
  console.log('news')
  const images = [cursos_1, cursos_2];
  let image;
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 1;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const [filter, setFilter] = useState("Novedades");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getNews();
        setNewsList(data.news);
      } catch (error) {
        console.log("Error getting news", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    document.title = "A3E Noticias";
  }, []);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const filteredNewsList = newsList.filter((news) => {
    if (filter === "Novedades") {
     image = novedades;
      return news.type === filter;
    } else if(filter === "Cursos") {
     image = getRandomImage();
      return news.type === filter;
    }else if(filter === "Convocatorias") {
      image = convocatorias
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
      {newsList.length > 0 ? (
        <>
          {currentNews.length > 0 ? (
            <>
              {/* content */}
              <Items
              image={image}
                currentNews={currentNews}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            </>
          ) : (
            <NotRegisters icon={true} text={true} />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
    </Container>
  );
}

export default News;
