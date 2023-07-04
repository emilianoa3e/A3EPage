import React from 'react'
import Banner from '../components/shared/Banner'
import VisionMision from '../components/aboutUs/VisionMision'
import Filosofy from '../components/aboutUs/Filosofy'
import Polity from '../components/aboutUs/Polity'

function Us() {
  return (
    <>
      <Banner from={"NOSOTROS"}/>
      <VisionMision/>
      <Filosofy/>
      <Polity/>
    </>
  )
}

export default Us