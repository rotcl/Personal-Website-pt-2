import React from 'react';
import Dates from './Dates'
import Summary from './Summary'

export default function Position(props) {
    return (
        <div className='section'>
            <h4>
                <span className='subtitle is-6'>
                    {props.title}
                </span>
                <span className='subtitle is-6 meta'>
                    {Dates(props.dates)}
                </span>
            </h4>
            {Summary(props.summary)}
        </div>
    );
}
