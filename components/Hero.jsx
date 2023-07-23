import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-[#B04759] rounded-b-[50px]">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-x-16 max-w-[1140px] mx-auto text-white">
        <article className="w-full max-w-[550px] flex flex-col gap-y-4 p-4 text-center">
          <h2 className="text-4xl font-medium">Therapy that fits you.</h2>
          <div className="flex flex-col gap-y-3 text-lg">
            <p>Leena offers BIPOC-focused therapy services to meet your mental health needs.</p>
            <p className="py-2">Get started with a free, no obligation consultation.</p>
            <p>A member of our care team will match you with a Leena therapist that best suits your needs. Simply ﬁll out our intake form below.</p>
            <article className="mt-10 font-bold w-fit rounded-full bg-[#8BACAA] text-white px-5 py-1 mx-auto lg:mx-0">
              help me find the right fit
            </article>
          </div>
        </article>
        <article>
          <Image src="/hero.png" width={480} height={480}/>
        </article>
      </div>
    </section>
  )
}

export default Hero