// src/App.js
import React, { useState, useEffect } from 'react';
import { SideNavBar } from './components/SideNavBar';
import { MorningHabits, QuickTask, AfternoonHabits, EveningHabits, NightHabits, Habits } from './components/States';
import { saveToLocalStorage, getFromLocalStorage } from './components/localStorage';
import InputHabitForm from './components/InputHabit';

function App() {
  const [activeState, setActiveState] = useState('Morning');
  const [activeTab, setActiveTab] = useState('TimeTab');
  const [showModal, setShowModal] = useState(false);
  const [habits, setHabits] = useState([]);

  let navHeaderText;
  activeTab === 'TimeTab' ? (navHeaderText = activeState) : (navHeaderText = activeTab);

  useEffect(() => {
    const ActiveStateSave = getFromLocalStorage('activeState');
    const ActiveTabSave = getFromLocalStorage('activeTab');
    const HabitsSave = getFromLocalStorage('habits');
    if (ActiveStateSave) setActiveState(ActiveStateSave);
    if (ActiveTabSave) setActiveTab(ActiveTabSave);
    if (HabitsSave) setHabits(HabitsSave);
  }, []);

  useEffect(() => {
    saveToLocalStorage('activeState', activeState);
  }, [activeState]);

  useEffect(() => {
    saveToLocalStorage('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    saveToLocalStorage('habits', habits);
  }, [habits]);

  const handleAddHabitClick = () => {
    setShowModal(true);
  };

  const removeModal = () => {
    setShowModal(false);
  };

  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, state: activeState, completed: false }]);
  };

  const completeHabit = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  return (
    <div className='flex justify-left items-center w-9/12'>
      <SideNavBar
        activeState={activeState}
        setActiveState={setActiveState}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className='w-9/12 h-screen flex flex-col'>
        <nav className='h-10 w-9/12 border-b-2 border-blue-500 flex justify-between p-4 pl-6 pr-6 items-center'>
          <h1 className='text-lg font-bold'>{navHeaderText}</h1>
          <button onClick={handleAddHabitClick} className='p-1 pl-2 pr-2 rounded-md font-semibold bg-blue-500 text-white'>
            Add Habits
          </button>
        </nav>
        {activeTab === 'Habits' && <Habits habits={habits} completeHabit={completeHabit} deleteHabit={deleteHabit} />}
        {activeTab === 'TimeTab' && activeState === 'Morning' && <MorningHabits habits={habits} completeHabit={completeHabit} deleteHabit={deleteHabit} />}
        {activeTab === 'TimeTab' && activeState === 'Afternoon' && <AfternoonHabits habits={habits} completeHabit={completeHabit} deleteHabit={deleteHabit} />}
        {activeTab === 'TimeTab' && activeState === 'Evening' && <EveningHabits habits={habits} completeHabit={completeHabit} deleteHabit={deleteHabit} />}
        {activeTab === 'TimeTab' && activeState === 'Night' && <NightHabits habits={habits} completeHabit={completeHabit} deleteHabit={deleteHabit} />}
      </div>
      {activeTab === 'QuickTask' && <QuickTask />}
      {showModal && <InputHabitForm addHabit={addHabit} removeModal={removeModal} />}
    </div>
  );
}

export default App;
