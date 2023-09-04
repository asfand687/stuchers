import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-[#B04759] rounded-b-[50px]">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-x-16 max-w-[1140px] mx-auto text-white">
        <article className="w-full max-w-[550px] flex flex-col gap-y-4 p-4 text-center lg:text-left">
          <h2 className="text-4xl font-medium">Fun and Simple Learning with Stuchers!</h2>
          <div className="flex flex-col gap-y-3 text-lg">
            <p>Stuchers offers  personalised one on one classes to meet all your academic needs. Get a free 2 days exclusive demo class with our teachers today.</p>
            <p className="py-2">Choose a teacher yourself or our team will find a teachers that can help you best with your current requirement. Please fill out our form. </p>
            
            <article className="mt-10 font-bold w-fit rounded-full bg-[#8BACAA] text-white px-5 py-1 mx-auto lg:mx-0">
              Schedule a Demo Class
            </article>
          </div>
        </article>
        <article>
          <Image
            alt="Stuchers" 
            src="/hero.png" 
            width={480} 
            height={480}
          />
        </article>
      </div>
    </section>
  )
}

export default Hero