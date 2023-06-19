import React, { useEffect, useState } from 'react'
import Items from '../components/news/Items'
import { getNews } from "../utils/getNews";
import NewsCategories from "../components/news/NewsCategories";
import Pagination from "../components/news/Pagination";

import NotRegisters from '../components/shared/NotRegisters';
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
                <NewsCategories newsList={newsList} handleFilterChange={handleFilterChange} filter={filter} />

                {currentNews.length > 0 ? (
                    <>
                        <Items currentNews={currentNews} />
                        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                    </>
                ) : (
                    <NotRegisters icon={true} text={true}/>
                )}


            </div>

        </>
    )
}

export default News