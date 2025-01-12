//this was only made for testing purpose, main code is written in workoutplan.tsx

import allExercises from "@/data/allExcercises";
import { planDetails } from "@/services/atoms";
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
  const plan: WorkoutPlan = useRecoilValue(planDetails);
  

  // Load plan from localStorage on component mount
  // useEffect(() => {
  //   const savedPlan = localStorage.getItem('workoutPlan');
  //   if (savedPlan && (!plan?.workoutPlan?.weeklyPlan || !plan?.workoutPlan?.notes)) {
  //     try {
  //       const parsedPlan = JSON.parse(savedPlan);
  //       setPlan(parsedPlan);
  //     } catch (error) {
  //       console.error("Error loading saved plan:", error);
  //     }
  //   }
  // }, []);

  const getExerciseVideo = (exerciseName: string) => {
    const exercise = allExercises.find(
      (exercise) => exercise.name === exerciseName
    );
    return exercise ? exercise.videoUrl : null;
  };

  // Get plan data from either Recoil state or localStorage
  const workoutData = plan?.workoutPlan?.weeklyPlan
    ? plan
    : JSON.parse(localStorage.getItem("workoutPlan") || "{}");

  // Check if we have valid data
  if (
    !workoutData?.workoutPlan?.weeklyPlan ||
    !workoutData?.workoutPlan?.notes
  ) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          No workout plan found. Please create a new plan.
        </h2>
      </div>
    );
  }

  const { weeklyPlan, notes } = workoutData.workoutPlan;

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mt-2 flex justify-between items-center mb-8 bg-slate-400 py-2 px-4 rounded-lg shadow-md">
        <div className="text-lg font-bold text-white">Workit</div>
      </div>

      {/* Title and Description */}
      <div>
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Your Personalized Workout Plan
        </h2>
        <h3 className="text-center text-lg text-gray-600 mb-6">
          Here's your weekly workout routine tailored just for you!
        </h3>
      </div>

      {/* Notes Section */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Notes</h4>
        <ul className="list-disc list-inside text-gray-700">
          {notes.map((note: string, index: number) => (
            <li key={index} className="mb-2">
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly Plan */}
      <div>
        {weeklyPlan.map((daily: any, index: number) => (
          <div
            key={index}
            className="bg-gray-100 p-8 mb-6 rounded-lg border border-black"
          >
            {/* Day and Focus */}
            <h4 className="text-2xl font-bold text-gray-800 mb-6">
              {daily.day}: <span className="text-blue-500">{daily.focus}</span>
            </h4>

            {/* Exercises */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {daily.exercises.map((exercise: any, indx: number) => {
                const videoUrl = getExerciseVideo(exercise.name);
                return (
                  <div
                    key={indx}
                    className="flex flex-col bg-white rounded-lg border-2 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Video */}
                    {videoUrl && (
                      <div className="w-full">
                        <video
                          className="h-auto w-full object-cover"
                          loop
                          autoPlay
                          muted
                        >
                          <source src={videoUrl} type="video/mp4" />
                        </video>
                      </div>
                    )}

                    {/* Exercise Details */}
                    <div className="p-4">
                      <h5 className="text-lg font-bold text-gray-800 mb-2">
                        {exercise.name}
                      </h5>
                      <p className="text-gray-600 text-sm mb-1">
                        {exercise.sets && `Sets: ${exercise.sets}`}
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        {exercise.reps && `Reps: ${exercise.reps}`}
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
}

export default WorkoutPlan;
