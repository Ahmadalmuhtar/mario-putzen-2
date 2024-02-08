import React, { useState, useEffect, useRef } from "react";
import Layout from "../../layout";

const QualityCounter = () => {
  const [quality, setQuality] = useState(0);
  const qualityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(() => {
          if (quality < 100) {
            setQuality((prevQuality) => prevQuality + 1);
          } else {
            clearInterval(interval);
          }
        }, 200); // Increase the counter every 20 milliseconds

        return () => clearInterval(interval);
      }
    });

    if (qualityRef.current) {
      observer.observe(qualityRef.current);
    }

    return () => {
      if (qualityRef.current) {
        observer.unobserve(qualityRef.current);
      }
    };
  }, [quality]);

  return (
    <Layout>
      <div
        ref={qualityRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 pb-6 bg-center bg-blue-300 pl-4 pr-4 border-b-4  border-gray-100"
      >
        <div className="opacity-80">
          <QualityItem title="QUALITÄT" value={quality} />
        </div>
        <div className="opacity-80">
          <QualityItem title="PÜNKTLICHKEIT" value={quality} />
        </div>
        <div className="opacity-80">
          <QualityItem title="ZUFRIEDENHEIT" value={quality} />
        </div>
        <div className="opacity-80">
          <QualityItem title="SAUBERKEIT" value={quality} />
        </div>
      </div>
    </Layout>
  );
};

const QualityItem = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center space-y-1 bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-3xl font-bold">{Math.min(value, 100)}</span>
    </div>
  );
};

export default QualityCounter;
