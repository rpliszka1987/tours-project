import { useState, useEffect } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  // State weather the data is loading
  const [isLoading, setIsLoading] = useState(true);
  // State for when an error occurs
  const [isError, setIsError] = useState(false);
  // State which will hold data fetched from API
  const [tours, setTours] = useState([]);

  // Function to remove the unwanted tour.
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Function to fetch the data from the url
  const fetchTours = async () => {
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const tour = await resp.json();

      setTours(tour);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  return (
    <main>
      <Tours data={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
