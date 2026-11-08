import React, { useState } from 'react';
import RehearsalFormDates from './RehearsalFormDates';
import RehearsalFormHours from './RehearsalFormHours';

const RehearsalForm = () => {

    // Start and end date of rehearsal process
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();



    return (
        <div className="flex flex-col items-center">
        <div className="border-1 border-purple-500">
            REHEARSAL CALENDAR FORM HERE
        </div>
        {/* Start/End Dates */}
        <h2>When do you want to rehearse?</h2>
        <RehearsalFormDates />
        {/* Rehearsal Times */}
        <h2>What hours do you want to rehearse?</h2>
        <RehearsalFormHours />
        {/* TODO */}
        </div>
    )
}

export default RehearsalForm;