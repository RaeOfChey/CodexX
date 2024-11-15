import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { RawgGame } from '../interfaces/RawgGame';

interface WishlistContextType {
  wishlist: RawgGame[];
  addToWishlist: (game: RawgGame) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<RawgGame[]>([]);

  const fetchWishlist = async () => {
    const token = localStorage.getItem('id_token'); // Use 'id_token' here as 
    console.log("Token in localStorage:", token); // Check if token is retrieved
  
  if (!token) {
    console.error("No token found in localStorage");
    return; // Exit the function if there's no token
  }
    try {
      const response = await fetch('/api/library/library-entries', {
        headers: { Authorization: `Bearer ${token}` }, // Use 'token' variable here
      });
      console.log('Authorization Header:', `Bearer ${localStorage.getItem('id_token')}`);
      if (!response.ok) throw new Error('Failed to fetch wishlist from server');
      const data: RawgGame[] = await response.json();
      setWishlist(data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const addToWishlist = async (game: RawgGame) => {
    try {
      // Update local wishlist optimistically
      setWishlist((prevWishlist) => [...prevWishlist, game]);

      const token = localStorage.getItem('id_token');
      const response = await fetch('/api/library/library-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: game.id,
          title: game.name,
          imageUrl: game.background_image,
          // Include any other relevant fields
        }),
      });

      if (!response.ok) throw new Error('Failed to save game to wishlist on server');
    } catch (error) {
      console.error('Error adding game to wishlist:', error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
