import React from "react";
import image from "../assets/sisteri.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Home Nurse",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus",
      image: image,
    },
    {
      id: 2,
      title: "Maids",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      image: image,
    },
    {
      id: 3,
      title: "Baby Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      image: image,
    },
    {
      id: 4,
      title: "Patient Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      image: image,
    },
  ];

  return (
    <div className="bg-blue-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={'p-6 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105'}
            >
              <div className="mb-4 h-40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-xl">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
