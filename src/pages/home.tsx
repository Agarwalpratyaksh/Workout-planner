import { Button } from '@/components/ui/button';
import React from 'react'

function Home() {
  return (
    <div className="bg-black w-full min-w-[100vw] h-full min-h-screen text-white p-5 ">
      {/* header */}
      <div className="mt-2 flex justify-between">
        <div className="ml-3">Workit</div>
        <div>
          <Button className="mr-3 ">Get Started</Button>
        </div>
      </div>

      {/* Main area */}
      <div className=" mt-3 h-full ">
        <div className="text-8xl font-bold text-center  mt-12 font-sans">
          Intelligent Fitness
          <br />
          Tailored For You
        </div>

      {/* centre */}
        <div className="">
         
          
          <div className="flex h-4/6 items-center justify-evenly relative  over">
          <div>Curated Workouts only for you</div>
            <div className="bg-white h-64 w-64 rounded-full blur-[100px] "></div>
              <img src="src/assets/bodybuilder.png" className="absolute -bottom-40" alt="" />

            <div><Button className="h-12 w-40 rounded-full">Lets Start {">>>"} </Button></div>
          </div>
        </div>

        {/* Center */}
        {/* <div className="h-full relative">
    <div className="flex h-4/6 items-center justify-center relative">
      <div className="bg-white h-64 w-64 rounded-full blur-[100px] z-0 "> 
      </div>
      <img className="z-10 absolute -bottom-36 " src="src\assets\bodybuilder.png" alt="" />
   </div>
   </div> */}
      </div>
    </div>
  );
}
export default Home