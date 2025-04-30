import React from 'react';
import ProductList from './ProductList';

const AllProducts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow pt-16 md:pt-20">
        <ProductList />
      </main>
    </div>
  );
};

export default AllProducts; 