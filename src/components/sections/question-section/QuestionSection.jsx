import React, { useRef } from "react";
import Layout from "../../layout";

const QuestionSection = () => {
  const footerRef = useRef(null);

  const scrollFooter = () => {
    footerRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <Layout>
      <section className="bg-gray-200 py-12 pt-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sie erreichen uns per E-Mail oder unter einer unserer Nummern!
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-200 ease-in-out text-white font-bold py-2 px-4 rounded" onClick={scrollFooter}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <div ref={footerRef}></div>
    </Layout>
  );
};

export default QuestionSection;
