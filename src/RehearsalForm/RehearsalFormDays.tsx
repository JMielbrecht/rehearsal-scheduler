import * as React from 'react';
import { useState, useEffect } from 'react';

type DayOfWeek = 'Su' | 'M' | 'Tu' | 'W' | 'Th' | 'F' | 'S';
const DAYS_OF_WEEK = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S'];

export const RehearsalFormDays = () => {
    const [selectedDays, setSelectedDays] = useState(new Set<DayOfWeek>());

    const isSelected = (day: string) => selectedDays.has(day as DayOfWeek);

    const selectDay = (day: DayOfWeek) => {
        setSelectedDays(prev => new Set(prev.add(day)));
    }

    const unselectDay = (day: DayOfWeek) => {
        setSelectedDays(prev => {
            prev.delete(day);
            return new Set(prev);
        })
    }

    const handleDayClick = (day: string) => {
        if (isSelected(day)) {
            // deselect day of week
            unselectDay(day as DayOfWeek);
        } else {
            // select day of week
            selectDay(day as DayOfWeek);
        }
    }

    useEffect(() => {
        console.log('COME ON', selectedDays)
    }, [selectedDays])

    return (
        <div>
            <strong>What days do you want to rehearse?</strong>
            <div className="grid grid-cols-7 gap-4">
            {DAYS_OF_WEEK.map(day => {
                return (
                    <div className={`${isSelected(day) ? 'bg-accent-foreground text-black' : 'bg-white-50 text-white'} flex size-10 border-2 border-white justify-center hover:bg-white-50`}
                        key={day} 
                        onClick={() => handleDayClick(day)}
                        >
                    {day}
                    </div>
                )
            })}
            </div>
        </div>
    )
}