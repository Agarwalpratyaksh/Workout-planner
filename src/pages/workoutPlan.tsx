
import allExercises from "@/data/allExcercises";
import { planDetails } from "@/services/atoms";
import { Dumbbell, DumbbellIcon } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";



import { useRecoilValue, useSetRecoilState } from "recoil";



interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
}

interface DailyPlan {
  day: string;
  focus: string;
  exercises: Exercise[];
}

interface WorkoutPlan {
  workoutPlan: {
    client: {
      age: number;
      weight: number;
      height: number;
      experience: string;
      goal: string;
    };
    schedule: {
      daysPerWeek: number;
      durationPerDay: number;
    };
    weeklyPlan: DailyPlan[];
    notes: string[];
  };
}


function WorkoutPlan() {

  console.log("workoutplan page");

  let plan:WorkoutPlan = useRecoilValue(planDetails);

  const setPlan = useSetRecoilState(planDetails)

  console.log(plan);
  
  useEffect(()=>{
    const savedPlan = localStorage.getItem('workoutPlan');
    if(savedPlan && (plan.workoutPlan?.weeklyPlan.length==0  || !plan.workoutPlan?.notes)){
      try{
        console.log(savedPlan)
        const parsedPlan = JSON.parse(savedPlan);
        console.log(parsedPlan)
        setPlan(parsedPlan)

      }catch(e){
        console.log("Custom error : Problem in getting the saved data i local storage: ",e)
      }
    }
  },[])
  
  const getExerciseVideo = (exerciseName: string) => {
    const exercise = allExercises.find(
      (exercise) => exercise.name === exerciseName
    );
    return exercise ? exercise.videoUrl : null ;
  };

 const workoutData = plan?.workoutPlan?.weeklyPlan ? plan : JSON.parse(localStorage.getItem('workoutPlan') || '{}')

 if (!workoutData?.workoutPlan?.weeklyPlan || !workoutData?.workoutPlan?.notes) {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold text-red-500">
        No workout plan found. Please create a new plan.
      </h2>
    </div>
  );
}
  

 
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center py-5 px-8 bg-white shadow-sm">
      <Link to={'/'}>
        <div className="flex items-center space-x-2">
          
          <Dumbbell className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Workit</h1>
          
        </div>
        </Link>
        
      </header>


      {/* Title and Description */}
      <div>
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Your Personalized Workout Plan <span className="">({workoutData?.workoutPlan?.client?.goal})</span>
        </h2>
        <h3 className="text-center text-lg text-gray-600 mb-6">
          Here’s your weekly workout routine tailored just for you!
        </h3>
      </div>

      {/* Notes Section */}
      <div className="bg-white p-5 rounded-lg border border-black mb-6">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Notes</h4>
        <ul className="list-disc list-inside text-gray-700">
         
          {//@ts-ignore
          workoutData.workoutPlan.notes.map((note, index) => (
            <li key={index} className="mb-2">
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly Plan */}
      <div>
        {workoutData.workoutPlan.weeklyPlan.map((daily:any, index:number) => (
          <div
            key={index}
            className="bg-gray-100 p-8 mb-6 rounded-lg  border border-black"
          >
            {/* Day and Focus */}
            <h4 className="text-2xl font-bold text-gray-800 mb-6">
              {daily.day}: <span className="text-blue-500">{daily.focus}</span>
            </h4>

            {/* Exercises */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {daily.exercises.map((exercise:any, indx:number) => {
                const videoUrl = getExerciseVideo(exercise.name);
                return (
                  <div
                    key={indx}
                    className="flex flex-col bg-white rounded-lg border-2 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Video */}
                    { videoUrl && <div className="w-full">
                      <video
                        className="h-auto w-full object-cover"
                        loop
                        autoPlay
                        muted
                      >
                        <source src={videoUrl} type="video/mp4" />
                      </video>
                    </div>}

                    {/* Exercise Details */}
                    <div className="p-4">
                      <h5 className="text-lg font-bold text-gray-800 mb-2">
                        {exercise.name}
                      </h5>
                      <p className="text-gray-600 text-sm mb-1">
                        {exercise.intensity&& 'Intensity: '+ exercise.intensity}
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                      {exercise.sets && 'Sets: '+ exercise.sets}
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                      {exercise.reps && 'Reps: '+ exercise.reps}
                      </p>
                      {exercise.duration && (
                        <p className="text-gray-600 text-sm">
                          Duration: {exercise.duration} min
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );





// return (
//   <div className="p-8 bg-gray-100 min-h-screen">
//     {/* Header Section */}
//     <div className="mt-4 flex justify-between items-center mb-12 bg-white py-3 px-6 rounded-md shadow-sm">
//       <div className="text-xl font-medium text-gray-800">Workit</div>
//     </div>

//     {/* Title and Description */}
//     <div className="text-center mb-8">
//       <h2 className="text-4xl font-semibold text-gray-800 mb-4">Your Personalized Workout Plan</h2>
//       <h3 className="text-lg text-gray-600">Here’s your weekly workout routine tailored just for you!</h3>
//     </div>

//     {/* Notes Section */}
//     <div className="bg-white p-6 rounded-md shadow-sm mb-8">
//       <h4 className="text-2xl font-semibold text-gray-800 mb-4">Notes</h4>
//       <ul className="list-disc list-inside text-gray-700">
//         {ans.workoutPlan.notes.map((note, index) => (
//           <li key={index} className="text-lg mb-2">
//             {note}
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Weekly Plan with Accordion */}
//     <Accordion type="multiple" collapsible>
//       {ans.workoutPlan.weeklyPlan.map((daily, index) => (
//         <AccordionItem key={index} value={`day-${index}`}>
//           <AccordionTrigger className="text-2xl font-medium text-gray-800 py-2 px-4 hover:bg-gray-200 transition-all rounded-md">
//             {daily.day}: <span className="text-gray-600">{daily.focus}</span>
//           </AccordionTrigger>
//           <AccordionContent className="mt-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {daily.exercises.map((exercise, indx) => {
//                 const videoUrl = getExerciseVideo(exercise.name);
//                 return (
//                   <div
//                     key={indx}
//                     className="flex flex-col bg-white rounded-md border border-gray-200 overflow-hidden"
//                   >
//                     {/* Video */}
//                     <div className="w-full overflow-hidden rounded-t-md">
//                       <video
//                         className="w-full h-48 object-cover"
//                         loop
//                         autoPlay
//                         muted
//                       >
//                         <source src={videoUrl} type="video/mp4" />
//                       </video>
//                     </div>

//                     {/* Exercise Details */}
//                     <div className="p-4">
//                       <h5 className="text-xl font-semibold text-gray-800 mb-2">{exercise.name}</h5>
//                       <p className="text-gray-600 text-sm mb-1">
//                         Intensity: <span className="font-medium">{exercise.intensity}</span>
//                       </p>
//                       <p className="text-gray-600 text-sm mb-1">
//                         Sets: <span className="font-medium">{exercise.sets}</span>
//                       </p>
//                       {exercise.duration && (
//                         <p className="text-gray-600 text-sm">
//                           Duration: <span className="font-medium">{exercise.duration} min</span>
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   </div>
// );




  
}

export default WorkoutPlan;
