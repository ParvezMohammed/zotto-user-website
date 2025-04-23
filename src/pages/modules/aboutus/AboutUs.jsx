import React from 'react';
import { FaCircle } from 'react-icons/fa'; 

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
          <img
            src="meeting.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[#6a4e23] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full text-white  sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Our Women Care Group</h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis lectus.
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 pb-2 inline-block border-b-2 border-black">
            About Us
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente id recusandae eaque praesentium neque, temporibus voluptatum quam, voluptatibus ratione minus reiciendis iure rem voluptas quos quibusdam iste, alias eius.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quam ac malesuada interdum. Integer posuere, urna vel elementum suscipit, lectus est faucibus nisl, a bibendum tortor felis id dui. Nulla quis erat nisl.
          </p>

          <p className="text-sm sm:text-base text-gray-700 mb-8">
            Vestibulum a nibh nec mauris fermentum facilisis. Nam lobortis auctor eros, ac laoreet arcu. Proin at orci ac risus pharetra tincidunt. Vivamus egestas vel nisi eget pharetra. Integer sagittis, quam vel tristique tincidunt, arcu erat venenatis nulla, non scelerisque enim odio vel metus.
          </p>

          <div className="mt-12 pl-4 sm:pl-6">
            <ul className="space-y-4">
              {[
                'Lorem ipsum dolor sit amet',
                'Consectetur adipiscing elit',
                'Etiam varius quam ac',
                'Nulla quis erat nisl'
              ].map((text, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base">
                  <FaCircle className="text-pink-500 mr-3 mt-1 text-[10px] sm:text-sm" />
                  <span className="text-black">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-lg sm:text-xl text-pink-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis lectus. Aenean vitae ipsum sit amet justo condimentum tempus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
