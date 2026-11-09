'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const RehearsalFormHours = () => {
    const [startTime, setStartTime] = useState<string>('18:00:00');
    const [endTime, setEndTime] = useState<string>('21:00:00');

    return (
    <div className='flex flex-col gap-6'>
        <div className='flex gap-4'>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='time-from' className='px-1'>
            From
            </Label>
            <Input
            type='time'
            id='time-from'
            step='1'
            defaultValue={startTime}
            onChange={(evt) => {
                setStartTime(evt.target.value);
            }}
            className='bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
            />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='time-to' className='px-1'>
            To
            </Label>
            <Input
            type='time'
            id='time-to'
            step='1'
            defaultValue={endTime}
            onChange={(evt) => {
                setEndTime(evt.target.value);
            }}
            className='bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
            />
        </div>
        </div>
    </div>
    )
}

export default RehearsalFormHours
