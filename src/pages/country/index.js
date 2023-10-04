import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countryInfo, setCountryInfo] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then(res => res.json())
            .then(data => setCountryInfo(data))
    }, [])

    console.log(countryInfo);

    return (
        <div className="container">
            <div className="row">
                {
                    countryInfo.map((country, index) => <div className='col-md-4 my-3' key={index}>
                        <div className="card" >
                            <img className="card-img-top" src={country.flags.svg} style={{ height: "255px" }} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title"> {country.name} </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link href={`/country/country-details/${country.name}`} className="btn btn-primary"> View Details </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Countries;