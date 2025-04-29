import React from 'react';
import LoggedInNavbar from '../components/navbar/LoggedinNavbar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const AllProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LoggedInNavbar />
      <main className="flex-grow">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts; 