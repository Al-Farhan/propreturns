import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageSection = ({ images }) => {
  return (
    <div className="hidden lg:flex py-8 border-b px-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-4"
      >
        <CarouselContent className="justify-around">
          {images?.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <img
                  className="rounded-md"
                  src={`${image}`}
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
