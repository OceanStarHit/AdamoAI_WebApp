import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQs = () => {
  return (
    <Accordion className='bottom-0 '>
      <AccordionItem className='bottom-0'>
        <div className='flex justify-center'>
          <div className='w-full max-w-[595px] bg-card mt-5 rounded-xl shadow-md mx-5 mb-3'>
            <AccordionItemHeading>
              <AccordionItemButton className='before:none p-5'>
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='p-5  border-t-2 !imporant'>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem className='bottom-0'>
        <div className='flex justify-center'>
          <div className='w-full max-w-[595px] bg-card mt-5 rounded-xl shadow-md mx-5 mb-1 md:mb-3'>
            <AccordionItemHeading>
              <AccordionItemButton className='before:none p-5'>
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='p-5  border-t-2 !imporant'>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem className='bottom-0'>
        <div className='flex justify-center'>
          <div className='w-full max-w-[595px] bg-card mt-5 rounded-xl shadow-md mx-5 mb-1 md:mb-3'>
            <AccordionItemHeading>
              <AccordionItemButton className='before:none p-5'>
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='p-5  border-t-2 !imporant'>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem className='bottom-0'>
        <div className='flex justify-center'>
          <div className='w-full max-w-[595px] bg-card mt-5 rounded-xl shadow-md mx-5 mb-1 md:mb-3'>
            <AccordionItemHeading>
              <AccordionItemButton className='before:none p-5'>
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='p-5  border-t-2 !imporant'>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQs;
