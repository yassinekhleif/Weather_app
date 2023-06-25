import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.example.com/weather'); // Replace with the actual API endpoint
        setWeatherData(response.data); // Assuming the response contains the weather data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-info">
      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        <div>
          <h2>Weather Information</h2>
          <p>Temperature: {weatherData?.temperature}</p>
          <p>Condition: {weatherData?.condition}</p>
          {/* Add more weather data here */}
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
