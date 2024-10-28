import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import facebook from "./img/fooddelicious.jpg";
import { SlOptions } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import treeimage from "./img/fooddelicious.avif";
import foodmenu from "./img/foodmenu.jpg";
import foodimage from "./img/foodchicken.jpg";
import resturantmenu from "./img/resturantmenu.png"
import Photo1 from "./img/Photo1.avif"
import Photo2 from "./img/Photo2.jpeg"
import Photo3 from "./img/Photo3.jpg"
import Photo4 from "./img/Photo4.avif"
import "./style.css";

function Post(Props) {
  console.log("props, ", Props);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={Props.profilePhoto}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>{Props.name}</h3>
            <span>20 min ago</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
      </p>
    
    {
    
    Props.postImage ?   <img
        src={Props.postImage}
        alt="post image"
        className="post-photo"
        id="my-id"
      /> : null 
     
    }
      <div id="footer">
        
        <BiSolidLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
      <div class="comment">
        <p>Like</p>
        <p>Comment</p>
        <p>Share</p>
      </div>
       
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post
        name="Abdul Hai"
        postImage={foodmenu}
        profilePhoto={Photo1}
      />
      <Post
        name="Moiz"
        postImage={facebook}
        profilePhoto={Photo2}
      />
      <Post
        name="Abdul Sami"
         postImage={foodimage}
        profilePhoto={Photo3}
      />
      <Post
        name="Subhan"
        postImage={treeimage}
        profilePhoto={Photo4}
      />
      <Post
        name="Haseeb"
        postImage={resturantmenu}
        profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
      />
      <Post
        name="Shahab"
        postImage={treeimage}
        profilePhoto={Photo2}
      />
      <Post
        name="shokat"
        postImage={foodmenu}
        profilePhoto={Photo3}
      />
      <Post
        name="shayan"
        postImage={foodimage}
        profilePhoto={Photo4}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);