import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getService } from '../utils/getServices'
import {Container}  from 'react-bootstrap';

function Service() {
  const { id } = useParams();
  const [service, setService] = useState({
    _id: '',
    title: '',
    content: ''
  },)

  useEffect(() => {

    const getData = async () => {
      const data = await getService(id);
      setService(data.service.content)
    }
    getData();
  }, [id])

  return (
    <>
      {service && (
        <Container className='mt-1 p-1 container-fluid ' >
          <div dangerouslySetInnerHTML={{ __html: service }}></div>
        </Container>

      )

      }
    </>

  )
}

export default Service