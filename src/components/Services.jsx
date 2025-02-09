import {
  FaBook,
  FaPencilAlt,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-semibold mb-2 text-white">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<FaBook />}
            title="Report Writing"
            description="Comprehensive and well-structured reports tailored to your specific requirements, ensuring clarity and depth in your academic submissions."
          />
          <ServiceCard
            icon={<FaPencilAlt />}
            title="Essay Writing"
            description="Engaging and insightful essays that showcase your understanding of the subject matter, crafted to meet the highest academic standards."
          />
          <ServiceCard
            icon={<FaGraduationCap />}
            title="Dissertation Writing"
            description="In-depth research and expert writing to help you complete your dissertation successfully, from proposal to final submission."
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Management Topics"
            description="Specialized assistance in various management fields, including strategic management, organizational behavior, and business analytics."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
