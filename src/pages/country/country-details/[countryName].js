import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CountryDetails = () => {
    const [country, setCountry] = useState({})
    const countryName = useParams()

    useEffect(() => {
            fetch(`https://restcountries.com/v2/name/${countryName?.countryName}`)
                .then(res => res.json())
                .then(data => setCountry(data))
    }, [country])

    return (
        <div>
            {
                <div>
                    {
                       <h1>{country[0]?.name}</h1> 
                    }
                </div>
            }
        </div>
    );
};

export default CountryDetails;