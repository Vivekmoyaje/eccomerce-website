import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prevCount) =>
      prevCount >= products.length ? 4 : products.length
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}

      <Slider />

      {/* Featured Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NavLink to="/shop">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="src/assets/mens2.webp"
                  alt="Category 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    Men's Wear
                  </h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="/shop">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="src/assets/womens2.webp"
                  alt="Category 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    Women's Wear
                  </h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="/shop">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="src/assets/accessories.jpeg"
                  alt="Category 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    Accessories
                  </h3>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            {products.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-lg overflow-hidden pt-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-56 w-full"
                />
                <div className="p-4 ">
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.title.length <= 51
                      ? product.title
                      : product.title.slice(0, 50)}
                  </h3>
                  <p className="text-gray-600 mt-2">${product.price}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              {visibleCount >= products.length ? "Show Less" : "View More"}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-400 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-6">
            Get the latest updates on new arrivals and exclusive offers.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md px-4 py-2 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-800 text-sky-400font-semibold px-6 py-2 rounded-r hover:bg-gray-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
