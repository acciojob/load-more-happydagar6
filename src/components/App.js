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
  // 1. Initial state MUST be 0 to pass the "expected 0" Cypress test
  const [visibleCount, setVisibleCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    // 2. Prevent multiple rapid clicks from messing up the count (Fixes Error 2)
    if (isLoading) return; 
    
    setIsLoading(true);

    // 3. Update state asynchronously (Fixes async test requirement)
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 10);
      setIsLoading(false);
    }, 200); 
  };

  return (
    <div>
        {/* Do not remove the main div */}
        
        <ul>
          {items.slice(0, visibleCount).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* 4. Keep the button always rendered and text exactly as "Load More" to fix Error 3 */}
        <button onClick={handleLoadMore}>
          Load More
        </button>
    </div>
  );
}

export default App;