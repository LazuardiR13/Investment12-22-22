import React from 'react'
import { Header, Footer, Testimoni, Product, Partnership, Landing, FooterIklan } from "@components";

const Home = () => {
  return (
    <>
    <div>
        <Header />
        <Landing/>
        <Testimoni />
        <Product />
        <Partnership />
        <FooterIklan/>
        <Footer />
    </div>
    </>
  )
}

export default Home