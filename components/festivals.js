import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader, Text } from '@chakra-ui/react';

const Gallery = () => {
  const [festivals, setFestivals] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3636/festival', { mode: 'no-cors' })
      .then(response => {
        // Handle the response here (Note: The response will be opaque)
        console.log(response);
        // You won't have access to the response data when using 'no-cors' mode
        // If you require access to the response data, you should configure the server to include the necessary CORS headers
      })
      .catch(error => console.error('Error fetching festivals:', error));
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
      {festivals.map(({ imageUrl, name, address, date }, index) => (
        <div
          key={index}
          style={{ padding: '5px', width: 'calc(33.33% - 10px)', cursor: 'pointer' }}
          onClick={() => handleImageClick(index)}
        >
          <img
            src={imageUrl}
            alt={`Gallery item ${index}`}
            style={{ width: '100%', height: 'auto' }}
          />
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontWeight: 'bold' }}>{name}</div>
            <div>{address}</div>
            <div>{date}</div>
            <div style={{ marginTop: '10px' }}>
              <button style={{ marginRight: '10px' }}>Tickets</button>
              <button>Heart</button>
            </div>
          </div>
        </div>
      ))}
      {selectedImage !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
          onClick={handleCloseModal}
        >
          <img
            src={festivals[selectedImage].imageUrl}
            alt={`Selected gallery item`}
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
