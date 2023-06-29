import React from 'react'
import CustomNavbar from './CustomNavbar'
import { Container } from 'react-bootstrap'
import ContactButton from './ContactButton'
import Footer from './Footer'
function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
        <Container fluid className='m-0 p-0' >
          {children}
          {/* <ContactButton/> */}
        </Container>
       <ContactButton/>
        <Footer/>
    </>
  )
}

export default Layout