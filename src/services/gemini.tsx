import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = "my api key";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Give the output in json formatt with all the information needed for a perfect workout for a week\nThe workout plan should include exercises only and only from the following list:\nIncline Bench Press\nPush-ups\nFlat Dumbbell Press\nCable Crossovers\nPec Deck Flyes\nDeadlift\nPull-ups\nLat Pulldowns\nSeated Cable Rows\nBent-over Rows\nOverhead Press \nLateral Raises\nFront Raises\nFace Pulls\nUpright Rows\nSquats\nLunges\nLeg Press\nHamstring Curls\nCalf Raises\nBicep Curls\nConcentration Curls\nChin-ups\nTricep Pushdowns\nOverhead Tricep Extensions\nSkullcrushers\nDips\nCrunches\nLeg Raises\nPlanks\nRussian Twists\nBicycle Crunches\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a personalized workout plan of a 20 year men with 70kg weight and 5'7 feet height whose main focus is muscle gain and has an intermediate experience in workout. Plan the workout for 6 days a week for 60 min a day with a hight exercise  intensity. "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"workoutPlan\": {\n    \"client\": {\n      \"age\": 20,\n      \"weight\": 70,\n      \"height\": \"5'7\\\"\",\n      \"experience\": \"intermediate\",\n      \"goal\": \"muscle gain\"\n    },\n    \"schedule\": {\n      \"daysPerWeek\": 6,\n      \"durationPerDay\": 60 \n    },\n    \"weeklyPlan\": [\n      {\n        \"day\": \"Monday\",\n        \"focus\": \"Chest & Triceps\",\n        \"exercises\": [\n          {\"name\": \"Incline Bench Press\", \"sets\": 4, \"reps\": 8-12},\n          {\"name\": \"Flat Dumbbell Press\", \"sets\": 3, \"reps\": 10-15},\n          {\"name\": \"Cable Crossovers\", \"sets\": 3, \"reps\": 12-15},\n          {\"name\": \"Tricep Pushdowns\", \"sets\": 4, \"reps\": 10-15},\n          {\"name\": \"Overhead Tricep Extensions\", \"sets\": 3, \"reps\": 12-15},\n          {\"name\": \"Skullcrushers\", \"sets\": 3, \"reps\": 10-15}\n        ]\n      },\n      {\n        \"day\": \"Tuesday\",\n        \"focus\": \"Back & Biceps\",\n        \"exercises\": [\n          {\"name\": \"Pull-ups\", \"sets\": 4, \"reps\": as many as possible (AMRAP)},\n          {\"name\": \"Lat Pulldowns\", \"sets\": 3, \"reps\": 10-15},\n          {\"name\": \"Seated Cable Rows\", \"sets\": 3, \"reps\": 12-15},\n          {\"name\": \"Bicep Curls\", \"sets\": 4, \"reps\": 8-12},\n          {\"name\": \"Concentration Curls\", \"sets\": 3, \"reps\": 10-15},          \n          {\"name\": \"Face Pulls\", \"sets\": 3, \"reps\": 15-20}\n\n        ]\n      },\n      {\n        \"day\": \"Wednesday\",\n        \"focus\": \"Legs & Shoulders\",\n        \"exercises\": [\n          {\"name\": \"Squats\", \"sets\": 4, \"reps\": 8-12},\n          {\"name\": \"Lunges\", \"sets\": 3, \"reps\": 10-15 per leg},\n          {\"name\": \"Leg Press\", \"sets\": 3, \"reps\": 12-15},\n          {\"name\": \"Overhead Press\", \"sets\": 4, \"reps\": 8-12},\n          {\"name\": \"Lateral Raises\", \"sets\": 3, \"reps\": 12-15},\n          {\"name\": \"Front Raises\", \"sets\": 3, \"reps\": 12-15}\n        ]\n      },\n      {\n        \"day\": \"Thursday\",\n        \"focus\": \"Rest or Active Recovery\",\n        \"exercises\": [\n          {\"name\": \"Light cardio (e.g., walking, cycling)\", \"duration\": 30}\n        ]\n      },\n      {\n        \"day\": \"Friday\",\n        \"focus\": \"Chest & Triceps (lighter)\",\n        \"exercises\": [\n          {\"name\": \"Push-ups\", \"sets\": 3, \"reps\": AMRAP},\n          {\"name\": \"Pec Deck Flyes\", \"sets\": 3, \"reps\": 15-20},\n          {\"name\": \"Dips\", \"sets\": 3, \"reps\": AMRAP},\n          {\"name\": \"Tricep Pushdowns\", \"sets\": 3, \"reps\": 15-20}\n\n        ]\n      },\n      {\n        \"day\": \"Saturday\",\n        \"focus\": \"Back & Biceps (lighter)\",\n        \"exercises\": [\n          {\"name\": \"Bent-over Rows\", \"sets\": 3, \"reps\": 12-15},\n          {\"name\": \"Chin-ups\", \"sets\": 3, \"reps\": AMRAP},\n          {\"name\": \"Bicep Curls\", \"sets\": 3, \"reps\": 15-20}\n        ]\n      },\n      {\n        \"day\": \"Sunday\",\n        \"focus\": \"Rest or Active Recovery\",\n        \"exercises\": [\n          {\"name\": \"Light cardio (e.g., swimming, yoga)\", \"duration\": 30}\n        ]\n      }\n    ],\n    \"notes\": [\n      \"Warm up before each workout (5-10 minutes of light cardio and dynamic stretching).\",\n      \"Cool down after each workout (5-10 minutes of static stretching).\",\n      \"Listen to your body and adjust the weight and reps as needed.\",\n      \"Focus on proper form to prevent injuries.\",\n      \"Increase weight or reps progressively over time.\",\n      \"Ensure adequate rest and nutrition to support muscle growth.\"\n    ]\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
   
  
  
   