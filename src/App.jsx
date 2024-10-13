import { useState, useEffect } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  // State weather the data is loading
  const [isLoading, setIsLoading] = useState(false);
  // State which will hold data fetched from API
  const [tours, setTours] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resp = await fetch(url);
        const tour = await resp.json();

        setTours(tour);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, []);

  return <div>{console.log(tours)}</div>;
};
export default App;
