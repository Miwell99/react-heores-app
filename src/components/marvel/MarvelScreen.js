import React from 'react'
import { HeroList } from '../heroes/HeroList'
import { PageTitle } from '../ui/PageTitle'

export const MarvelScreen = () => {
    return (
        <div>
            <PageTitle title="Marvel Heroes" />

            <HeroList publisher='Marvel Comics'></HeroList>
        </div>
    )
}
