// src/components/States.js
import React from 'react';

export function Habits({ habits, completeHabit, deleteHabit }) {
  const completedHabits = habits.filter(habit => habit.completed).length;
  const totalHabits = habits.length;
  const completionPercentage = totalHabits === 0 ? 0 : (completedHabits / totalHabits) * 100;

  return (
    <div className='w-9/12'>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-green-500 h-4 rounded-full mt-4"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      <ul>
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <li
              key={index}
              className="mb-2 p-4 flex justify-between items-center bg-white shadow rounded-lg border border-gray-300"
            >
              <div>
                <h3 className="font-semibold text-lg">{habit.title}</h3>
                <p className="text-gray-600">{habit.description}</p>
                <p className="text-sm text-gray-500"><strong>State:</strong> {habit.state}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeHabit(index)}
                  className={`p-2 rounded-md font-semibold text-white ${habit.completed ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                  {habit.completed ? 'Completed' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="p-2 rounded-md font-semibold text-red-500 border-red-500 border-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className='font-bold text-center mt-60 text-xl'>No habits found</p>
        )}
      </ul>
    </div>
  );
}

export function MorningHabits({ habits, completeHabit, deleteHabit }) {
  const morningHabits = habits.filter(habit => habit.state === 'Morning');
  return (
    <div className='w-9/12'>
      <ul>
        {morningHabits.length > 0 ? (
          morningHabits.map((habit, index) => (
            <li
              key={index}
              className="mb-2 p-4 flex justify-between items-center bg-white shadow rounded-lg border border-gray-300"
            >
              <div>
                <h3 className="font-semibold text-lg">{habit.title}</h3>
                <p className="text-gray-600">{habit.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeHabit(index)}
                  className={`p-2 rounded-md font-semibold text-white ${habit.completed ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                  {habit.completed ? 'Completed' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="p-2 rounded-md font-semibold text-red-500 border-red-500 border-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className='font-bold text-center mt-60 text-xl'>No habits found</p>
        )}
      </ul>
    </div>
  );
}

export function AfternoonHabits({ habits, completeHabit, deleteHabit }) {
  const afternoonHabits = habits.filter(habit => habit.state === 'Afternoon');
  return (
    <div className='w-9/12'>
      <ul>
        {afternoonHabits.length > 0 ? (
          afternoonHabits.map((habit, index) => (
            <li
              key={index}
              className="mb-2 p-4 flex justify-between items-center bg-white shadow rounded-lg border border-gray-300"
            >
              <div>
                <h3 className="font-semibold text-lg">{habit.title}</h3>
                <p className="text-gray-600">{habit.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeHabit(index)}
                  className={`p-2 rounded-md font-semibold text-white ${habit.completed ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                  {habit.completed ? 'Completed' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="p-2 rounded-md font-semibold text-red-500 border-red-500 border-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className='font-bold text-center mt-60 text-xl'>No habits found</p>
        )}
      </ul>
    </div>
  );
}

export function EveningHabits({ habits, completeHabit, deleteHabit }) {
  const eveningHabits = habits.filter(habit => habit.state === 'Evening');
  return (
    <div className='w-9/12'>
      <ul>
        {eveningHabits.length > 0 ? (
          eveningHabits.map((habit, index) => (
            <li
              key={index}
              className="mb-2 p-4 flex justify-between items-center bg-white shadow rounded-lg border border-gray-300"
            >
              <div>
                <h3 className="font-semibold text-lg">{habit.title}</h3>
                <p className="text-gray-600">{habit.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeHabit(index)}
                  className={`p-2 rounded-md font-semibold text-white ${habit.completed ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                  {habit.completed ? 'Completed' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="p-2 rounded-md font-semibold text-red-500 border-red-500 border-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className='font-bold text-center mt-60 text-xl'>No habits found</p>
        )}
      </ul>
    </div>
  );
}

export function NightHabits({ habits, completeHabit, deleteHabit }) {
  const nightHabits = habits.filter(habit => habit.state === 'Night');
  return (
    <div className='w-9/12'>
      <ul>
        {nightHabits.length > 0 ? (
          nightHabits.map((habit, index) => (
            <li
              key={index}
              className="mb-2 p-4 flex justify-between items-center bg-white shadow rounded-lg border border-gray-300"
            >
              <div>
                <h3 className="font-semibold text-lg">{habit.title}</h3>
                <p className="text-gray-600">{habit.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeHabit(index)}
                  className={`p-2 rounded-md font-semibold text-white ${habit.completed ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                  {habit.completed ? 'Completed' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="p-2 rounded-md font-semibold text-red-500 border-red-500 border-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className='font-bold text-center mt-60 text-xl'>No habits found</p>
        )}
      </ul>
    </div>
  );
}

export function QuickTask() {
  return (
    <div className='h-screen w-screen absolute bg-white/30 flex justify-center items-center z-200 '>
      <form className='w-6/12 h-120 bg-gray-200 z-201 flex rounded-xl border-2 border-blue-200 justify-start align-start flex-col p-6 shadow-md shadow-blue400'>
        <h4 className='text-bold text-center'>Add Quick Task</h4>
        <label className='m-1 text-bold'>Title</label>
        <input placeholder='Eg- Take Meeting' type='text' className='w-9/12 p-2 text-blue-500 font-medium border-2 rounded-lg h-8 focus:outline-none focus:border-blue-500'></input>
        <label className='m-1 text-bold'>Description</label>
        <textarea placeholder='Eg- Prepare slides for the meet to display' className='w-9/12 p-2 text-blue-500 font-medium border-2 rounded-lg h-32 focus:outline-none focus:border-blue-500'></textarea>
        <label className='m-1 text-bold'>Timer</label>
        <input placeholder='Add task max to 20 mins' type='number' min={1} max={20} className='w-9/12 p-2 text-blue-500 font-medium border-2 rounded-lg h-8 focus:outline-none focus:border-blue-500'></input>
        <div>
          <input type='submit' value={'Add Quick Task'} className='bg-blue-500 ml-1 rounded-lg m-4 text-center font-bold text-white p-2 w-36'></input>
          <button className='border-2 border-blue-500 ml-1 rounded-lg m-4 mt-0 text-center font-bold text-blue-500 p-2 w-36'>Cancel</button>
        </div>
      </form>
    </div>
  );
}

