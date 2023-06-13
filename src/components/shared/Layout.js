import React from 'react'
import CustomNavbar from './CustomNavbar'
import { Container } from 'react-bootstrap'
import ContactButton from './ContactButton'
function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
        <Container fluid className='mt-4'>
          {children}
          <ContactButton/>
        </Container>
    </>
  )
}

export default Layout