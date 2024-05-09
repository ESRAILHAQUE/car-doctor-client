import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  const { _id, title, price, img } = service;
  

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl animate__animated animate__animated animate__rollIn">
        <figure>
          <img className="h-64 rounded" src={service.img} alt="Shoes" />
        </figure>
        <div className="p-6">
          <h2 className="text-center font-bold text-xl">{service.title}</h2>
          <div className="flex justify-between pt-4">
            <p className="text-red-700 text-xl">{service.price}$</p>
            <FaArrowRight className="text-red-700" />
          </div>
          <Link to={`/order/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
