import React, { useState } from "react";
import unionImg from "../../assets/Homepage/Union.png";

const QueryPage = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-[#E8EEE7] rounded-[40px] flex flex-col lg:flex-row justify-between items-center lg:items-start p-6 w-full">
      <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
        <div className="pl-6 lg:pl-14 space-y-2">
          <h2 className="text-2xl lg:text-3xl text-[#9E9D9D] font-grace">
            What's on your mind
          </h2>
          <h1 className="font-semibold font-manrope text-4xl lg:text-6xl">
            Ask Questions
          </h1>
        </div>
        <div className="h-[200px] lg:h-[350px] mt-10 lg:mt-14 flex justify-center lg:justify-start">
          <img
            src={unionImg}
            alt="union"
            className="h-[250px] w-[300px] lg:h-[350px] lg:w-[400px]"
          />
        </div>
      </div>

      <div className="w-full lg:w-[50%] space-y-4 pr-6 lg:pr-9">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-300">
            <button
              className="w-full text-left py-4 flex justify-between gap-4 items-center text-lg font-medium text-gray-800"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-gray-600">
                {open === index ? "-" : "+"}
              </span>
            </button>
            {open === index && (
              <p className="text-gray-600 mt-2 mb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Do you offer freelancers?",
    answer: "",
  },
  {
    question:
      "What’s the guarantee that I will be satisfied with the hired talent?",
    answer: "",
  },
  {
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Why should I not go to an agency directly?",
    answer: "",
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer: "",
  },
];

export default QueryPage;
