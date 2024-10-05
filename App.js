import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NFTManagement from './components/NFTManagement';
import NFTDetails from './components/NFTDetails';
import NFTMarketplace from './components/NFTMarketplace'; // Import the Marketplace
import './App.css';

function App() {
  const [nftItems, setNftItems] = useState([
    { id: 1, title: 'ArtPiece#01', date: '01/09/2024', status: 'Public', value: '0.5', owner: 'Migavel', image: 'link-to-your-image-1', transactionHistory: ['Purchased by Migavel on 01/09/2024'], files: ['project.pdf', 'artwork.png'] },
    { id: 2, title: 'MusicTrack#07', date: '03/09/2024', status: 'Public', value: '1.0', owner: 'John Doe', image: 'link-to-your-image-2', transactionHistory: ['Created by John Doe on 03/09/2024'], files: ['track.mp3'] },
    { id: 3, title: 'GameAsset#15', date: '05/09/2024', status: 'Public', value: '0.8', owner: 'Sarah Connor', image: 'link-to-your-image-3', transactionHistory: ['Created by Sarah Connor on 05/09/2024'], files: ['game.png'] },
    { id: 4, title: 'CryptoArt#01', date: '07/09/2024', status: 'Public', value: '0.5', owner: 'Alice', image: 'link-to-your-image-4', transactionHistory: ['Created by Alice on 07/09/2024'], files: ['cryptoart.png'] },
  ]);

  const handleDelete = (id) => {
    setNftItems(nftItems.filter(nft => nft.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NFTManagement nftItems={nftItems} onDelete={handleDelete} />} />
          <Route path="/nft/:id" element={<NFTDetails nftItems={nftItems} onDelete={handleDelete} />} />
          <Route path="/marketplace" element={<NFTMarketplace nftItems={nftItems} />} /> {/* Add the marketplace route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
