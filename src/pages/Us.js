import React from 'react'
import Banner from '../components/shared/Banner'
import VisionMision from '../components/aboutUs/VisionMision'
import Filosofy from '../components/aboutUs/Filosofy'
import Polity from '../components/aboutUs/Polity'
import Certifications from '../components/aboutUs/Certifications'
function Us() {
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