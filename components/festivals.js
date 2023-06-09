import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const Gallery = () => {
  const [festivals, setFestivals] = useState([]);
  const [likedFestivals, setLikedFestivals] = useState([]);

  useEffect(() => {
    // Fetch festivals data from the API endpoint
    fetch('https://music-festival-api.herokuapp.com/festival')
      .then(response => response.json())
      .then(data => {
        const festivalsWithLinks = data.map(festival => ({
          ...festival,
          link: festival.website, // Assuming the festival's website URL is available as 'website' property
        }));
        setFestivals(festivalsWithLinks);
      })
      .catch(error => console.log(error));
  }, []);

  const handleLike = (index) => {
    const liked = likedFestivals.includes(index);

    if (liked) {
      // Remove from liked festivals
      setLikedFestivals(likedFestivals.filter((item) => item !== index));
    } else {
      // Add to liked festivals
      setLikedFestivals([...likedFestivals, index]);
    }
  };

  const isLiked = (index) => {
    return likedFestivals.includes(index);
  };

  const redirectToLink = (link) => {
    window.open(link, '_blank'); // Open the festival link in a new tab
  };

  return (
    <div style={{ marginLeft: '3vw' }}>
      <header
        style={{
          fontFamily: 'Audiowide, cursive',
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '20px 0',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        Upcoming Festivals
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
        {festivals.map(({ image, name, address, date, link }, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              width: 'calc(33.33% - 20px)',
              cursor: 'pointer',
            }}
          >
            <img
              src={image}
              alt={`Gallery item ${index}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <div style={{ marginTop: '10px' }}>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#262626',
                }}
              >
                {name}
              </p>
              <p style={{ fontSize: '12px', color: '#999999' }}>
                {address}
              </p>
              <p style={{ fontSize: '12px', color: '#999999' }}>{date}</p>
              <div style={{ marginTop: '10px' }}>
                <button
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#0095f6',
                    padding: '5px 10px',
                    marginRight: '10px',
                    border: '1px solid #0095f6',
                    borderRadius: '5px',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                  onClick={() => redirectToLink(link)}
                >
                  Tickets
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleLike(index)}
                >
                  <FaHeart
                    size={18}
                    color={isLiked(index) ? '#ed4956' : '#999999'}
                    style={{
                      transition: 'color 0.3s',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
