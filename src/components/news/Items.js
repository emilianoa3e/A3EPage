import React from 'react'
import '../../assets/css/components/Items.css'

function Items({currentNews}) {


    return (

        <div className={'container-fluid'}>
            {
                currentNews.map((news) => (
                    <div key={news._id}>
                        <div>{news.content}</div>
                    </div>
                ))

            }
        </div>

    )
}

export default Items