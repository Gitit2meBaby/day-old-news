import { useState, useEffect } from 'react';

export const Weather = () => {
    const apiKey = '761d68c7eebd48d689071945232507';
    const baseUrl = 'http://api.weatherapi.com/v1';
    const endpoint = '/forecast.json';

    const [data, setData] = useState(null);
    const [locationDisplay, setLocationDisplay] = useState('cairns');
    const [searchClicked, setSearchClicked] = useState(false)

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

    const handleClick = () => {
        setSearchClicked(true)
    }

    const handleSearchClick = () => {
        const searchValue = document.getElementById('locationInput').value
        setLocationDisplay(searchValue);
        setSearchClicked(false)
    }

    return (
        <div className='weather'>
            {data ? (
                !searchClicked ? (
                    <>
                        <h2 onClick={() => handleClick()}>{data.location.name}</h2>
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
