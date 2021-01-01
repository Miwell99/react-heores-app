import React from 'react'
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ( {history}) => {

    const result = heroes;

    const [formValues, handleInputChange] = useForm({
        searchInput: ''
    });
    const { searchInput } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?=${searchInput}`);
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
                        result.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
