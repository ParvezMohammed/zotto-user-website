import React from 'react';
import { FaCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen pt-6 pb-8 px-4 sm:px-6 md:px-10 lg:px-[130px] font-poppins">
      
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <img
          src="../images/meeting.png"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#ff6584] opacity-[0.27]"></div>

        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] italic font-inter font-[800] text-white">
            Our Women Care Group
          </h2>
          <p className="text-[16px] sm:text-[20px] md:text-[24px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis lectus.
          </p>
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-[500] text-black mb-4 pb-2  inline-block border-b-2 border-black">
          About Us
        </h2>

        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[400] text-black mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente id recusandae eaque praesentium neque, temporibus voluptatum quam, voluptatibus ratione minus reiciendis iure rem voluptas quos quibusdam iste, alias eius.
        </p>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[400] text-black mb-5">
          Vestibulum a nibh nec mauris fermentum facilisis. Nam lobortis auctor eros, ac laoreet arcu. Proin at orci ac risus pharetra tincidunt. Vivamus egestas vel nisi eget pharetra. Integer sagittis, quam vel tristique tincidunt, arcu erat venenatis nulla, non scelerisque enim odio vel metus.
        </p>

        <ul className="pl-4 space-y-4 mb-6">
          {[
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Etiam varius quam ac',
            'Nulla quis erat nisl'
          ].map((text, idx) => (
            <li key={idx} className="flex items-start text-[16px] sm:text-[18px] md:text-[20px] font-[400] text-black">
              <FaCircle className="text-[#ff6584] mr-3 mt-1 text-[10px]" />
              {text}
            </li>
          ))}
        </ul>

        <p className="text-[18px] sm:text-[20px] md:text-[24px] font-[400] text-[#ff6584]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis lectus. Aenean vitae ipsum sit amet justo condimentum tempus.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
