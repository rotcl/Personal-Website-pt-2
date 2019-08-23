import React from 'react';

export default function Personal(props) {
    var summary;
    if (props.summary === "") {
        summary = null;
    } else {
        summary = <p className='section-summary'>{props.summary}</p>;
    }
    return (
        <div>
            <h1 className='title is-3 center'>
                <a href={props.url}>{props.name}</a>
            </h1>
            <div className='center'>
            <span className='head'>
                <a className='button' href={`mailto:${props.email}`}>{props.email}</a>
            </span>
            <span className='head'>
                <a className='button' href={`tel:${props.phone}`}>{props.phone}</a>
            </span> 
            </div>
            {summary}
        </div>
    )
}
