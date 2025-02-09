import { FaQuoteLeft } from "react-icons/fa";

function TestimonialCard({ quote, author, program }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
      <p className="text-gray-300 mb-4">{quote}</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-sm text-gray-100">{program}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-white">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Scholarly Writers Hub helped me complete my dissertation on time. Their expertise in management topics was invaluable."
            author="Sarah M."
            program="PhD in Business Management"
          />
          <TestimonialCard
            quote="I was struggling with my research paper until I found Scholarly Writers Hub. They provided excellent guidance and support."
            author="Michael L."
            program="Master's in Marketing"
          />
          <TestimonialCard
            quote="The quality of work and attention to detail provided by Scholarly Writers Hub exceeded my expectations. Highly recommended!"
            author="Emily R."
            program="MBA Student"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
