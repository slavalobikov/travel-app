import React from 'react';

const CountryPage = (props) => {

    console.log('id', props.match.params.id)
    console.log('props', props)


    return (
        <div>
            <div>CountryPage</div>
            <div>CountryPage</div>
            <div>CountryPage</div>
            <div>CountryPage</div>
            <div>CountryPage</div>
            <div>CountryPage</div>
            <div>CountryPage</div>
        </div>
    );
};

export default CountryPage;