import { useEffect, useState } from "react";
`x`;
import { chatSession } from "../services/gemini";
import { Input } from "@/components/ui/input";
import fitnessGoals from "@/data/fitnessGoals";
import experienceLevels from "@/data/experienceLevels";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useSetRecoilState } from "recoil";
import { planDetails } from "@/services/atoms";
import { Link, useNavigate } from "react-router";
import { Dumbbell } from "lucide-react";

export default function Selection() {
  const [loading, setLoading] = useState(false);
  const setPlan = useSetRecoilState(planDetails);
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    age: "",
    sex: "",
    weight: "",
    height: "",
    goal: "",
    experience: "",
    days: "",
    duration: "",
    intensity: "Medium",
  });

  const handleForm = (name: string, value: string) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  async function generatePlan() {
    setLoading(true);
    const prompt = `
      Generate a personalized workout plan for a {age} year {sex} with {weight}kg weight and {height} feet height whose main focus is {type_of_excercise} and has an {experience} experience in workout. Plan the workout for {days} days a week for {duration} min a day with a {intensity} exercise intensity.
  
      Return the response in the following JSON format exactly:
      {
        "workoutPlan": {
          "client": {
            "age": number,
            "weight": number,
            "height": number,
            "experience": string,
            "goal": string
          },
          "schedule": {
            "daysPerWeek": number,
            "durationPerDay": number
          },
          "weeklyPlan": [
            {
              "day": string,
              "focus": string,
              "exercises": [
                {
                  "name": string,
                  "sets": number,
                  "reps": string
                }
              ]
            }
          ],
          "notes": [string]
        }
      }`;

    const finalPrompt = prompt
      .replace("{age}", info.age)
      .replace("{sex}", info.sex)
      .replace("{weight}", info.weight)
      .replace("{height}", info.height)
      .replace("{type_of_excercise}", info.goal)
      .replace("{experience}", info.experience)
      .replace("{days}", info.days)
      .replace("{duration}", info.duration)
      .replace("{intensity}", info.intensity);

    try {
      const result = await chatSession.sendMessage(finalPrompt);
      const output = result.response.text();
      console.log(output);
      console.log(typeof output);

      // converting output into JSON as the output from gemini is a json in form of string
      const parsedOutput = JSON.parse(output);
      console.log(parsedOutput);

      // Validate that the required properties exist
      if (
        !parsedOutput?.workoutPlan?.weeklyPlan ||
        !parsedOutput?.workoutPlan?.notes
      ) {
        throw new Error("Custom Error :Invalid response format");
      }
      localStorage.setItem("workoutPlan", JSON.stringify(parsedOutput));

      setPlan(parsedOutput);
      setLoading(false);
      setTimeout(() => {
        navigate("/workoutPlan");
      }, 500);
    } catch (error) {
      console.error("Error generating workout plan:", error);
    }
  }

  return (
    <div className=" h-screen w-full">
      <header className="flex justify-between items-center py-5 px-8 bg-white shadow-sm">
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Workit</h1>
          </div>
        </Link>
      </header>

      <div className=" sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 py-2 ">
        <div></div>
        <h2 className="text-3xl font-bold">
          Create a Personalized Workout Plan Just for You
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Tell us a bit about yourself, and we’ll craft a workout plan tailored
          to your goals and preferences!
        </p>
      </div>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 ">
        <div className="mb-10">
          <h2 className="text-2xl font-bold">Tell us about yourself</h2>
          <div className="flex justify-between items-end">
            <div className="mt-5 mr-3 ">
              <h2 className="text-lg font-medium m-2">Age</h2>
              <Input
                type="text"
                name="age"
                onChange={(e) => {
                  handleForm("age", e.target.value);
                }}
                placeholder="Ex: 25"
              />
            </div>
            <div className="mt-5 mr-3">
              <h2 className="text-lg font-medium m-2">Height (cm/feet)</h2>
              <Input
                type="text"
                name="height"
                onChange={(e) => {
                  handleForm("height", e.target.value);
                }}
                placeholder="Ex: 178 cm"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-medium m-2">Weight (kg)</h2>
              <Input
                type="text"
                name="weight"
                onChange={(e) => {
                  handleForm("weight", e.target.value);
                }}
                placeholder="Ex: 78 "
              />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-10  ">
          What are your fitness goals?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 place-items-center lg:place-items-start">
          {fitnessGoals.map((goals) => (
            <div
              key={goals.id}
              className={` h-36 w-72 p-4  border-2 hover:cursor-pointer hover:shadow-md rounded-xl ${
                info.goal == goals.name ? "border-black" : "border-slate-300"
              }`}
              onClick={() => {
                handleForm("goal", goals.name);
              }}
            >
              <h2 className="text-3xl pb-1">{goals.icon}</h2>
              <h2 className="font-bold text-xl pb-1">{goals.name}</h2>
              <p className="text-gray-500 text-sm">{goals.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold my-10  ">
          What is your current fitness level?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 place-items-center lg:place-items-start">
          {experienceLevels.map((exp) => (
            <div
              key={exp.id}
              className={` h-36 w-72 p-4 border-gray-500 border-2 hover:cursor-pointer hover:shadow-md rounded-xl ${
                info.experience == exp.name
                  ? "border-black"
                  : "border-slate-300"
              } `}
              onClick={() => {
                handleForm("experience", exp.name);
              }}
            >
              <h2 className="text-3xl pb-1">{exp.icon}</h2>
              <h2 className="font-bold text-xl pb-1">{exp.name}</h2>
              <p className="text-gray-500 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold my-10  ">
          How intense do you want your workouts to be?
        </h2>
        <div>
          <Slider
            defaultValue={[1]}
            min={0}
            max={2}
            step={1}
            onValueChange={(e) => {
              if (e[0] == 0) {
                handleForm("intensity", "Low");
              } else if (e[0] == 1) {
                handleForm("intensity", "Medium");
              } else {
                handleForm("intensity", "High");
              }

              console.log(e[0]);
            }}
            className="mb-3 cursor-pointer"
          />
          <div className="text-center font-light text-lg">{info.intensity}</div>
        </div>

        <h2 className="text-2xl font-bold my-10  ">
          How often can you work out?
        </h2>
        <div className="flex justify-between items-end ">
          <div className="w-1/2 mr-16">
            <h2 className="text-lg font-medium m-2">Days per Week</h2>
            <Input
              type="text"
              name="days"
              onChange={(e) => {
                handleForm("days", e.target.value);
              }}
              placeholder="Ex: 4"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-lg font-medium m-2">
              Workout Duration (minutes)
            </h2>
            <Input
              type="text"
              name="duration"
              onChange={(e) => {
                handleForm("duration", e.target.value);
              }}
              placeholder="Ex: 90"
            />
          </div>
        </div>

        {/* Submit button */}
        <Button
          className={`my-10 w-full text-xl h-15 font-normal ${
            loading && "cursor-not-allowed opacity-70"
          }  `}
          onClick={generatePlan}
        >
          {loading ? (
            <div
              className="  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            "Generate Plan"
          )}
        </Button>
      </div>
    </div>
  );
}