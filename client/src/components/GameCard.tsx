import React from 'react';
import { RawgGame } from '../interfaces/RawgGame';
import { concatGenres, concatPlatforms, concatStores } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useEffect, useState } from 'react';
import { rawgService } from '../service/rawgService';

interface GameCardProps {
  game: RawgGame;
  seeMoreButton: string;
}
const GameCard: React.FC<GameCardProps> = ({ game }) => {
const [currentGame, setCurrentGame] = useState(game);
useEffect(() => {
  // Fetch game details using the ID
  const fetchGameDetails = async () => {
    try {
      const response = await rawgService.getGame(game.id);
      setCurrentGame(response);
    } catch (error) {
      console.error('Error fetching game details:', error);
    }
  };
  fetchGameDetails(); 
}, [game.id]);
  const { addToWishlist } = useWishlist();
  console.log('Adding to wishlist:', game);

  return (
    <div className="game-card card has-text-centered cell">
      <div className="card-image">
        <figure className="image">
          <img
            src={currentGame.background_image}
            alt={currentGame.name}
            className="game-card__image"
          />
        </figure>
      </div>
      <div className="card-content">
        <h3 className="game-card__title title is-4">{currentGame.name}</h3>

        <div className="content">
          <p className="tag is-medium">Genres</p>
          <p className="game-card__genres">{concatGenres(currentGame)}</p>

          <p className="tag is-medium">Platforms</p>
          <p className="game-card__platforms">{concatPlatforms(currentGame)}</p>

          <p className="tag is-medium">Stores</p>
          <p className="game-card__platforms">{(currentGame.stores) ? concatStores(game) : "No info available"}</p>

          <div className="game-card__rating tag is-medium">
            Metacritic: {(game.metacritic) ? currentGame.metacritic : "N/A"}
          </div>
        </div>
      </div>

      <footer className="card-footer">
        <Link to={`/game/${game.id}`} className="game-card__link card-footer-item">
          See Details
        </Link>
        <button
          className="add-to-wishlist card-footer-item"
          onClick={() => addToWishlist(game)}
        >
          Add to Wishlist
        </button>
      </footer>

    </div>
  );
};

export default GameCard;
