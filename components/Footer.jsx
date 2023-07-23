import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-full relative bg-[#B04759] pt-44 py-20 px-4">
      <div className="absolute -top-1 left-0 w-full h-[109px]">
        <Image
          className="w-full"
          width={1100} 
          height={32}
          src="/wave-bg.svg"
        />
      </div>
      <div className="max-w-[1140px] mx-auto flex flex-col text-center lg:text-left lg:flex-row gap-y-6 justify-between font-light text-white">
        <div>
          <Image 
            className="mb-10 mx-auto"
            src="/logo.png"
            alt="Stuchers"
            width={170}
            height={130}
          />
          <article className="w-full lg:max-w-[350px] m-0 p-0">
            <span className="font-semibold">Leena means “light” or “ray of sunlight”</span>. Our mission is to be a bright light in the lives of our clients - and bring joy and comfort to the lives of underserved individuals across Canada.
          </article>
        </div>
        <div className="w-full max-w-[550px] place-self-end">
          If you are in crisis please call 911 or the Toronto Distress Line (416-408-4357) or Canada Suicide Prevention Service (1-833-456-4566) or Kids Help Phone (1-800-668-6868) or go to your local hospital emergency room.
        </div>
      </div>
    </div>
  )
}

export default Footer