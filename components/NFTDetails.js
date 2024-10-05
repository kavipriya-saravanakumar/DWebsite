import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/NFTDetails.css'; // Add your styling here

const NFTDetails = ({ nftItems, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the NFT by id
  const nft = nftItems.find(item => item.id === parseInt(id));

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${nft.title}?`)) {
      onDelete(nft.id);
      navigate('/'); // Redirect to the main NFT management page after deletion
    }
  };

  const handleTransfer = () => {
    const newOwner = prompt("Enter the account to transfer to:");
    if (newOwner) {
      alert(`NFT ${nft.title} has been transferred to ${newOwner}`);
      // Implement actual transfer logic here, like calling an API or updating state
    }
  };

  if (!nft) {
    return <div>NFT not found!</div>;
  }

  return (
    <div className="nft-details">
      <h2>{nft.title} Details</h2>
      <p>Status: {nft.status}</p>
      <h3>Ownership Information</h3>
      <p>Owner: {nft.owner}</p>
      <h3>Transaction History</h3>
      <ul>
        {nft.transactionHistory.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <h3>Associated Files</h3>
      <ul>
        {nft.files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
      <div className="nft-actions">
        <button className="transfer-button" onClick={handleTransfer}>Transfer</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
};

export default NFTDetails;
