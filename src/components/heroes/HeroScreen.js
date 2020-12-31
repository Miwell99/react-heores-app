import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();     // Custom Hook from react router
    const hero = getHeroById(heroeId);

    // hero check.
    if (!hero) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
