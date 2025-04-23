import React from 'react';
import { FaCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto font-poppins">
        {/* Hero Image with Overlay */}
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
          <img
            src="meeting.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          {/* 27% opacity pink overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[#ff6584] opacity-[0.27]"></div>
          {/* Text over image */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="text-[40px] italic font-inter font-[800] text-white">
              Our Women Care Group
            </h2>
            <p className="mt-2 text-[24px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis lectus.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mt-12">
          <h2 className="text-[32px] font-[500] text-black mb-4 pb-2 border-b-2 border-black">
            About Us
          </h2>

          {/* Paragraphs */}
          <p className="text-[20px] font-[400] text-black mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente id recusandae eaque praesentium neque, temporibus voluptatum quam, voluptatibus ratione minus reiciendis iure rem voluptas quos quibusdam iste, alias eius.
          </p>
          <p className="text-[20px] font-[400] text-black mb-6">
            Vestibulum a nibh nec mauris fermentum facilisis. Nam lobortis auctor eros, ac laoreet arcu. Proin at orci ac risus pharetra tincidunt. Vivamus egestas vel nisi eget pharetra. Integer sagittis, quam vel tristique tincidunt, arcu erat venenatis nulla, non scelerisque enim odio vel metus.
          </p>

          {/* Bulleted List */}
          <ul className="pl-4 space-y-4 mb-6">
            {[
              'Lorem ipsum dolor sit amet',
              'Consectetur adipiscing elit',
              'Etiam varius quam ac',
              'Nulla quis erat nisl'
            ].map((text, idx) => (
              <li key={idx} className="flex items-start text-[20px] font-[400] text-black">
                <FaCircle className="text-[#ff6584] mr-3 mt-1 text-[10px]" />
                {text}
              </li>
            ))}
          </ul>

          {/* Final pink paragraph */}
          <p className="text-[24px] font-[400] text-[#ff6584]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis lectus. Aenean vitae ipsum sit amet justo condimentum tempus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
