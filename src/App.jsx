import { IoIosMore } from "react-icons/io";
// import { FcLike } from "react-icons/fc";
// import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { TfiComments } from "react-icons/tfi";
import { IoIosShareAlt } from "react-icons/io";

import "./style.css";

function App() {
  return (
    <>
      <div className="contaner">
        <div className="main">
          <img src="src\img\images.jpeg" alt="" />
          <div>
            <h2>Abdul Hai</h2>
            <p>Friday at 1:00PM</p>
          </div>
          <IoIosMore className="icon" />
        </div>{" "}
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img className="poster" src="src\img\facebookimage.webp" alt="" />

        <div className="lastDiv">
        <AiOutlineLike />
        <TfiComments />
        <IoIosShareAlt />

        </div>
      </div>
    </>
  );
}

export default App;