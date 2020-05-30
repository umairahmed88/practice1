import React from 'react';

import {Card} from '../card/card.component'

import { CardListContainer } from './card-list.styles';

export const CardList = props => (
        <CardListContainer>
        {props.practices.map(practice => (
            <Card key={practice.id} practice={practice}/>
        ))}
    </CardListContainer>
);