import { atom } from "recoil";

export const planDetails:any = atom({
      key:'planDetails',
      default: {
        workoutPlan: {
          client: {},
          schedule: {},
          weeklyPlan: [],
          notes: [],
        },
      },

    })