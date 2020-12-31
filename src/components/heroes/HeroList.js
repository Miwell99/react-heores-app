import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';
import './heroScreen.css';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);
    const first = heroes[0];
    let twoData = [];
    twoData = [...twoData, first, heroes[1]];
    console.log(twoData);

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
