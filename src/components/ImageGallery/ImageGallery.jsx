import React, { useState, useEffect, useRef } from 'react';
import { galleryItems } from '../../data/galleryItems';
import './ImageGallery.css';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playerRef = useRef(null);

  // Function to convert YouTube URL to embed URL
  // const getYouTubeEmbedUrl = (url, autoplay = false) => {
  //   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  //   const match = url.match(regExp);
    
  //   if (match && match[2].length === 11) {
  //     return `https://www.youtube.com/embed/${match[2]}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}`;
  //   }
    
  //   return url; 
  // };

  // Extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Auto-play video when it becomes the current slide
  useEffect(() => {
    const currentItem = galleryItems[currentIndex];
    
    if (currentItem.type === "video") {
      setIsVideoPlaying(true);
      
      // Load YouTube IFrame API if not already loaded
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = () => {
          createPlayer();
        };
      } else if (window.YT && playerRef.current) {
        // If API is already loaded, create player immediately
        createPlayer();
      }
    } else {
      setIsVideoPlaying(false);
    }
  }, [currentIndex]);

  const createPlayer = () => {
    const currentItem = galleryItems[currentIndex];
    const videoId = getYouTubeId(currentItem.image);
    
    if (videoId && !playerRef.current) {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          'autoplay': 1,
          'rel': 0,
          'modestbranding': 1,
          'playsinline': 1
        },
        events: {
          'onStateChange': onPlayerStateChange
        }
      });
    }
  };

  const onPlayerStateChange = (event) => {
    // If video ends, move to next slide
    if (event.data === window.YT.PlayerState.ENDED) {
      nextSlide();
    }
  };

  const nextSlide = () => {
    // Stop current video if playing
    if (playerRef.current && playerRef.current.stopVideo) {
      playerRef.current.stopVideo();
      playerRef.current = null;
    }
    
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    // Stop current video if playing
    if (playerRef.current && playerRef.current.stopVideo) {
      playerRef.current.stopVideo();
      playerRef.current = null;
    }
    
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <div className="image-gallery-container">
      <div className="gallery-header">
        <h3 className="gallery-subtitle">Photo & Video Gallery</h3>
      </div>

      {/* Main Gallery Slider */}
      <div className="main-gallery">
        <div className="gallery-card">
          <div className="gallery-image-container">
            {currentItem.type === "video" && isVideoPlaying ? (
              // YouTube Video Player
              <div className="video-container">
                <div id="youtube-player" className="youtube-player"></div>
                <div className="video-controls">
                  <button className="video-control-button" onClick={prevSlide}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="video-control-button" onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <div className="video-title-overlay">
                  <p className="video-subtitle">{currentItem.titleEn}</p>
                </div>
              </div>
            ) : (
              // Image or Video Thumbnail
              <>
                <img 
                  src={currentItem.type === "video" 
                    ? `https://img.youtube.com/vi/${getYouTubeId(currentItem.image)}/maxresdefault.jpg` 
                    : currentItem.image
                  }
                  alt={currentItem.title}
                  className="gallery-main-image"
                />
                <div className="image-overlay" />
                
                {/* Play button for videos */}
                {currentItem.type === "video" && !isVideoPlaying && (
                  <div className="video-play-button-container">
                    <button 
                      className="play-button" 
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <i className="fas fa-play play-icon"></i>
                    </button>
                  </div>
                )}
                
           
                
                {/* Navigation */}
                <button 
                  className="nav-button prev-button"
                  onClick={prevSlide}
                >
                  <i className="fas fa-chevron-left nav-icon"></i>
                </button>
                
                <button 
                  className="nav-button next-button"
                  onClick={nextSlide}
                >
                  <i className="fas fa-chevron-right nav-icon"></i>
                </button>
                
                {/* Title Overlay */}
                <div className="title-overlay">
                  <p className="image-subtitle">{currentItem.titleEn}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="thumbnail-grid">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            className={`thumbnail-card ${index === currentIndex ? 'thumbnail-active' : ''}`}
            onClick={() => {
              if (playerRef.current && playerRef.current.stopVideo) {
                playerRef.current.stopVideo();
                playerRef.current = null;
              }
              setCurrentIndex(index);
            }}
          >
            {/* <div className="thumbnail-image-container"> */}
              <img 
                src={item.type === "video" 
                  ? `https://img.youtube.com/vi/${getYouTubeId(item.image)}/mqdefault.jpg` 
                  : item.image
                }
                alt={item.title}
                className="thumbnail-image"
              />
              <div className="thumbnail-overlay" />
              
              {/* Type indicator */}
              <div className="thumbnail-type-indicator">
                {item.type === "video" ? (
                  <i className="fas fa-video thumbnail-icon"></i>
                ) : (
                  <i className="fas fa-image thumbnail-icon"></i>
                )}
              </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;