import React, {useEffect} from 'react'
import Banner from '../components/shared/Banner'
import VisionMision from '../components/aboutUs/VisionMision'
import Filosofy from '../components/aboutUs/Filosofy'
import Polity from '../components/aboutUs/Polity'
import Certifications from '../components/aboutUs/Certifications'

function Us() {
  useEffect(() => {
    document.title = "A3E Nosotros";
  }, []);
  return (
    <>
      <Banner from={"NOSOTROS"}/>
      <VisionMision/>
      <Filosofy/>
      <Polity/>
      <Certifications/>
    </>
  )
}

export default Us