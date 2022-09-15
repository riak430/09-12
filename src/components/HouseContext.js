import React, {useState, createContext, useEffect} from 'react';


import {housesData} from '../data';

export const HouseContext= createContext();
const HouseContextProvider = (children) => {
    const[houses, setHouses]= useState(housesData);
    const[country, setCountry]= useState('Location (any)');
    const[countries, setCountries]= useState([]);
    const[property, setProperty]= useState('Property type (any)');
    const[properties, setProperties]= useState([]);
    const[une, setUne]= useState('Prise range (any)');
    const[loading, setLoading]= useState(false);

    useEffect(() => {
        const allcountries =houses.map((house)=> {
            return house.duureg
        });

        const uniqueCountries =['Location (any)', ...new Set(allcountries)]

        setCountries(uniqueCountries);


    }, []);
    return(
        <HouseContextProvider value={{
            houses,
            country,
            setCountry,
            countries,
            setCountries,
            property,
            setProperty,
            properties,
            une,
            setUne,
            loading,
        }}>
            {children}
        </HouseContextProvider>
    )
}

export default HouseContextProvider;