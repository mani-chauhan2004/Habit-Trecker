import React, {useEffect, useState} from 'react';

export function SideNavBar({activeState, setActiveState, activeTab, setActiveTab, }){
    
    useEffect(() => {

    const date = new Date();
    const hours = date.getHours();
    let newState;
    if(hours >= 3 && hours < 12){
        newState = "Morning";
    }

    else if(hours >= 12 && hours <= 16){
        newState = "Afternoon";
    }

    else if(hours > 16 && hours <= 20){
        newState = "Evening";
    }

    else{
        newState = "Night";
    }
    
    if(newState !== activeState){
        setActiveState(newState)
    }
    }, [activeState]); 


    return(
        <div className='h-screen w-60 bg-gray-100 flex flex-col items-center'>
            <div className='mt-10 pt-1 pb-1 rounded-md pl-8 pr-8 font-semibold bg-gray-200 text-xl'>HabitSenpai.tool</div>
            <button 
                onClick={() => setActiveTab('Habits')}
                className={`mt-8 pt-1 w-10/12 text-center text-base pb-1 rounded-md pl-8 pr-8 font-semibold bg-gray-200 text-xl ${activeTab==="Habits"? 'bg-blue-400 text-white': 'bg-gray-200'}`}>
                Habits
            </button>
            <button 
                onClick={() => setActiveTab('TimeTab')}
                className={`mt-1 pt-1 w-10/12 text-center text-base pb-1 rounded-md pl-8 pr-8 font-semibold text-xl ${activeTab==="TimeTab"? 'bg-blue-600 text-white': 'bg-gray-200'}`}>
                {activeState}
            </button>

            <button 
                onClick={() => {
                    setActiveTab('QuickTask');
                }}
                className={`mt-7 pt-1 w-10/12 text-center text-base pb-1 rounded-md pl-8 pr-8 font-semibold text-xl ${activeTab==="QuickTask"? 'bg-blue-600 text-white': 'bg-gray-200'}`}>
                Quick Task
            </button>
            

        </div>
    );
}
