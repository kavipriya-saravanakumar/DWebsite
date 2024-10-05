import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NFTMarketplace.css'; // Add your styles here

const NFTMarketplace = ({ nftItems }) => {
  const navigate = useNavigate();

  const handlePurchase = (id) => {
    alert(`You have purchased NFT with ID: ${id}`);
    // Add logic for purchasing the NFT here
  };

  return (
    <div className="nft-marketplace">
      <h2>NFT Marketplace</h2>
      <div className="marketplace-filters">
        <select>
          <option>Category</option>
          {/* Add more categories if needed */}
        </select>
        <select>
          <option>Sort by Price</option>
          {/* Add sorting options if needed */}
        </select>
        <select>
          <option>Sort by Popularity</option>
          {/* Add sorting options if needed */}
        </select>
      </div>
      <div className="nft-grid">
        {nftItems.map((nft) => (
          <div className="nft-card" key={nft.id} onClick={() => navigate(`/nft/${nft.id}`)}>
            <img src={nft.image} alt={nft.title} />
            <h3>{nft.title}</h3>
            <p>{nft.value} ETH</p>
            <button onClick={(e) => { e.stopPropagation(); handlePurchase(nft.id); }}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTMarketplace;
