import React from "react";
import Hero from "../components/Part/User/Home Page/Hero";
import Header from "../components/Header/Header";
import Features from "../components/Part/User/Home Page/Features";
import CollectionCourse from "../components/Part/User/Home Page/CollectionCourse";
import Product from "../components/Part/User/Home Page/Course";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return <>
    <div className='w-full m-auto bg-white'>
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
