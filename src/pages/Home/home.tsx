import React from "react";
import "./home.css";
import Header from "../../components/1.Header/header";
import Main from "../../components/2.Main/Main";
import Recipes from "../../components/3.Recipes/recipes";
import Footer from "../../components/7.Footer/footer";
import Join from "../../components/6.Join/join";
import About from "../../components/4.About/about";
import Blog from "../../components/5.Blog/blog";

function Home() {
  return (
    <div className="template">
      <Header />
      <Main/>
      <Recipes/>
      <About />
      <Blog />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;
