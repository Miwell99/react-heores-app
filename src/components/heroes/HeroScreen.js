import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();     // Custom Hook from react router
    //const hero = getHeroById(heroeId);
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    // Hero validation.
    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleGoBack = () => {
        if (history.lenght < 2) {
            // Evade logout
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const appName = 'react-heores-app'  // For assets on github pages.

    return (
        <div className="row mt-5">
            <div className="col-4">
                {/* Production assets */}
                {/* <img
                    src={`../${appName}/assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeftBig"
                /> */}
                {/* Local assets */}
                <img src={`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeftBig"
                    alt={superhero} />

            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3 className="text-center">{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>
                <div className="m-3">
                    <h5>Characters</h5>
                    <p>{characters}</p>

                    <button
                        className="btn btn-info"
                        onClick={handleGoBack}>
                        Go Back
                     </button>
                </div>
            </div>
        </div>
    )
}
