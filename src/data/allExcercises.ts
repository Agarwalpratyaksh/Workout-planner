interface Exercise {
  name: string;
  videoUrl: string;
}

const allExercises: Exercise[] = [
  {
    name: "Push-ups",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/06621201.mp4",
  },
  {
    name: "Pull-ups",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/06521201.mp4",
  },
  {
    name: "Barbell Squats",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00431201.mp4",
  },
  {
    name: "Squats",
    videoUrl: "https://www.mybodycreator.com/content/files/2023/05/25/165_M.mp4",
  },
  {
    name: "Cycling",
    videoUrl: "https://www.mybodycreator.com/content/files/2023/05/25/400_M.mp4",
  },

  {
    name: "Bench Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00251201.mp4",
  },
  {
    name: "Dumbbell Bench Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02891201.mp4",
  },
  {
    name: "Dumbbell Overhead Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/04261201.mp4",
  },
  {
    name: "Dumbbell Incline Bench Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03141201.mp4",
  },
  {
    name: "Incline Bench Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03141201.mp4",
  },

  {
    name: "Deadlifts",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00321201.mp4",
  },
  {
    name: "Plank",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/04651201.mp4",
  },
  {
    name: "Leg Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/07391201.mp4",
  },

  {
    name: "Hammer Curl",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03121201.mp4",
  },
  {
    name: "Tricep Dips",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/34431201.mp4",
  },
  {
    name: "Lunges",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/45641201.mp4",
  },
  {
    name: "Walking Lunges",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/45641201.mp4",
  },
  {
    name: "Bicep Curls",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02851201.mp4",
  },
  {
    name: "Tricep Kickback",
    videoUrl:
      "https://www.mybodycreator.com/content/files/2023/05/25/125_M.mp4",
  },
  {
    name: "Shoulder Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/04051201.mp4",
  },
  {
    name: "Lat Pulldown",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/01501201.mp4",
  },
  {
    name: "Chest Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/12991201.mp4",
  },
  {
    name: "Leg Extension",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/05851201.mp4",
  },
  {
    name: "Leg Curl",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/05991201.mp4",
  },
  {
    name: "Russian Twist",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/06871201.mp4",
  },

  {
    name: "Crunches",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02741201.mp4",
  },
  {
    name: "Calf Raises",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/04171201.mp4",
  },
  {
    name: "Side Plank",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/07151201.mp4",
  },
  {
    name: "Kettlebell Swings",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/05491201.mp4",
  },
  {
    name: "Seated Row",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02391201.mp4",
  },
  {
    name: "Dumbbell Fly",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03081201.mp4",
  },
  {
    name: "Overhead Tricep Extension",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/01941201.mp4",
  },
  {
    name: "Standing Tricep Extension",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/04301201.mp4",
  },
  {
    name: "Lateral Raise",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03341201.mp4",
  },
  {
    name: "Front Raise",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03101201.mp4",
  },

  {
    name: "Box Jump",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/05641201.mp4",
  },
  {
    name: "Treadmill Running",
    videoUrl:
      "https://cdn.pixabay.com/video/2021/06/16/77916-563974349_large.mp4",
  },
  {
    name: "Skipping Rope",
    videoUrl:
      "https://video-previews.elements.envatousercontent.com/379eb44f-c16d-4c3d-857f-c25ee0679a95/watermarked_preview/watermarked_preview.mp4",
  },

  {
    name: "Dumbbell Rows",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02921201.mp4",
  },
  {
    name: "Bent Over Row",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00271201.mp4",
  },
  {
    name: "Bent-Over Row",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00271201.mp4",
  },
  {
    name: "Bent-Over Rows",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00271201.mp4",
  },

  {
    name: "Lever Seated Fly",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/05961201.mp4",
  },

  {
    name: "Goblet Squats",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/17601201.mp4",
  },
  {
    name: "Smith Squats",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/07701201.mp4",
  },

  {
    name: "Arnold Press",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02871201.mp4",
  },
  {
    name: "Cable Triceps Pushdown",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/02411201.mp4",
  },
  {
    name: "Barbell Curl",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00311201.mp4",
  },
  {
    name: "Dumbbell Incline Curl",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/03171201.mp4",
  },
  {
    name: "Preacher Curl",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/00701201.mp4",
  },
  {
    name: "Pulldown",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/01981201.mp4",
  },
  {
    name: "Pec Deck Fly",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/10301201.mp4",
  },
  {
    name: "Hip Thrust",
    videoUrl: "https://www.lyfta.app/video/GymvisualMP4/10601201.mp4",
  },
  {
    name: "Face Pull",
    videoUrl:"https://app.fitnessai.com/exercises/02031201-Cable-Rear-Delt-Row-with-rope-Shoulders.mp4",
  },
];

export default allExercises;
