import React from 'react'
import { HeroList } from '../heroes/HeroList'
import { PageTitle } from '../ui/PageTitle'

export const DcScreen = () => {
    return (
        <div>
            <PageTitle title="DC Screen" />

            <HeroList publisher='DC Comics'></HeroList>
        </div>
    )
}
