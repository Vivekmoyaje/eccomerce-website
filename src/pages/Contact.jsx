import React from "react";

const Contact = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="src\assets\about.jpg" // Replace with your own image URL
              alt="Contact Us"
              className="mb-6 w-full rounded-lg shadow-lg"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Our Office
              </h3>
              <p className="text-gray-600">
                123 E-Commerce St.
                <br />
                Online City, Webland, 45678
              </p>
              <p className="text-gray-600 mt-4">
                Email:{" "}
                <a
                  href="mailto:info@ecommerce.com"
                  className="text-blue-500 hover:underline"
                >
                  info@ecommerce.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
