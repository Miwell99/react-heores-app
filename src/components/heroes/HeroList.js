import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';
import './heroScreen.css';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="cards-container">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}

                    />
                ))
            }

        </div>
    )
}
