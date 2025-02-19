import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <div>
      <div className="carousel h-[60vh] animate__animated animate__backInRight">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full " />
          <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide2" className="btn btn-circle bg-red-500 text-white">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full " />
          <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  bg-red-500 text-white "
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full " />
          <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide4" className="btn btn-circle  bg-red-500 text-white">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full " />
          <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide1" className="btn btn-circle  bg-red-500 text-white">
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner