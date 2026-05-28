import React, { useState } from "react";
import './../styles/App.css';

const items = [
  "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
  "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
  "Item 11", "Item 12", "Item 13", "Item 14", "Item 15",
  "Item 16", "Item 17", "Item 18", "Item 19", "Item 20",
  "Item 21", "Item 22", "Item 23", "Item 24", "Item 25",
  "Item 26", "Item 27", "Item 28", "Item 29", "Item 30"
];

const App = () => {
  // State to track how many items are currently visible (starts at 10)
  const [visibleCount, setVisibleCount] = useState(10);
  
  // State to manage the loading phase so the UI doesn't freeze
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulate an asynchronous operation using setTimeout as required
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 10);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        
        <ul>
          {items.slice(0, visibleCount).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Only show the 'Load More' button if there are still items left */}
        {visibleCount < items.length && (
          <button 
            onClick={handleLoadMore} 
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        )}
    </div>
  );
}

export default App;