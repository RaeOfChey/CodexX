import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import { RawgGame } from '../interfaces/RawgGame';

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<RawgGame[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [__loading, setLoading] = useState<boolean>(true);

  const fetchWishlist = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/library/library-entries', {
        headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch wishlist.');

      const data = await response.json();
      const formattedWishlist = data.map((entry: any) => ({
        id: entry.Game?.id || 0,
        name: entry.Game?.name || 'Untitled',
        genre: entry.Game?.genre || 'Unknown Genre',
        platform: entry.Game?.platform || 'Unknown Platform',
        releaseDate: entry.Game?.releaseDate || '',
        imageUrl: entry.Game?.imageUrl || '',
        website: entry.Game?.website || '', // add other defaults as needed
      }));
      setWishlist(formattedWishlist);
      setError(null);
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      setError('Could not load wishlist.');
    } finally {
      setLoading(false);
    }
  };

  const onSearch = (searchQuery: string) => {
    console.log('Search for:', searchQuery);
    // Filter logic could go here based on searchQuery
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} />
      <h1 id="wishlist-title">My Wishlist</h1>

      <div className="wishlist-grid">
        {error ? (
          <p>{error}</p>
        ) : wishlist.length > 0 ? (
          wishlist.map((game, index) => (
            <GameCard key={index} game={game} seeMoreButton={game.website} />// Pass only `gameId`
          ))
        ) : (
          <p id="loading-message">Your wishlist is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;