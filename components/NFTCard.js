import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NFTManagement.css';

const NFTCard = ({ nft, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${nft.title}?`)) {
      onDelete(nft.id);
    }
  };

  const handleTransfer = () => {
    const newOwner = prompt("Enter the account to transfer to:");
    if (newOwner) {
      alert(`NFT ${nft.title} has been transferred to ${newOwner}`);
      // Here you can implement the actual transfer logic, e.g., updating state or calling an API
    }
  };

  return (
    <div className="nft-card">
      <h3>{nft.title}</h3>
      <p>Date: {nft.date}</p>
      <p>Status: {nft.status}</p>
      <p>Value: {nft.value} ETH</p>
      <div className="nft-actions">
        <Link to={`/nft/${nft.id}`}>
          <button className="details-button">View Details</button>
        </Link>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
        <button className="transfer-button" onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  );
};

export default NFTCard;
