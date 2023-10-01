import RyderLogo from './ryder.logo.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ryderCupResults, setRyderCupResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/metaphor-search');

        setRyderCupResults(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-col bg-background h-screen">
      <div className='flex items-center justify-center pt-12'>
        <img src={RyderLogo} alt="logo" />
      </div>
      <div className='flex items-center justify-center pt-6'>
        <p className='text-6xl'>🇺🇸 🇪🇺</p>
      </div>
      <div className='flex items-center justify-center pt-6'>
        <p className='font-master font-bold lg:text-xl md:text-xl text-base'>
          Here are the top recaps of the 2023 Ryder Cup in Rome, Italy.</p>
      </div>
      <div className='flex items-center justify-center pt-6 font-master
      lg:text-lg md:text-lg text-base'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {ryderCupResults.map((result, index) => (
            <a key={index} href={result.url}>{result.title}</a>
          ))}
        </ul>
      )}

      </div>
    </div>
  );
}

export default App;
