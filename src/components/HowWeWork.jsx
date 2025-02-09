import {
  FaComments,
  FaClipboardList,
  FaPencilRuler,
  FaCheckCircle,
} from "react-icons/fa";

function Step({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-semibold mb-2 text-white">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-white">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step
            icon={<FaComments />}
            title="1. Free Consultation"
            description="We start with a free, confidential consultation to discuss your needs and academic goals."
          />
          <Step
            icon={<FaClipboardList />}
            title="2. Customized Plan"
            description="Based on your requirements, we create a tailored plan to ensure your success."
          />
          <Step
            icon={<FaPencilRuler />}
            title="3. Expert Assistance"
            description="Our team of experienced writers works diligently on your project, maintaining constant communication."
          />
          <Step
            icon={<FaCheckCircle />}
            title="4. Quality Assurance"
            description="We review and refine the work to meet the highest academic standards before delivery."
          />
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
