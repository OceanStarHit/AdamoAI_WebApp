import { FAQItems } from 'constants/settings';
import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <AccordionItem className='bottom-0'>
    <div className='flex justify-center'>
      <div className='w-full max-w-[595px] bg-card mt-5 rounded-xl shadow-md mx-5 mb-3'>
        <AccordionItemHeading>
          <AccordionItemButton className='before:none p-5'>
            {question}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className='p-5  border-t-2 !imporant'>
          <p>{answer}</p>
        </AccordionItemPanel>
      </div>
    </div>
  </AccordionItem>
);

const FAQs = () => {
  return (
    <Accordion className='bottom-0 '>
      {FAQItems.map((item, index) => (
        <FAQItem question={item.question} answer={item.answer} key={index} />
      ))}
    </Accordion>
  );
};

export default FAQs;
