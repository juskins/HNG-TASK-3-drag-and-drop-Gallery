import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Images } from './initialImages';
import { useAuth } from './firebase'; // Import the useAuth hook
import SearchBar from './Searchbar';

const ImageGallery = () => {
  const [images, setImages] = useState(Images);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = useAuth(); // Use the useAuth hook to get the authentication status
  console.log(auth.currentUser);

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false when images are loaded
    }, 2000); // Adjust the delay as needed
  }, []);

  const filterImagesByTag = (tag) => {
    return images.filter((image) =>
      image.tags.some((imageTag) => imageTag.toLowerCase().includes(tag.toLowerCase()))
    );
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    if (searchValue.trim() === '') {
      setImages(Images);
    } else {
      setImages(filterImagesByTag(searchValue));
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedImages = [...images];
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);
    setImages(reorderedImages);
  };

  return (
    <div className="gallery">
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Image Gallery App</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <div className="loading-animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      ) : (
        // Conditionally render DragDropContext and Droppable based on authentication status
        
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="image-gallery" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="image-gallery"
                >
                  {/* Display images and allow dragging for authenticated users */}
                  {images.map((image, index) => (
                    <Draggable
                      key={image.id}
                      draggableId={`image-${image.id}`}
                      index={index}
                      isDragDisabled={!auth.currentUser} // Disable dragging for unauthenticated users
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="image-card"
                        >
                          <img src={image.url} alt={`${image.id}`} />
                          <div className="image-tags">
                            <small>Tags: {image.tags.join(' ,')}</small>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        
      )}
    </div>
  );
};

export default ImageGallery;
