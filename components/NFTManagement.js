import React, { useState } from 'react';
import NFTCard from './NFTCard';
import '../styles/NFTManagement.css';

const NFTManagement = () => {
  // Use state to manage NFTs
  const [nftItems, setNftItems] = useState([
    { id: 1, title: 'ArtPiece#01', date: '01/09/2024', status: 'Public', value: '2.5', owner: 'Migavel', transactionHistory: ['Purchased by Migavel on 01/09/2024', 'Transferred to Jane Smith on 02/09/2024', 'Received by Migavel on 03/09/2024'], files: ['project.pdf', 'artwork.png'] },
    { id: 2, title: 'Project Report', date: '03/09/2024', status: 'Confidential', value: '0.0', owner: 'John Doe', transactionHistory: ['Created by John Doe on 03/09/2024'], files: ['report.pdf'] },
    { id: 3, title: 'MusicTrack#03', date: '05/09/2024', status: 'Public', value: '1.2', owner: 'Sarah Connor', transactionHistory: ['Created by Sarah Connor on 05/09/2024'], files: ['track.mp3'] },
  ]);

  const handleDelete = (id) => {
    setNftItems(nftItems.filter(nft => nft.id !== id));
  };

  return (
    <div className="nft-management">
      <h2>NFT Management</h2>
      <div className="nft-list">
        {nftItems.map((nft) => (
          <NFTCard key={nft.id} nft={nft} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default NFTManagement;
