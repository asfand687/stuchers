"use client"
import React, { useState} from 'react'
import { FaChevronDown, FaMinus } from "react-icons/fa"

const faqs = [
  {
    question: "What is Stuchers?",
    answer: "Stuchers, guided by women leaders, operates virtually, providing tutoring to Pakistani students worldwide, including those within Pakistan and abroad. With students in various countries, we understand that extra support is often required beyond regular schooling, especially when certain challenges are overlooked. At Stuchers, our team identifies these specific areas needing attention, enabling students to develop the skills to overcome obstacles independently, reducing the need for external tutoring."
  },
  {
    question: "What makes Stuchers different from other virtual tutoring platforms?",
    answer: "Firstly, we are led by a team of dedicated woman who understand students unique challenges. So we empower both our teachers and students. Secondly, we cater to Pakistani students all over the world. Moreover we believe, every student has specific needs, areas that they need help with, hence, our teachers work on those specific areas following a personalised approach which is a key differentiator. Lastly, our goal is to foster independence in our students. We equip students with skills and strategies that they need to become self reliant learners."
  },
  {
    question: "Do you offer only Evaluation Programs?",
    answer: "Certainly, we cater to students focusing on past papers rather than the entire course. Our tutors then create unit or topic-based assessment tests to enhance their preparation insight. Post-evaluation, students engage in personalized discussion sessions with teachers, receiving valuable feedback on errors and strategies for progress. "
  },
  {
    question: "What if we pay for whole six months, and later on want to discontinue after a few months. Shall we get a refund?",
    answer: "Rest assured, your funds are secure with us. If you decide to discontinue after 6 months of payment, we'll deduct only for the services used and refund the remainder. "
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
                      <div>
                        <FaMinus/>
                      </div>:
                      <div>
                        <FaChevronDown/>
                      </div>
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