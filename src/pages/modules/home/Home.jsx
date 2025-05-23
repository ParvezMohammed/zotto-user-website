import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../../assets/images/img1.png';
import img2 from '../../../assets/images/img2.png';
import img3 from '../../../assets/images/img3.png';
import img4 from '../../../assets/images/img4.png';
import img5 from '../../../assets/images/img5.png';

import product1 from '../../../assets/images/ordes1.png';
import product2 from '../../../assets/images/orders2.png';
import product3 from '../../../assets/images/orders3.png';
import product4 from '../../../assets/images/orders4.png';
import phone from '../../../assets/images/phone.png';
import address from '../../../assets/images/address.png';
import sectionlocation from '../../../assets/images/sectionlocation.png';

import deliveryImg from '../../../assets/images/delivery.png';
import sectionRight from '../../../assets/images/sectionright.png';
import sectionLeft from '../../../assets/images/sectionleft.png';
import section8right from '../../../assets/images/section8right.png';
import screen1 from '../../../assets/images/screen1.png';

import user1 from '../../../assets/images/user1.png';
import user2 from '../../../assets/images/user2.png';

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const brands = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
  ];
  

  const products = [
    {
      id: 1,
      name: "Regular Sanitary Pads (Pack of 10)",
      price: 256.0,
      pads: "10 Pads",
      size: "XL",
      image: product1,
    },
    {
      id: 2,
      name: "Deluxe Sanitary Pads (Pack of 8)",
      price: 299.0,
      pads: "8 Pads",
      size: "XL",
      image: product2,
    },
    {
      id: 3,
      name: "Premium Sanitary Pads (Pack of 12)",
      price: 349.0,
      pads: "12 Pads",
      size: "XL",
      image: product3,
    },
    {
      id: 4,
      name: "Jumbo Sanitary Pads (Bundle of 4)",
      price: 599.0,
      pads: "4 Pads",
      size: "XL",
      image: product4,
    },
  ];
  
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Whisper Sanitary Pads provide exceptional comfort...",
      author: "Himani Raut",
      role: "Satisfied Customer, Himani",
      img: user1,
    },
    {
      id: 2,
      rating: 5,
      text: "I swear by Whisper Sanitary Pads...",
      author: "Nandini Nahata",
      role: "Happy customer, Nandini",
      img: user2,
    },
    {
      id: 3,
      rating: 5,
      text: "These pads changed my experience completely...",
      author: "Priya Sharma",
      role: "Loyal Customer",
      img: user1,
    },
    {
      id: 4,
      rating: 5,
      text: "The wing design ensures no leakage...",
      author: "Anjali Patel",
      role: "Verified Buyer",
      img: user2,
    },
  ];
  

  const [visibleTestimonials, setVisibleTestimonials] = useState(2);

  const handleSeeAll = () => {
    setVisibleTestimonials(testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
       <div className="flex-grow mt-20">
        {/* Hero Section */}
        <section>
          <div className="w-full">
            <img src={screen1} className="w-full h-auto" />
          </div>
        </section>
        {/* Brands Section */}
        <section className="py-10 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-6">
              Trusted by top global brands for exceptional quality
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="w-[100px] h-[100px] flex items-center justify-center"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-8 px-6 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side with image */}
              <div className="w-full md:w-1/2">
                <img
                  src={deliveryImg}                  alt="Woman with product"
                  className="w-full h-auto"
                />
              </div>

              {/* Right side with products grid */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Products
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover our wide range of high-quality products designed
                  specifically for women, offering comfort and care.
                </p>
                <div className="flex justify-start mb-4">
                  <button
                    onClick={() => navigate('/all-products')}
                    className="text-pink-500 border border-pink-500 px-6 py-2 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                  >
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-contain mx-auto mb-4"
                      />
                      <h1 className="font-semibold text-gray-800">
                        {product.name}
                      </h1>
                      <p className="text-sm text-gray-500">₹{product.price.toFixed(2)}</p>
                      <button 
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="w-full mt-4 py-2 text-center bg-pink-500 text-white text-sm rounded-md hover:bg-pink-600"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section className="py-12 mt-8 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            {/* Left Side - Text */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Premium Sanitary Pads for Ultimate Comfort & Protection
              </h1>
              <p className="text-gray-600 mb-6">
                Our sanitary pads are designed for scientific comfort and
                protection while being environmentally friendly. Made with love
                and care, they keep you feeling fresh, confident, and secure at
                all times.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </div>
                  <span>
                    Ultra-thin & hypoallergenic pads - Comfortable & Allergy-Free
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </div>
                  <span>
                    Sustainable and Biodegradable Material - For a Cleaner,
                    Greener Future
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </div>
                  <span>
                    Available in Various Sizes and Colors - Perfect Fit for Every
                    Woman
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/2">
              <img
              src={sectionRight}
                alt="Premium product"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <div className="py-12 bg-white flex flex-col-reverse md:flex-row items-center justify-between px-6">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <img
              src={sectionLeft}
              alt="Impact image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 ">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Making a Positive Impact on Women's Comfort and Well-being
            </h1>
            <p className="text-gray-700 mb-8">
              Whisper, Stayfree, and Sofy are trusted brands offering superior
              comfort and protection for women. With hypoallergenic, skin-friendly
              materials, our sanitary pads ensure freshness and security all day
              long. Available in multiple sizes, these brands continue to support
              women's health and confidence.
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-gray-800">93%</p>
                <p className="text-sm text-gray-600">Products Sold</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-gray-800">87%</p>
                <p className="text-sm text-gray-600">
                  Customer Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <section className="py-12 bg-white px-6">
          <div className="container mx-auto text-left">
            <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-xl text-gray-700 mb-8">
              Read what our customers have to say
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg flex-1"
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.img}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              {visibleTestimonials < testimonials.length && (
                <button
                  onClick={handleSeeAll}
                  className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
                >
                  See All
                </button>
              )}
            </div>
          </div>
        </section>
        <div className="w-full md:w-[1440px] h-auto mt-16 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-4 bg-white">
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Explore Our Wide <br /> Product Range
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Browse Our Extensive Range of Sanitary Pads
              </p>
            </div>

            <div className="md:w-1/2 pl-4">
              <img
                src={section8right}
                alt="Store shelf displaying various sanitary pad products organized by brand and type"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative w-full max-h-180 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-white">
            {/* Left Side Content */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Contact Us Today
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                We're here for you! Reach out with any questions or feedback.
              </p>
            </div>

            {/* Right Side Contact Details */}
            <div className="md:w-1/2 w-full space-y-6">
              <div className="flex items-center">
                <div className="mr-4 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span className="font-bold">✉</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@slack.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <img src={phone} alt="Phone Icon" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+919876543210</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <img src={address} alt="Address Icon" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-gray-600">(Address)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full my-6 md:h-[719px] bg-gray-200">
            <img
              src={sectionlocation}
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
