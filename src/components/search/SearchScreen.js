import React, { useMemo } from 'react';
import queryString from 'query-string';

import { heroes } from '../../data/heroes';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { query = '' } = queryString.parse(location.search)    // NPM to manage query params

    const [formValues, handleInputChange] = useForm({
        searchInput: query
    });
    const { searchInput } = formValues;

    // To trigger the search event only after submit
    const result = useMemo(() => getHeroesByName(query), [query])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?query=${searchInput}`);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            name="searchInput"
                            type="text"
                            autoComplete="off"
                            placeholder="Find a hero"
                            className="form-control"
                            value={searchInput}
                            onChange={handleInputChange}
                        />
                        <br></br>
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Find!
                        </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4> Search results</h4>
                    <hr />

                    {
                        // Empty input
                        (query === '') &&
                        <div className="alert alert-info">
                            Waiting for your heroes ...
                        </div>
                    }

                    {
                        // Result not found
                        (query !== '' && result.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no superhero with the name <b>{searchInput}</b> ... for now!
                        </div>
                    }

                    {
                    result.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </div>

        </div >
    )
}
