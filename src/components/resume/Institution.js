import React from 'react';
import Location from './Location';
import Degree from './Degree';

export default function Institution(props) {
    return (
        <div clsasName='section'>
            <h3>
                <span className='subtitle is-5'>
                    <a href={props.url}>{props.institution}</a>
                </span>
                <span className='subtitle is-6 meta'>
                    {Location(props.location)}
                </span>
            </h3>
            {props.degrees.map(degree => (
                <Degree
                    title={degree.title}
                    dates={degree.dates}
                    courses={degree.courses}
                />
            ))}
        </div>
    )
}
