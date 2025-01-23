import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../components/Product";

const Shop = () => {
  // State for products, categories, selected category, and sorting order
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState(null); // "high-to-low" or "low-to-high"

  // Fetch products and categories from the API
  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        const categoryResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        setProducts(productResponse.data);
        setCategories(["all", ...categoryResponse.data]); // Add "all" to include an option for all products
      } catch (error) {
        toast.error("Failed to fetch data!");
      }
    };

    fetchProductsAndCategories();
  }, []);

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0; // Default order (no sorting)
  });

  if (products.length === 0)
    return (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    );

  return (
    <>
      <div className="container">
        {/* Category filter dropdown */}
        <div className="flex flex-col md:flex-row justify-between items-center px-5 my-4">
          <div className="category-filter flex items-center border-2 bg-gray-200 mb-4 md:mb-0 w-full md:w-auto">
            <p className="text-[1.2rem] text-blue-700 px-2">
              Select a Category:
            </p>
            <select
              className="h-10 ps-4 text-[1.2rem] border-none w-full md:w-auto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sorting buttons */}
          <div className="sorting-buttons flex flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
            <button
              className="bg-green-400 p-2 rounded-md hover:bg-green-500 w-full md:w-auto"
              onClick={() => setSortOrder("low-to-high")}
            >
              <i className="bi bi-arrow-up"></i> Low to High
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 p-2 rounded-md m-2 w-full md:w-auto"
              onClick={() => setSortOrder("high-to-low")}
            >
              <i className="bi bi-arrow-down"></i> High to Low
            </button>
          </div>
        </div>

        {/* Display filtered and sorted products */}
        <div className="row ">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
