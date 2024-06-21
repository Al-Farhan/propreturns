const FirstSection = ({ myListing }) => {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center hidden lg:block" style={{ backgroundImage: `url(${myListing?.images?.[0]})` }}>
      <div className="relative z-10 flex items-end justify-center h-full">
        <div className="bg-gradient-to-r from-[#7A6955] to-[#333937] mb-10 p-8 rounded-lg shadow-lg max-w-3xl w-full text-center flex justify-between">
          <h1 className="text-4xl font-bold text-white">{myListing?.title}</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Log in to see pricing</button>
        </div>
      </div>
    </div>
    <div className="lg:hidden">
        <img src={`${myListing?.images?.[0]}`} alt="" />
        <div className='px-5 flex flex-col items-center'>
        <h2 className='text-xl font-bold text-center mt-4'>{myListing?.title}</h2>
        <button className='bg-blue-500 text-white px-4 py-4 mt-2 rounded-md w-full max-w-sm'>Log in to see pricing</button>
        </div>
    </div>
    </>
  );
};

export default FirstSection;
