import React from 'react'
import CustomNavbar from './CustomNavbar'
import { Container } from 'react-bootstrap'
import ContactButton from './ContactButton'
function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
        <Container fluid className='m-0 p-0'>
          {children}
          <ContactButton/>
        </Container>
    </>
  )
}

export default Layout