import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Main = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Main
