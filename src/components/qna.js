import React from 'react'
import Accordion from './Accordin';
import QNAimage from './svgs/qnaimage.png';
export default function Qna() {
  return (
    <>
    <div className='relative rounded-3xl bg-gray-100 grid grid-cols-2 w-full h-autto gap-5 p-6 sm:p-14'>
        {/* Ask question header */}
        <div className='col-span-2 sm:col-span-1 md:col-span-1'>
        <div className='text-2xl text-gray-500 font-bold shadows-into-light-regular'>What's on your mind</div>
        <div className='text-5xl lato-regular mt-2'>Ask questions</div>
        </div>

        {/* QnA container*/}
        <div className='col-span-2 sm:col-span-1 md:col-span-1'>
        <div>
        <Accordion title="Do you offer freelancers?">
            <p>Yes, we provide access to a curated pool of skilled freelancers tailored to your project needs, ensuring flexibility and efficiency in your staffing requirements.</p>
        </Accordion>
        <Accordion title="What's the guarantee that I will be satisfied
with the hired talent?">
            <p>We assure satisfaction through rigorous vetting processes and ongoing support, ensuring that only top-tier talent suited to your specific needs is provided.</p>
        </Accordion>

        <Accordion title="Can I hire multiple talents at once?">
            <p>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
        </Accordion>

        <Accordion title="Why should I not go to an agency directly?">
            <p>By choosing us, you gain direct access to specialized talent without the overhead costs associated with traditional agencies, ensuring cost-effectiveness and streamlined communication.</p>
        </Accordion>

        <Accordion title="Who can help me pick a right skillset
and duration for me?">
            <p>Our expert team offers personalized guidance to help you navigate skillset selection and project duration, ensuring optimal outcomes aligned with your objectives and timeline.</p>
        </Accordion>
        </div>
        </div>

        {/* Image container*/}
        <div className='absolute bottom-0 left-0 h-[70%] w-[50%]'>
            <img src={QNAimage} className='w-full h-full' alt='Qna art'/>
        </div>

    </div>
    </>
  )
}
