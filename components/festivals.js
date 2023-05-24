import React, { useState } from 'react';
import { Box, Button, Grid, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader, Text } from '@chakra-ui/react';


const images = [
  {
    imageUrl: 'https://picsum.photos/id/1018/300/300',
    name: 'Festival A',
    address: '123 Main St, Anytown USA',
    date: 'June 1-3, 2023',
  },
  {
    imageUrl: 'https://picsum.photos/id/1015/300/300',
    name: 'Festival B',
    address: '456 Maple Ave, Anytown USA',
    date: 'July 4-6, 2023',
  },
  {
    imageUrl: 'https://picsum.photos/id/1019/300/300',
    name: 'Festival C',
    address: '789 Elm St, Anytown USA',
    date: 'August 9-11, 2023',
  },
  {
    imageUrl: 'https://picsum.photos/id/1025/300/300',
    name: 'Festival D',
    address: '321 Oak St, Anytown USA',
    date: 'September 15-17, 2023',
  },
  {
    imageUrl: 'https://picsum.photos/id/1020/300/300',
    name: 'Festival E',
    address: '789 Maple Ave, Anytown USA',
    date: 'October 20-22, 2023',
  },
  {
    imageUrl: 'https://picsum.photos/id/1033/300/300',
    name: 'Festival F',
    address: '456 Oak St, Anytown USA',
    date: 'November 25-27, 2023',
  }
  
  // Add more festivals here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
      {images.map(({ imageUrl, name, address, date }, index) => (
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
            src={images[selectedImage].imageUrl}
            alt={`Selected gallery item`}
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
