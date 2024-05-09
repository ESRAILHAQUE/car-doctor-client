import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-6 text-center space-y-3 ">
      <div className="my-14">
        <h2 className="text-red-600 text-4xl font-bold animate__animated animate__jello">
          Services
        </h2>
        <h2 className="text-4xl font-bold my-4 animate__animated animate__backInRight animate__slow">
          Our Service Area
        </h2>
        <p className="mb-6 animate__animated animate__backInLeft animate__slow">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Correct mapping with return statement */}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
