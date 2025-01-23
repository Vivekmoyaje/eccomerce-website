import React from "react";

const AboutPage = () => {
  return (
    <div className=" text-gray-800 min-h-screen">
      <main className="container mx-auto px-6 py-10">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Learn more about who we are and what we do.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="src\assets\about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              At E-Shop, we are passionate about delivering the best shopping
              experience to our customers. Founded in 2021, we have quickly
              grown into a trusted name in online retail, offering a wide range
              of high-quality products at unbeatable prices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to make shopping easy, affordable, and enjoyable
              for everyone. We are committed to providing excellent customer
              service and ensuring your satisfaction with every purchase.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join us on our journey to redefine online shopping. We look
              forward to serving you!
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Quality</h4>
              <p className="text-gray-600">
                We ensure that every product meets the highest standards of
                quality and durability.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Affordability</h4>
              <p className="text-gray-600">
                Our goal is to make great products accessible to everyone,
                without breaking the bank.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Customer Focus</h4>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We are here to help every
                step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">Jane Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/90.jpg"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">John Smith</h4>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">Emily Johnson</h4>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Customer Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "E-Shop has been a game-changer for my shopping habits. Their
                customer service is top-notch, and the products always exceed my
                expectations!"
              </p>
              <p className="text-gray-800 font-bold">- Sarah Williams</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "Fast delivery, great prices, and amazing quality! I recommend
                E-Shop to all my friends and family."
              </p>
              <p className="text-gray-800 font-bold">- Michael Brown</p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-gray-600 mb-6">
            Be part of a growing family of happy customers and enjoy exclusive
            deals and updates.
          </p>
          <a
            href="/shop"
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
          >
            Shop Now
          </a>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
