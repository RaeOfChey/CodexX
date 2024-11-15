import React, { useEffect, useState } from 'react';
import { rawgService } from '../service/rawgService';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import { RawgGame } from '../interfaces/RawgGame';

const ProfilePage: React.FC = () => {
  const [games, setGames] = useState<RawgGame[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onSearch = async (searchQuery: string) => {
    // console.log('Search for:', searchQuery);

    try {
      const searchResults = await rawgService.searchGame(searchQuery);
      console.log(searchResults);
      if (!searchResults) {
        setError('No games found.');
      } else {
        setGames(searchResults.results);
      }
    } catch (error) {
      setError('Error searching for game.')
    };
  };

  // Fetch popular games when the page loads
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const fetchedGames = await rawgService.getGames();
        // Ensure that results exists and is an array
        if (fetchedGames && Array.isArray(fetchedGames.results)) {
          setGames(fetchedGames.results);
        } else {
          console.error('Fetched games are not in expected format:', fetchedGames);
          setError('Error: Fetched games are not in the expected format.');
        }
      } catch (error) {
        console.error('Error fetching popular games:', error);
        setError('Error fetching popular games. Please try again later.');
      }
    };

    fetchPopularGames();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} /> 
      <p id="games-title">Games</p>
      <div className="grid is-col-min-16">
        {error ? (
          <p>{error}</p>
        ) : games.length > 0 ? (
          games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              seeMoreButton={game.website}
            />
          ))
        ) : (
          <p id="loading-message">Loading popular games...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
