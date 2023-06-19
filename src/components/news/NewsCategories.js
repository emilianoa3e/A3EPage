import {Col, Row} from "react-bootstrap";
import React from "react";


const types = [
    {
        _id: '1',
        type: 'Novedades'
    },
    {
        _id: '2',
        type: 'Eventos'
    },

    {
        _id: '3',
        type: 'Cursos'
    },


]
//Categories for News 
 function NewsCategories ({ handleFilterChange, filter}){
    return(
        <Row className='justify-content-center m-4'>
            {
                types.map((type) => (
                    <Col key={type._id} xs={6} md={3} lg={3} style={{cursor:'pointer'}} className={`mt-1 justify-content-center text-center  p-3 ${filter === type.type ? 'selected' : 'noSelected'}`} onClick={() => handleFilterChange(`${type.type}`)}>
                        {type.type}
                    </Col>
                ))
            }
        </Row>

    )
}

export default NewsCategories