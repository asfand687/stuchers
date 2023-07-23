"use client"
import React, { useState} from 'react'
import { FaChevronDown, FaMinus } from "react-icons/fa"

const faqs = [
  {
    question: "what is leena?",
    answer: "Leena is Canada's first and largest BIPOC-focused mental health platform. Our goal is to make mental health care accessible for everyone, regardless of their identity, cultural background, or location. We offer a diverse group of therapists, to ensure all of our clients find the right fit for their needs and lived experiences.  Leena means light, and our goal is to be a ray of sunlight for anyone looking for hope."
  },
  {
    question: "what makes leena different from other virtual therapy platforms?",
    answer: "Unlike other virtual therapy platforms, Leena is not a listing service. Leena clinicians are hand-picked for their experience and backgrounds, to ensure quality care - every time. Leena clinicians also participate in continuing education, group supervision, and individual coaching from leading experts in a variety of specializations relating to BIPOC communities and their mental health needs."
  },
  {
    question: "Do you offer sliding scale rates?",
    answer: "Yes - Leena offers a select number of sliding scale spots monthly for clients in need of financial support. Please contact hello@helloleena.com for more information. "
  },
  {
    question: "Do you offer payment plans?",
    answer: "Soon! We recognize that therapy is an investment, and that finances can often be a barrier for clients. Our goal is to make mental health care accessible to everyone - regardless of financial status. Stay tuned for more details on our payment plans - or email us at hello@helloleena.com for more details. "
  },
  {
    question: "Can I be reimbursed from my insurance?",
    answer: "Yes – if you have insurance/group benefits through your university or employer, you may be able to seek reimbursement for your session fees. We will happily provide you with receipts in order to submit to your insurance company. Unfortunately, we do not offer direct billing at this time."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <section className="py-10">
      <div className="w-full max-w-[900px] mx-auto rounded-3xl bg-[#F8F8F3] py-20">
        <div className="w-fit mx-auto pb-16">
          <h2 className="text-4xl font-semibold px-2">
            faq
          </h2>
          <div className="w-[100%] mx-auto h-1 bg-[#e1ad01] mt-2"/>
        </div>

        <div className="w-full max-w-[700px] mx-auto faq">
          {
            faqs.map((faq, idx) => (
              <article 
                onClick={() => activeIndex === idx ? setActiveIndex(null) : setActiveIndex(idx)} 
                key={idx} 
                className="faq__item"
              >
                <div className="question text-lg">
                  <div className="p-4 flex justify-between">
                    {faq.question}
                    {
                      activeIndex === idx ?
                      <FaMinus/>:
                      <FaChevronDown/>
                    }
                  </div>
                </div>
                <div className={`answer ${activeIndex === idx ? "max-h-[300px] p-4 border-b-2 border-[#ccc]" : "max-h-0"} overflow-hidden transition-all ease-in-out duration-700`}>
                  {faq.answer}
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default FAQ