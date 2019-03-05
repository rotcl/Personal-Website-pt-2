import React from 'react';
import Dates from './Dates'
import Courses from './Courses'

export default function Degree(props) {
    return (
        <div className='section'>
            <h4>
                <span className='is-6'>
                    {props.title} 
                </span>
                <span className='is-6 meta grado'>
                    {Dates(props.dates)}
                </span>
            </h4>
            <Courses courses={props.courses}/>
        </div>
    );
}

