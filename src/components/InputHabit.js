
import React, { useState } from 'react';

function InputHabitForm({ addHabit, removeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (element) => {
    element.preventDefault();
    if (title.trim()) {
      addHabit({ title, description });
      setTitle('');
      setDescription('');
      removeModal();
    }
  };

  return (
    <div className='h-screen w-screen absolute bg-white/30 flex justify-center items-center z-200'>
      <form onSubmit={handleSubmit} className='w-6/12 h-120 bg-gray-200 z-201 flex rounded-xl border-2 border-blue-200 justify-start align-start flex-col p-6 shadow-md shadow-blue400'>
        <h4 className='text-bold text-center'>Add Quick Task</h4>
        <label className='m-1 text-bold'>Title</label>
        <input
          placeholder='Eg- Take Meeting'
          type='text'
          value={title}
          onChange={(element) => setTitle(element.target.value)}
          className='w-9/12 p-2 text-blue-500 font-medium border-2 rounded-lg h-8 focus:outline-none focus:border-blue-500'
        />
        <label className='m-1 text-bold'>Description</label>
        <textarea
          placeholder='Eg- Prepare slides for the meet to display'
          value={description}
          onChange={(element) => setDescription(element.target.value)}
          className='w-9/12 p-2 text-blue-500 font-medium border-2 rounded-lg h-32 focus:outline-none focus:border-blue-500'
        />
        <div>
          <input type='submit' value={'Add Habit'} className='bg-blue-500 ml-1 rounded-lg m-4 text-center font-bold text-white p-2 w-36'/>
          <button type='button' onClick={removeModal} className='border-2 border-blue-500 ml-1 rounded-lg m-4 mt-0 text-center font-bold text-blue-500 p-2 w-36'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputHabitForm;
