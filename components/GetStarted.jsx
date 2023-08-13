import React from 'react'

const GetStarted = ({ showFormComponent }) => {
  
  return (
    <section>
      <div>
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
        <div className="py-4 md:py-16">
          <button 
            onClick={showFormComponent}
            type='button' 
            className="w-fit mx-auto rounded-full font-semibold bg-[#F99B7D] text-white px-6 py-2"
          >
            Start
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted