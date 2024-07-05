import React, { useState } from 'react';
import '../faqs/faq.css'; 

const AccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    { title: 'What is Lorem Ipsum?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Why do we use it?', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { title: 'Where does it come from?', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.' }
  ];

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={index} className="accordiond-item">
          <div className="accordiond-header" onClick={() => toggleAccordion(index)}>
            <div className="accordiond-title">{item.title}</div>
            <div className={`accordiond-icon ${activeIndex === index ? 'active' : ''}`}>&#9660;</div>
          </div>
          <div className={`accordiond-content ${activeIndex === index ? 'open' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
