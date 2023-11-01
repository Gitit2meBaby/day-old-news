import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

export const Weather = () => {
    const apiKey = '761d68c7eebd48d689071945232507';
    const baseUrl = 'http://api.weatherapi.com/v1';
    const endpoint = '/forecast.json';

    const { userLocation, setUserLocation } = useGlobalContext();
    const [data, setData] = useState(null);
    const [locationDisplay, setLocationDisplay] = useState(userLocation || 'cairns');
    const [searchClicked, setSearchClicked] = useState(false)

    //API call (initially hardcoded to Cairns)
    useEffect(() => {
        const queryParams = `q=${locationDisplay}`;
        const apiUrl = `${baseUrl}${endpoint}?key=${apiKey}&${queryParams}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok (${response.status})`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [locationDisplay]);

    // had to delay preload of user state from local storage
    useEffect(() => {
        if (userLocation) {
            setLocationDisplay(userLocation);
        }
    }, [locationDisplay]);

    // Search button click to set new location
    const handleSearchClick = () => {
        const searchValue = document.getElementById('locationInput').value
        setLocationDisplay(searchValue);
        setSearchClicked(false)
        setUserLocation(searchValue)
        localStorage.setItem("location", JSON.stringify(searchValue));
    }

    return (
        <div className='weather'>
            {data ? (
                !searchClicked ? (
                    <>
                        <h2 onClick={() => setSearchClicked(true)}>{data.location.name}</h2>
                        <img src={data.current.condition.icon} alt='todays weather icon' />
                        <p>{`${data.forecast.forecastday[0].day.mintemp_c} °/ ${data.forecast.forecastday[0].day.maxtemp_c} °`}</p>
                    </>
                ) : (
                    <>
                        <input type="text" id='locationInput' placeholder='Enter your location...' />
                        <button className='primary-btn' onClick={() => handleSearchClick()}>Set Location</button>
                    </>
                )
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );

};
