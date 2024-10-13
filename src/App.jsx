import { useState, useEffect } from 'react';
import Tour from './components/Tour';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  // State weather the data is loading
  const [isLoading, setIsLoading] = useState(true);
  // State for when an error occurs
  const [isError, setIsError] = useState(false);
  // State which will hold data fetched from API
  const [tours, setTours] = useState(null);

  useEffect(() => {
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
    fetchTours();
  }, []);

  if (isLoading) {
    return <h2>Loading data ...</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  return (
    <div>
      <Tour data={tours} />
    </div>
  );
};
export default App;
