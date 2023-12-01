import React, { createContext, useState, useContext } from 'react';

// Create a context for managing products
const ProductContext = createContext();

// Custom hook to consume the ProductContext
export const useProductContext = () => useContext(ProductContext);

// Provider component to wrap your app and manage product state
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to add a product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Function to delete a product by ID
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
