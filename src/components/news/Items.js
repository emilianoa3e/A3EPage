import React, { useEffect, useState } from 'react'
import { getNews } from '../../utils/getNews'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/components/Items.css'
function Items() {

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
    
    console.log(newsList[0]?.type)
    const [filter, setFilter] = useState("Novedades");

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
    return (
        <>
            <Row className='justify-content-center'>
                {
                    newsList.map((type) => (
                        <Col key={type._id} className={`col-4 justify-content-center text-center m-0 p-2 ${filter === type.type ? 'selected' : ''}`} onClick={() => handleFilterChange(`${type.type}`)}>
                            {type.type}
                        </Col>
                    ))
                }

            </Row>
            <div>
                {
                    filteredNewsList.map((news) => (
                        <div key={news._id}>
                            <div>{news.content}</div>
                        </div>
                    ))

                }
            </div>

        </>
    )
}

export default Items