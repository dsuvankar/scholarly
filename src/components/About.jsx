import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-8 text-white">
          About Scholarly Writers Hub
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-gray-300">
            Since 2022, Scholarly Writers Hub has been dedicated to helping
            students achieve academic excellence. Our team of expert writers
            specializes in management topics and has assisted countless students
            in improving their grades and academic performance.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            With a focus on quality, originality, and timely delivery, we've
            become a trusted partner for students seeking top-notch academic
            writing assistance. Our mission is to empower students with the
            knowledge and skills they need to succeed in their academic
            pursuits.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-blue-400">
              Why Choose Us?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                <span className="text-gray-300">
                  Expert writers with advanced degrees
                </span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                <span className="text-gray-300">
                  Customized approach for each client
                </span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                <span className="text-gray-300">
                  Timely delivery of high-quality work
                </span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                <span className="text-gray-300">24/7 customer support</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                <span className="text-gray-300">Plagiarism-free guarantee</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                <span className="text-gray-300">
                  Affordable pricing and discounts
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-blue-400">
              Your success is our priority!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
