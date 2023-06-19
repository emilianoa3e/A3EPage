import React, { useEffect, useState } from 'react'
import Items from '../components/news/Items'
import { getNews } from "../utils/getNews";
import Categories from "../components/news/Categories";
import Pagination from "../components/news/Pagination";
import { MdCancel } from 'react-icons/md';
import { Col, Row, Container } from 'react-bootstrap';
function News() {
    const itemsPerPage = 1;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;


    const [filter, setFilter] = useState("Novedades");
    const [currentPage, setCurrentPage] = useState(1);
    const [newsList, setNewsList] = useState([
        {
            _id: '',
            title: '',
            type: '',
            content: ''
        },
    ])

    useEffect(() => {
        const getData = async () => {
            const data = await getNews();
            setNewsList(data.dataNew)
        }
        getData();
    }, [])

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
    }

    console.log(currentNews)


    return (
        <>
            <div className='container-fluid '>
                <Categories newsList={newsList} handleFilterChange={handleFilterChange} filter={filter} />

                {currentNews.length > 0 ? (
                    <>
                        <Items currentNews={currentNews} />
                        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                    </>
                ) : (
                    <Container>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-center">
                                <Col>
                                    <Row>
                                        <MdCancel
                                            className="no-services-icon"
                                            size={150}
                                            opacity={0.5}
                                        />
                                    </Row>
                                    <Row>
                                        <h3 className="text-center" style={{ opacity: 0.5 }}>
                                            No hay registros 
                                        </h3>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                )}


            </div>

        </>
    )
}

export default News