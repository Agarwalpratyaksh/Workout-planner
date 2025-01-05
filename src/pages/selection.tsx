import { useEffect, useState } from "react";
`x`;
import { chatSession } from "../services/gemini";
import { Input } from "@/components/ui/input";

function Selection() {
  const [info, setInfo] = useState({
    age: "",
    sex: "",
    weight: "",
    height: "",
    goal: "",
    experience: "",
    days: "",
    duration: "",
    intensity: "",
  });

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  async function generatePlan() {
    const prompt =
      "Generate a personalized workout plan of a {age} year {sex} with {weight}kg weight and {height} feet height whose main focus is {type_of_excercise} and has an {experience} experience in workout. Plan the workout for {days} days a week for {duration} min a day with a {intensity} exercise  intensity. ";

    //@ts-ignore
    const finalPrompt = prompt
      .replace("{age}", age)
      .replace("{sex}", sex)
      .replace("{weight}", weight)
      .replace("{height}", height)
      .replace("{type_of_excercise}", goal)
      .replace("{experience}", experience)
      .replace("{days}", days)
      .replace("{duration}", duration)
      .replace("{intensity}", intensity);

    const result = await chatSession.sendMessage(finalPrompt);
    console.log(result.response.text());
  }

  return (
    <div className="bg-slate-400 h-screen p-5 w-full">
      <div className="mt-2 flex justify-between mb-5">
        <div className="ml-3">Workit</div>
      </div>

      <div className="bg-slate-300 sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 py-2 ">
        <div>
          
        </div>
        <h2 className="text-3xl font-bold">Create a Personalized Workout Plan Just for You</h2>
        <p className="mt-2 text-lg text-gray-500">
        Tell us a bit about yourself, and we’ll craft a workout plan tailored to your goals and preferences!
        </p>
      </div>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 bg-slate-100">
        <div className="mb-10">

        
        <h2 className="text-2xl font-bold">Tell us about yourself</h2>
        <div className="flex justify-between">
          <div className="mt-5 ">
            <h2 className="text-lg font-medium m-2">Age:</h2>
            <Input type="text" name="age" onChange={handleForm} placeholder="Ex: 25"/>
          </div>
          <div className="mt-5 ">
            <h2 className="text-lg font-medium m-2">Height (cm/feet)</h2>
            <Input type="text" name="height" onChange={handleForm} placeholder="Ex: 178 cm"/>
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium m-2">Weight (kg)</h2>
            <Input type="text" name="weight" onChange={handleForm} placeholder="Ex: 78 "/>
          </div>


          
        </div>
        </div>

        <h2 className="text-2xl font-bold mb-10">What are your fitness goals?</h2>
        <div className=" h-40 w-40 ">

        </div>

      </div>

      {/* <input type="text" name='age' placeholder='Enter your age' onChange={handleForm} />
      <input type="text" name='sex' placeholder='Enter your sex' onChange={handleForm}  />
      <input type="text" name='weight' placeholder='Enter your weight' onChange={handleForm}  />
      <input type="text" name='height' placeholder='Enter your height' onChange={handleForm}  />
      <input type="text" name='goal' placeholder='Enter your goal' onChange={handleForm}  />
      <input type="text" name='experience' placeholder='Enter your experience' onChange={handleForm}  />
      <input type="text" name='days' placeholder='Enter your days' onChange={handleForm}  />
      <input type="text" name='duration' placeholder='Enter your duration' onChange={handleForm}  />
      <input type="text" name='intensity' placeholder='Enter your intensity' onChange={handleForm}  />
 */}

      {/* <div className='flex justify-center items-center'>
        <button className='border-spacing-2 border-yellow-950 border-2 p-4 rounded-full mt-5' onClick={generatePlan}>Generate</button>
      </div> */}
    </div>
  );
}

export default Selection;
