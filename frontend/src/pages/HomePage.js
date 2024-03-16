import React from "react";
import Hero from "../components/Part/User/Hero";
import Header from "../components/Header/Header";
import Features from "../components/Part/User/Features";
import CollectionCourse from "../components/Part/User/CollectionCourse";
import Product from "../components/Part/User/Course";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return <>
    <div className='w-full max-w-[1440px] m-auto bg-white'>
      <Header />
      <Hero />
      <Features />
      <CollectionCourse />
      <Product />
      <Footer />
    </div>
  </>;
}

export default HomePage;
