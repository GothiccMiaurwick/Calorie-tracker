import {useState, useEffect, Dispatch} from "react";
import {v4 as uuidv4} from "uuid";
import {categories} from "../data/categories";
import type {Activity} from "../types";
import {ActivityActions, Actividades} from "../reducers/activityReducer";
import {ActivityState} from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;

};

const initialActivity: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

export default function Form({dispatch, state}: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialActivity);
  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]
      setActivity(selectedActivity)
    }
  }, [state.activeId]);

  const habdleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const isNumber = ["category", "calories"].includes(e.target.id);
    setActivity({
      ...activity,
      [e.target.id]: isNumber ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const {name, calories} = activity;
    return name.trim() !== "" && calories > 0;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type: Actividades.saveActivity, payload: {newActivity: activity}});

    setActivity({
      ...initialActivity,
      id: uuidv4(),
    });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={habdleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          className="border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja, Ensalada, ejercicio, Pesas, Etc."
          value={activity.name}
          onChange={habdleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border-slate-300 p-2 rounded-lg"
          placeholder="Calorias. Ej. 100 o 200"
          value={activity.calories}
          onChange={habdleChange}
        />
      </div>
      <input
        type="submit"
        name=""
        id=""
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 rounded-lg text-white font-bold uppercase cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
