const FirstSection = () => {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center hidden lg:block" style={{ backgroundImage: 'url(https://assets.codi.com/production/tr:w-600,h-400/qv9hg4u2njz73w14l2lu3pgux330)' }}>
      <div className="relative z-10 flex items-end justify-center h-full">
        <div className="bg-gradient-to-r from-[#7A6955] to-[#333937] mb-10 p-8 rounded-lg shadow-lg max-w-3xl w-full text-center flex justify-between">
          <h1 className="text-4xl font-bold text-white">Large Industrial Office</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Log in to see pricing</button>
        </div>
      </div>
    </div>
    <div className="lg:hidden">
        <img src="https://assets.codi.com/production/tr:w-600,h-400/qv9hg4u2njz73w14l2lu3pgux330" alt="" />
        <div className='px-5 flex flex-col items-center'>
        <h2 className='text-xl font-bold text-center mt-4'>Modern Industrial Office in South Kearny</h2>
        <button className='bg-blue-500 text-white px-4 py-4 mt-2 rounded-md w-full max-w-sm'>Log in to see pricing</button>
        </div>
    </div>
    </>
  );
};

export default FirstSection;
