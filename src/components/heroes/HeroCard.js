import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const appName = 'react-heores-app'  // For assets on github pages.
    return (
        <div className="card" style={{ maxWidth: 400 }}>
            <div className="row ">
                <div className="col-md-6">
                    {/* Production assets */}

                    {/* <img src={`../${appName}/assets/heroes/${id}.jpg`}
                        className="card-img" alt={superhero}
                    /> */}
                    {/* // Local assets */}
                    <img src={`../assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters.substring(0, 30) + '...'}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`./hero/${id}`}>
                            More data
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
