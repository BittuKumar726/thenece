import React, { useState } from "react";
import unionImg from "../../assets/Homepage/Union.png";
const QueryPage = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-[#E8EEE7] rounded-[40px] flex justify-around p-6 w-full">
      <div className="mt-8 w-[50%]">
        <div className="pl-14  space-y-2">
          <h2 className="text-3xl text-[#9E9D9D] font-grace">
            What's on your mind
          </h2>
          <h1 className="font-semibold font-manrope text-6xl">Ask Questions</h1>
        </div>
        <div className="h-[300px] mt-14">
          <img src={unionImg} alt="union" className="h-[350px] w-[400px]" />
        </div>
      </div>

      <div className="mt-10 space-y-4 w-[50%] pr-9">
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
