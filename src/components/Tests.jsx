import React from "react";
import { Link } from "react-router-dom";

const tests = [
  {
    title: "Perceived Stress Scale (PSS-10) 🧠",
    description: "Measures perceived stress over the past month.",
  },
  {
    title: "Insomnia Severity Index (ISI) 😴",
    description: "Assesses the severity of insomnia over the past 2 weeks.",
  },
  {
    title: "Generalized Anxiety Disorder (GAD-7) 😟",
    description: "Measures the severity of anxiety over the past 2 weeks.",
  },
  {
    title: "Patient Health Questionnaire (PHQ-9) 📉",
    description: "Screens for depression severity over the past 2 weeks.",
  },
  {
    title: "Rosenberg Self-Esteem Scale 😊",
    description: "Checks confidence and self-worth.",
  },
  {
    title: "Brief Resilience Scale (BRS) 💪",
    description: "Identifies how users handle stress and bounce back from adversity.",
  },
  {
    title: "Burnout Assessment 🔥",
    description: "Measures emotional exhaustion and cynicism related to work or study.",
  },
  {
    title: "Lifestyle & Habits 🌿",
    description: "Assesses general wellness habits, including diet, exercise, and mindfulness.",
  },
  {
    title: "Social & Relationship Wellness 💬",
    description: "Assesses satisfaction and well-being in personal relationships.",
  },
];

const Tests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-100 to-blue-100 flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center font-poppins">
        Wellness & Mental Health Tests
      </h2>
      <p className="text-center text-gray-700 mb-10 max-w-2xl text-sm md:text-base">
        Choose a test to assess your mental wellness. Each card represents a different aspect of your well-being. Start any test by clicking the button below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {tests.map((test, idx) => (
          <div
            key={idx}
            className="bg-gradient-primary text-white p-5 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-1">{test.title}</h3>
              <p className="text-xs md:text-sm opacity-90">{test.description}</p>
            </div>
            <div className="mt-3">
              <Link
                to={`/test/${idx}`}
                className="block text-center bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition text-sm"
              >
                Start the Test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tests;
