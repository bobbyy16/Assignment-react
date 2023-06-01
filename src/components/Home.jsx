import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* //   <header className="bg-white shadow">
    //     <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
    //       <h1 className="text-2xl font-bold text-gray-800">Welcome to Taiyō.AI</h1>
    //     </div>
    //   </header> */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg">
          <div className="bg-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Revolutionize Your Business with AI</h2>
              <p className="text-lg text-gray-200">
                At Taiyō.AI, we leverage the power of artificial intelligence to transform businesses and drive innovation. Our cutting-edge AI solutions enable you to make data-driven decisions, automate processes, and enhance customer experiences. Take your business to new heights with Taiyō.AI.
              </p>
              <button className="bg-white text-blue-500 font-semibold px-6 py-3 mt-6 rounded-full shadow-lg hover:bg-blue-100">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-8 px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              Taiyō.AI is a leading AI-powered technology company focused on revolutionizing the way businesses operate. We specialize in developing innovative solutions using cutting-edge artificial intelligence technologies.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Our team of experts is dedicated to delivering high-quality, scalable, and customizable AI solutions that drive business growth and enhance operational efficiency.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
