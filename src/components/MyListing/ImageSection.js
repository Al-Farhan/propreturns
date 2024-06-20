import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageSection = () => {
  return (
    <div className="hidden lg:flex py-8 border-b px-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-4"
      >
        <CarouselContent className="justify-around">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md"
                  src="https://assets.codi.com/production/tr:w-600,h-400/qv9hg4u2njz73w14l2lu3pgux330"
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageSection;
