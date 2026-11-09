import React from 'react';
import { RehearsalFormDates } from './RehearsalFormDates';
import RehearsalFormHours from './RehearsalFormHours';

const RehearsalForm = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-8">
        <h1>REHEARSAL CALENDAR FORM HERE</h1>
        {/* Start/End Dates */}
        <h2><strong>When do you want to rehearse?</strong></h2>
        <RehearsalFormDates />
        {/* Rehearsal Times */}
        <h2><strong>What hours do you want to rehearse?</strong></h2>
        <RehearsalFormHours />
        {/* TODO */}
        </div>
    )
}

export default RehearsalForm;