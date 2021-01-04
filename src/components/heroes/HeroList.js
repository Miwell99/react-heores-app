import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';
import './heroScreen.css';

export const HeroList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher(publisher);  // Before useMemo. The component is rendering everytime.
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // Before useMemo. The component is rendering again only if we change the state.

    return (
        <div className="cards-container animate__animated animate__fadeInDown ">
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
