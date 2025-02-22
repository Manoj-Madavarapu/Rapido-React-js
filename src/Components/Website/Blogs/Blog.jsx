import { useState, useEffect } from 'react';
import blogData from "./data";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./blog.css"
let Blog=()=> {
  let [blogs, setBlogs] = useState([]);
  let [pages,setPages]=useState(1);
  let recordsPrePage=6;
  let totalPages=Math.ceil(blogs.length/recordsPrePage);
  function getPages(){
    let firstIndex=(pages-1)*recordsPrePage;
    let secondIndex=firstIndex+recordsPrePage;
    return blogs.slice(firstIndex,secondIndex)
  }
  function nextPage(){
    setPages(pages+1)
  }
  function prevPage(){
    setPages(pages-1)
  }
  useEffect(() => {
    setBlogs(blogData.blogs);
  },[]);
  return (
    <>
      <Nav/>
      <h1 className='blog_heading'>Blog</h1>
      <div className="blog_container">
      {getPages().map((x) => (
        <div className='blog' key={x.id}>
           <div className="img">
           <img src={x.image} alt="" />
           </div>
           <div style={{padding:"15px"}}>
           <p style={{marginTop:"5px",color:"#868686",fontSize:"13px"}}>{x.date}</p>
            <h3 style={{margin:"10px 0px 10px 0px",fontSize:"18px"}}>{x.title}</h3>
            <p style={{color:"#4b4b4b",fontSize:"14px",lineHeight:"23px"}}>{x.description}</p>
           </div>
        </div>
      ))}
      </div>
      <div className='pages'>
        <button onClick={prevPage} disabled={pages==1}>&lt;</button>
        <button style={{backgroundColor:"#f9c935",cursor:"default"}}>{pages}</button>
        <button onClick={nextPage} disabled={pages==totalPages}>&gt;</button>
    </div>
    <Footer/>
    </>
  );
}

export default Blog;
