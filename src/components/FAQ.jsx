function FAQItem({ question, answer }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-heading font-semibold mb-2 text-blue-400">
        {question}
      </h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
}

function FAQ() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FAQItem
            question="What does Scholarly Writers Hub do?"
            answer="We help students achieve their academic goals by providing expert writing assistance. Our services are particularly tailored for undergraduate and graduate students, ensuring their success in various academic writing tasks."
          />
          <FAQItem
            question="How does Scholarly Writers Hub work?"
            answer="We operate like a professional consulting firm. We start with a free, confidential consultation to discuss your needs and create a specialized plan just for you. If you choose to proceed, we provide a quote and begin working on your project following our step-by-step process."
          />
          <FAQItem
            question="What can Scholarly Writers Hub do for me?"
            answer="We can help you improve your academic performance, complete challenging assignments, and potentially graduate sooner. Our services aim to save you time, reduce stress, and enhance the quality of your academic work."
          />
          <FAQItem
            question="Is using your service considered academic dishonesty?"
            answer="Our services are designed to assist and guide you in your academic journey. We provide research assistance, writing support, and editing services. However, the work we provide should be used as a reference or learning tool, and not submitted directly as your own work."
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
