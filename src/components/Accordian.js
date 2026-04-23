import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#222] text-white text-xl transition-all duration-500 ease-in-out"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#333]"
            onClick={() => handleToggle(index)}
          >
            <h2 className="">{item.title}</h2>

            {openIndex === index ? (
              <i className="fa-solid fa-xmark text-2xl"></i>
            ) : (
              <i className="fa-solid fa-plus text-2xl"></i>
            )}
          </div>

          {/* Content */}
          {openIndex === index && (
            <div className="overflow-hidden">
              <div className="border-t border-t-black p-6">{item.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
