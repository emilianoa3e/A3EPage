import React from 'react'
import Items from '../components/news/Items'
import { Pagination } from '../components/shared/Pagination'

function News() {


    return (
        <>
            <div className='container-fluid bg-danger'>
                <Items />
            </div>

        </>
    )
}

export default News