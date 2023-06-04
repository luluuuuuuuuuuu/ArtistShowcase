import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TourMapContext = createContext();

const API_KEY = '76aa70471c12c49d7b077d57c21e5248';
const BASE_URL = 'https://rest.bandsintown.com';
const ARTIST_NAME = 'arctic%20monkeys';
const DATE = 'upcoming';
const API_URL = `${BASE_URL}/artists/${ARTIST_NAME}/events?app_id=${API_KEY}&date=${DATE}`;

function TourMapProvider({ children }) {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const response = await axios.get(API_URL);
        setConcerts(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchConcerts();
  }, []);

  return (
    <TourMapContext.Provider value={{ concerts }}>
      {children}
    </TourMapContext.Provider>
  );
}

export { TourMapProvider, TourMapContext };
