import {Activity} from "../types";

export enum Actividades {
  setActiveId,
  saveActivity,
  deleteActivity,
  restart
}

export type ActivityActions =
  | {type: Actividades.saveActivity; payload: {newActivity: Activity}}
  | {type: Actividades.setActiveId; payload: {id: Activity["id"]}}
  | {type: Actividades.deleteActivity; payload: {id: Activity["id"]}}
  | {type: Actividades.restart;}

  const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
  } 

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: localStorageActivities(),
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === Actividades.saveActivity) {
    let updatedActivities : Activity[] = [];

    if (state.activeId) {
      updatedActivities = state.activities.map( activity =>  activity.id === state.activeId ? action.payload.newActivity : activity)
    }
    else {
      updatedActivities =  [...state.activities, action.payload.newActivity]
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: ''
    };
  }

  if (action.type === Actividades.setActiveId) {
    return {
      ...state,
      activeId: action.payload.id,
      
    };
  }
  if(action.type === Actividades.deleteActivity) {
    return{
      ...state,
      activities: state.activities.filter(activity => activity.id !== action.payload.id)
    }
  }

  if (action.type === Actividades.restart) {
      return {
        activities: [],
        activeId: ""
      }
  }

  return state;
};
