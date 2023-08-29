import React from 'react'

export default function AccordionItem({title, content,content2 , isOpen, toggleAccordion }) {
  return (
    <>
      <div className="accordion-item card">
        <h2 className="accordion-header card-header">
          <button
              className={`accordion-button${isOpen ? '' : ' collapsed'}`}
              type="button"
              onClick={toggleAccordion}
          >
            {title}
          </button>
        </h2>
        <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
          <div className="accordion-body card-body">
            {content || content2 ? content : null}
            {content && content2 ? <><br/><br/></> : null}
            {content2 ? content2 : null}
          </div>
        </div>
      </div>
    </>
  )
}