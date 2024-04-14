import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

function HeroSection() {
  return (
    <div className="flex flex-col  items-center mt-6">
      <h1 className="text-4xl text-center px-4  mx-6 mt-20 tracking-wide">
        VirtualR build tools <span className="text-orange-500">for</span>{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text">developers</span>
      </h1>
      <p className="text-center text-neutral-500 text-lg mx-9 mt-10">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex gap-6 mt-10 mx-9">
        <a href="#" className="text-base p-3 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Start for free</a>
        <a href="#" className="border rounded-md p-3 px-4">Documentation</a>
      </div>
      <div className="flex mt-20  ">
        <video autoPlay muted loop className=" w-44 border border-orange-700 shadow-orange-400 rounded-lg mx-2 my-4 " src={video1}></video>
        <video autoPlay muted loop className=" w-44 border border-orange-700 shadow-orange-400 rounded-lg mx-2 my-4" src={video2}></video>
      </div>
    </div> 
  );
}

export default HeroSection;
