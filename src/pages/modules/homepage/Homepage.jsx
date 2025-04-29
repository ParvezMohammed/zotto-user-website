import { useState } from "react";


export default function Homepage() {
  const [activeTab, setActiveTab] = useState('all');

  const brands = [
    { image: "/images/img1.png" },
    { image: "/images/img2.png" },
    { image: "/images/img3.png" },
    { image: "/images/img4.png" },
    { image: "/images/img5.png" }
  ];

  const products = [
    {
      id: 1,
      name: "Regular Sanitary Pads (Pack of 10)",
      price: "$5.99",
      image: "/images/Rectangle11.png"
    },
    {
      id: 2,
      name: "Deluxe Sanitary Pads (Pack of 8)",
      price: "$7.99",
      image: "/images/Rectangle12.png"
    },
    {
      id: 3,
      name: "Premium Sanitary Pads (Pack of 12)",
      price: "$6.49",
      image: "/images/Rectangle13.png"
    },
    {
      id: 4,
      name: "Jumbo Sanitary Pads (Bundle of 4)",
      price: "$15.99",
      image: "/images/Rectangle14.png"
    }
  ];
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Whisper Sanitary Pads provide exceptional comfort and reliable protection, ensuring you feel fresh and secure all day long.",
      author: "Himani Raut",
      role: "Satisfied Customer, Himani",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 2,
      rating: 5,
      text: "I swear by Whisper Sanitary Pads. They're incredibly comfortable and provide the best protection!",
      author: "Nandini Nahata",
      role: "Happy customer, Nandini",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 3,
      rating: 5,
      text: "These pads changed my experience completely. I can finally go about my day without worrying.",
      author: "Priya Sharma",
      role: "Loyal Customer",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 4,
      rating: 5,
      text: "The wing design ensures no leakage whatsoever. Absolutely recommend to everyone!",
      author: "Anjali Patel",
      role: "Verified Buyer",
      avatar: "/api/placeholder/50/50"
    }
  ];
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);

  const handleSeeAll = () => {
    setVisibleTestimonials(testimonials.length);
  };

  return (
    <div >

      {/* Hero Section */}
      <section>
        <div className="container mx-auto">
          <img src="/images/screen1.png" className=" h-[758px] w-[1446px]"/>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-22 px-4 bg-white">
        <div className="container w-[1446px] h-[352px] mx-auto max-w-4xl">
         <div className="w-[986px] h-[250px]">
           <h2 className="text-xl  font-bold text-center text-gray-700 mb-6">
            Trusted by top global brands for exceptional quality
          </h2>
          <div className="flex justify-center gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="w-[143px] h-[143px] flex items-center justify-center">
                <img src={brand.image} alt={brand.name} className="max-h-full" />
              </div>
            ))}
          </div></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-2 px-4 h-[1068px] w-[1202px] ">
        <div className="container ">
          <div className="flex gap-8 ">
            {/* Left side with image and note */}
            <div className=" mt-4 relative">
              <div >
                <img
                  src="/images/Rectangle.png"
                  alt="Woman with product"
                  className="w-[593px] h-[1000px] "
                />

              </div>
            </div>

            {/* Right side with products grid */}

            <div className="md:w-2/3">
              <div className="mb-38">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 mt-2">Products</h2>
                <p className="text-gray-600">
                  Discover our wide range of high-quality products designed specifically for women, offering comfort and care.
                </p>
              </div>
              <div className="flex justify-between items-center mb-4">

                <button className="text-pink-500 text-sm border border-pink-500 px-3 py-1 rounded-md ">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map(product => (
                  <div key={product.id} className="bg-white p-4 w-[280px] h-[333px]  rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4">
                      <img src={product.image} alt={product.name} className="w-full h-32 object-contain mx-auto" />
                      <h1 className="font-semibold text-gray-800 mt-3">{product.name}</h1>
                      <p className="text-sm text-gray-500">{product.details}</p>
                    </div>
                    <div className="flex border-t border-gray-100">
                      <button className="w-1/2 px-4 py-2 text-center bg-pink-500 text-white text-sm hover:bg-pink-600">
                        Add to Cart
                      </button>
                      <button className="w-1/2 py-2 text-center border-l border-gray-100 text-white text-sm bg-pink-500">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="h-[555px] w-full py-12 mt-4 text-left bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      
      {/* Left Side - Text */}
      <div className="w-[656px] h-[484px] md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Premium Sanitary Pads for Ultimate Comfort & Protection
        </h1>
        <p className="text-gray-600 mb-6">
          Our sanitary pads are designed for scientific comfort and protection while being environmentally friendly. Made with love and care, they keep you feeling fresh, confident, and secure at all times.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1">✓</div>
            <span>Ultra-thin & hypoallergenic pads - Comfortable & Allergy-Free</span>
          </li>
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1">✓</div>
            <span>Sustainable and Biodegradable Material - For a Cleaner, Greener Future</span>
          </li>
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1">✓</div>
            <span>Available in Various Sizes and Colors - Perfect Fit for Every Woman</span>
          </li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
        <img
          src="/images/sectionright.png"
          alt="Premium product"
          className="rounded-lg  w-[476px]  h-[430px]"
        />
      </div>

    </div>
  </div>
</section>

      {/* impact*/}
      <div className="mb-44 h-[555px] w-[1440px] flex flex-col md:flex-row w-full bg-white rounded-lg ">
        {/* Image placeholder - left side */}
        <div className="flex-1  p-4 flex items-center justify-center">
          <div className="text-center h-[585px] w-[516px]">
            <img src="/images/sectionleft.png" />
          </div>
        </div>

        {/* Content - right side */}
        <div className="flex-1 p-6 md:p-8   flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Making a Positive Impact on Women's Comfort and Well-being
          </h1>

          <p className="text-black-700 mb-8">
            Whisper, Stayfree, and Sofy are trusted brands offering superior comfort and protection for women.
            With hypoallergenic, skin-friendly materials, our sanitary pads ensure freshness and security all day long.
            Available in multiple sizes, these brands continue to support women's health and confidence.
          </p>

          <div className="flex justify-between mt-auto">
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-gray-800">93%</p>
              <p className="text-sm text-gray-600">Products Sold</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-gray-800">87%</p>
              <p className="text-sm text-gray-600">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
      {/*customer*/}
      <div className="h-[555px] w-[1440px] mx-auto px-4 py-12">
        <div className="h-[310px] w-[1062px]"> <div className="text-center mb-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Customer Testimonials</h2>
          <p className="text-xl text-gray-700">Read what our customers have to say</p>
        </div>

          <div className="flex flex-col  text-left md:flex-row md:flex-wrap gap-8 justify-center">
            {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg  flex-1 min-w-0 md:max-w-md">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg font-bold mb-4">{testimonial.text}</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleTestimonials < testimonials.length && (
            <div className="flex justify-center mt-8">
              <button
                
                className="px-8 py-3 border border-pink-300 text-pink-500 font-medium rounded-md hover:bg-pink-50 transition-colors"
              >
                See All
              </button>
            </div>
          )}</div>
      </div>
      {/*Explore */}
      <div className="w-[1440px] h-[551px] mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl  p-4 bg-white">
          <div className="md:w-1/2  text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Wide <br/> Product Range</h1>
            <p className="text-xl text-gray-700">Browse Our Extensive Range of Sanitary Pads</p>
          </div>

          <div className="md:w-1/2 pl-4">
            <img
              src="/images/sectionimg.png"
              alt="Store shelf displaying various sanitary pad products organized by brand and type"
              className="rounded-lg shadow-md text-right"
            />
          </div>
        </div>
      </div>
      {/*contact*/}
      <div className="relative w-[1131px] h-[1440px]">
      {/* Contact Information Section */}
      <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-white">
        {/* Left Side Content */}
        <div className="md:w-1/2 w-[553px] h-[105px] mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us Today</h1>
          <p className="text-lg text-gray-600">We're here for you! Reach out with any questions or feedback.</p>
        </div>
        
        {/* Right Side Contact Details */}
        <div className="md:w-1/2 space-y-6 ml-56 h-[212px] w-[138px]">
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
            <img src="/images/phone.png"></img>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+919876543210</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 text-gray-700 w-6 h-6 flex items-center justify-center">
              <img src="/images/address.png"></img>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p className="text-gray-600">(Address)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full h-64 bg-gray-200">
        <img 
          src="/images/sectionlocation.png" 
          alt="Location map" 
          className="w-[1440px] h-[719px]object-cover"
        />
      </div>
    </div>

    </div>
  );
}