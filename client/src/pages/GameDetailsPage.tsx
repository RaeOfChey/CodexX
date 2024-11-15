import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { rawgService } from '../service/rawgService';  // Service for fetching data
import GameDetail from '../components/GameDetail'; // UI component that displays game details
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
// import Footer from '../components/Footer';

const GameDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Retrieve game ID from URL
  const [game, setGame] = useState<any | null >(null); // State for storing fetched game data

  // Fetch game details when page loads
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const fetchedGame = await rawgService.getGame(Number(id));  // Fetch game data
        setGame(fetchedGame);  // Update state with fetched data
      } catch (error) {
        console.error('Error fetching game details:', error);  // Handle errors
      }
    };

    fetchGameDetails();
  }, [id]); // Re-fetch data if game ID changes

  return (
    <div>
      <Header />
      <SearchBar onSearch={() => {}} />
      
      {game ? (
        // Pass the fetched game data as a prop to the GameDetail component
        <GameDetail game={game} />
      ) : (
        <p>Loading game details...</p>
      )}
      
      {/* <Footer /> */}
    </div>
  );
};

export default GameDetailsPage;