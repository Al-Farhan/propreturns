import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

const OptionalAddons = () => {
  return (
    <div className='my-8 border-b'>
        <h1 className="font-bold text-3xl">Optional add-ons</h1>
        <p className='text-[#878787] text-sm'>Customize your office to fit your needs. <span className='text-[#2fa8ff] hover:text-[#5FAAFF] font-semibold'>View all</span> </p>

        <div className=" lg:flex py-8 border-b  lg:px-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-4"
        
      >
        <CarouselContent className="justify-around">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md h-40 bg-blue-50"
                  src="https://assets.codi.com/ux/tr:w-600/phone-booth_mcGy1D3A2.png?updatedAt=1692754819979"
                  alt=""
                />
                <p className="text-sm text-[#878787] ">Phone booth</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md h-40 bg-blue-50"
                  src="https://assets.codi.com/ux/tr:w-600/zoom-room_81HdQZN5r.jpeg?updatedAt=1692669084958"
                  alt=""
                />
                <p className="text-sm text-[#878787] ">Zoom Room</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md h-40 bg-blue-50"
                  src="https://assets.codi.com/ux/tr:w-600/workstation_keBlqYkK1.jpeg?updatedAt=1692837671309"
                  alt=""
                />
                <p className="text-sm text-[#878787] ">Height-adjustable workstation</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md h-40 bg-blue-50"
                  src="https://assets.codi.com/ux/tr:w-600/snacks-collage_i5u0UpyWC?updatedAt=1692809048731"
                  alt=""
                />
                <p className="text-sm text-[#878787] ">Snacks</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md h-40 bg-blue-50"
                  src="https://assets.codi.com/ux/tr:w-600/monitor-set_hiUA6wJwd.jpeg?updatedAt=1692669089586"
                  alt=""
                />
                <p className="text-sm text-[#878787] ">Monitor set</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md h-40 bg-blue-50"
                  src="https://assets.codi.com/ux/tr:w-600/additional-cleanings_qzkER9SuD.jpeg"
                  alt=""
                />
                <p className="text-sm text-[#878787] ">Additional cleanings</p>
              </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
    </div>
  )
}

export default OptionalAddons