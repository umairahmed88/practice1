import React from 'react';

import {CardContainer} from './card.styles';

export const Card = props => (
    <CardContainer>
        <img alt='practice' src={`https://robohash.org/${props.practice.id}?set=set2&size=180x180`}/>
        <h2>{props.practice.name}</h2>
        <p>{props.practice.email}</p>
    </CardContainer>
)