import { useState } from "react";
import faqData from "../utils/faqData"
import Accordion from "./Accordian";

const FAQ = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

  const handleShow = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="my-14 px-24">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div>
        {/* Accordian */}
        <Accordion items={faqData} />
      </div>
    </div>
  );
};

export default FAQ;
