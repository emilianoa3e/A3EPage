import React from 'react'
import CustomNavbar from './CustomNavbar'
import {Container} from 'react-bootstrap'
import ContactButton from './ContactButton'
import Footer from './Footer'
import UpButton from './UpButton'

function Layout({children}) {
    return (
        <>
            <CustomNavbar/>
            <Container fluid className='m-0 p-0'>
                {children}
            </Container>
            <ContactButton/>
            <UpButton/>
            <Footer/>
        </>
    )
}

export default Layout