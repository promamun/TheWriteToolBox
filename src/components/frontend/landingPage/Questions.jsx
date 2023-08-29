import React,{useState} from 'react'
import AccordionItem from "./AccordionItem";
import AccordionData from "./AccordionData";

export default function Questions() {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title text-center">QUESTIONS? ASK AWAY!</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion">
                    {AccordionData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            content2={item.content2}
                            isOpen={openItemIndex === index}
                            toggleAccordion={() => toggleAccordion(index)}
                        />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}