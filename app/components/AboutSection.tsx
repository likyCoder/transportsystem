import Layout from "./layout"

export default function About() {
  return (
    <Layout title="About Us - Carint">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50">
          <img 
            src="/images/slider-bg.jpg" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="text-gray-600 mb-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                the middle of text. All
              </p>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition duration-300">
                Read More
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/about-img.jpg" 
                alt="About Us" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best transportation services to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading transportation service provider in the region with global recognition for excellence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-tasks"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver reliable, efficient, and cost-effective transportation solutions that exceed customer expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, professionalism, customer focus, innovation, and teamwork guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}