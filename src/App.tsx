
import { useState } from 'react'
import './App.css'
import { chatSession } from './services/gemini'

function App() {

  const [age, setAge] = useState<HTMLInputElement>();
  const [sex, setSex] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [goal, setGoal] = useState();
  const [experience, setExperience] = useState();
  const [days, setDays] = useState();
  const [duration, setDuration] = useState();
  const [intensity, setIntensity] = useState();
 
  

  async function generatePlan(){

    const prompt =  "Generate a personalized workout plan of a {age} year {sex} with {weight}kg weight and {height} feet height whose main focus is {type_of_excercise} and has an {experience} experience in workout. Plan the workout for {days} days a week for {duration} min a day with a {intensity} exercise  intensity. "

    //@ts-ignore
    const finalPrompt = prompt.replace("{age}",age).replace('{sex}',sex).replace('{weight}',weight).replace('{height}',height).replace('{type_of_excercise}',goal).replace('{experience}',experience).replace('{days}',days).replace('{duration}',duration).replace('{intensity}',intensity)

    const result = await chatSession.sendMessage(finalPrompt);
    console.log(result.response.text())
  }
  
  

  return (
    <div className='bg-slate-400 h-screen'>
      <input type="text" placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
      <input type="text" placeholder='sex' onChange={(e)=>setSex(e.target.value)}/>
      <input type="text" placeholder='weight' onChange={(e)=>setWeight(e.target.value)} />
      <input type="text" placeholder='height' onChange={(e)=>setHeight(e.target.value)}/>
      <input type="text" placeholder='goal' onChange={(e)=>setGoal(e.target.value)}/>
      <input type="text" placeholder='experience' onChange={(e)=>setExperience(e.target.value)}/>
      <input type="text" placeholder='days' onChange={(e)=>setDays(e.target.value)}/>
      <input type="text" placeholder='duration' onChange={(e)=>setDuration(e.target.value)}/>
      <input type="text" placeholder='intensity' onChange={(e)=>setIntensity(e.target.value)}/>



      <div className='flex justify-center items-center'>
        <button className='border-spacing-2 border-yellow-950 border-2 p-4 rounded-full mt-5' onClick={generatePlan}>Generate</button>
      </div>
    </div>
  )
}

export default App
