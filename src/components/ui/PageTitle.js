import React from 'react';
import PropTypes from 'prop-types';

export const PageTitle = ({title}) => {
    return (
        <>
            <h1 className="text-center p-2">{title}</h1>
        </>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
}
