import React from 'react'

const FormSection = () => {
  return (
    <section className="py-10">
      <div className="w-full p-4 max-w-[1140px] mx-auto bg-[#8BACAA] text-center py-20">
        <h2 className="text-4xl font-medium pb-6">{"Let's get you matched!"}</h2>
        <div className="w-full max-w-[720px] mx-auto text-xl flex flex-col gap-y-4">
          <p>
            {"Leena is Canada's"} <span className="font-semibold">first and largest</span> BIPOC-focused Mental Health platform. {"We're"} so glad to have you here! Please note that at this time we are only able to provide services to people located in Canada.
          </p>
          <p>
            {"Let's get you started on your journey to finding your"} <span className="font-semibold italic">right fit</span>.<br/>
            Simply fill out a this short intake form, and a member of our team will be in touch!
          </p>
        </div>
        <div className="py-16">
          <div className="w-fit mx-auto rounded-full font-semibold bg-[#F99B7D] text-white px-6 py-2">
            Start
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection