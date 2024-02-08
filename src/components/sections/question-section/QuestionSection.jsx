import React from "react";
import Layout from "../../layout";

const QuestionSection = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-12 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Do you have any questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to reach out to us if you have any questions or concerns.
            We're here to help!
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuestionSection;
