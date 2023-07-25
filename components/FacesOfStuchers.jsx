import React from 'react'
import Image from 'next/image'

const FacesOfStuchers = () => {
  const placeholderImageArray = Array.from({ length: 18 }, (_, index) => index)
  return (
    <section className="bg-[#EDEAF3] py-10 px-4">
      <div className="w-fit mx-auto pb-8">
        <h2 className="text-3xl font-medium pb-2">the faces of stuchers</h2>
        <div className="w-[50%] mx-auto h-1 bg-[#F99B7D]"/>
      </div>
      <p className="w-full max-w-[800px] mx-auto font-light text-base text-center">
        Leena offers BIPOC-focused therapy services to meet your mental health needs. Get started with a free, no-obligation consultation. Simply ﬁll out our intake form, and a member of our care team will match you with a Leena therapist that best suits your needs.  
      </p>
      <div className="w-full max-w-[810px] mx-auto flex justify-around md:justify-center gap-4 gap-y-8 flex-wrap py-12">
        {
          placeholderImageArray.map((item, idx) => (
            <Image 
              key={idx}
              className="rounded-full border-2 border-[#B04759] transform hover:scale-105 transition-all hover:border-4 ease-in-out duration-300"
              alt="Teacher"
              src="/female-placeholder.jpg"
              width={120}
              height={120}
            />
          ))
        }
      </div>
      <div className="text-center">
        <p className="font-semibold pb-4">Our welcoming team of therapists can’t wait to meet you!</p>
        <button
          type="button" 
          className="w-fit font-light mx-auto rounded-full bg-[#B04759] text-white px-3 py-1"
        >
          help me find the right fit
        </button>
      </div>
    </section>
  )
}

export default FacesOfStuchers