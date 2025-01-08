// import { Button } from '@/components/ui/button';
// import { Dumbbell, DumbbellIcon } from 'lucide-react';
// import React from 'react'
// import { Link } from 'react-router';

// function Home() {
//   return (
//     <div className=" w-full min-w-[100vw] h-full min-h-screen  p-5 ">
//       {/* header */}
//       <div className="mt-2 flex justify-between">
//         <div className="ml-3"><Dumbbell className='h-12 w-12'/> </div>
//         <div>
//           <Link to={'/details'}>
//           <Button className="mr-3 h-12 w-32 rounded-3xl">Get Started</Button></Link>
//         </div>
//       </div>

//       {/* Main area */}
//       <div className=" mt-3 h-full ">
//         <div className="text-7xl  lg:text-8xl font-bold text-center  mt-12 font-sans">
//           Intelligent Fitness
//           <br />
//           Tailored For You
//         </div>

//       {/* centre */}
//         <div className="">
         
          
//           <div className="flex h-4/6 items-center justify-evenly relative  over">
//           <div>Curated Workouts only for you</div>
//             <div className="bg-white h-64 w-64 rounded-full blur-[100px] "></div>
              

//             <div><Button className="h-12 w-40 rounded-full">Lets Start {">>>"} </Button></div>
//           </div>
//         </div>

       
//       </div>
//     </div>
//   );
// }
// export default Home



import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-5 px-8 bg-white shadow-sm">
      <Link to={'/'}>
        <div className="flex items-center space-x-2">
          
          <Dumbbell className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Workit</h1>
          
        </div>
        </Link>
        <Link to="/details">
          <Button className="px-6 py-5 rounded-full text-white bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
          Personalized Fitness Plans <br />
          <span className="text-blue-600">Designed For You</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the power of tailored workouts that fit your goals and
          lifestyle. Start your journey today!
        </p>
        <div className="mt-8">
          <Link to="/details">
            <Button className="px-9 py-6 rounded-full text-white bg-blue-600 hover:bg-blue-700 text-lg">
              Let’s Begin
            </Button>
          </Link>
        </div>
        <div className="relative mt-16 w-full max-w-4xl">
          <div className="absolute inset-0  rounded-full blur-3xl h-72 w-72 mx-auto"></div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-100 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Workit. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
