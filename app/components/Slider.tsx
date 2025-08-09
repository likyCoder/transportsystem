import Layout from "./layout";
import Slider from "./Slider";
// import Testimonial from "./Testimonial";

type Service = {
  title: string;
  description: string;
  image: string;
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <img
        src={service.image}
        alt={service.title}
        className="w-20 h-20 mb-4 object-contain"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

const services = [
  {
    title: "Taxi Transport",
    description:
      "Reliable taxi services ensuring safety and comfort to your destination.",
    image: "/images/s1.png",
  },
  {
    title: "Bus Transport",
    description:
      "Affordable and timely bus transport services across multiple routes.",
    image: "/images/s2.png",
  },
  {
    title: "Trucks Transport",
    description:
      "Efficient logistics and cargo transport with our truck fleet.",
    image: "/images/s3.png",
  },
  {
    title: "Train Transport",
    description:
      "Fast and safe train services connecting major cities and towns.",
    image: "/images/s4.png",
  },
];

export default function Home() {
  return (
    <Layout title="MOBUS - Home">
      <Slider />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-700">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore a variety of transport options tailored for your needs,
              delivering reliability and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-700">Us</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We provide trusted transport services with a dedicated team
                focused on safety and customer satisfaction. Whether by road or
                rail, we ensure your cargo and passengers reach their
                destination efficiently.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Read More
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/about-img.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Track Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/track-bg.jpg"
            alt="Tracking Background"
            className="w-full h-full object-cover brightness-50"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-6">
            Track Your Shipment
          </h2>
          <p className="text-white mb-8 leading-relaxed">
            Easily track your shipment in real-time and stay updated on the
            progress of your cargo.
          </p>
          <form className="flex shadow-lg rounded overflow-hidden">
            <input
              type="text"
              placeholder="Enter Your Tracking Number"
              className="flex-grow px-4 py-3 focus:outline-none text-gray-800"
              aria-label="Tracking Number"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6"
            >
              Track
            </button>
          </form>
        </div>
      </section>

      {/* <Testimonial /> */}
    </Layout>
  );
}
import Link from "next/link";