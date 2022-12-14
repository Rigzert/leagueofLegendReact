import React from 'react';

import './section.scss';

const Section = props => {
    return (
        <div className={`section ${props.className}`}>
            {props.children}
        </div>
    )
}

const SectionContent = props => {
    
    const bgImage = props.bgImage ? {
        backgroundImage: `url (${props.bgImage})`
    } : {}
    return (
        <div className={`section ${props.className}`}>
            {props.children}
        </div>
    )
}

export {Section, SectionContent};