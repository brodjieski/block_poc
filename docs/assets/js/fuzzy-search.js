// Simple search implementation
class SimpleSearch {
  constructor(items) {
    this.items = items;
  }

  // Search for a query among the items
  search(query) {
    if (!query) return [];
    
    query = query.toLowerCase();
    const results = [];
    
    // Iterate through all items
    for (const [category, items] of Object.entries(this.items)) {
      for (const item of items) {
        const itemString = item.toLowerCase();
        
        // Simple substring match
        if (itemString.includes(query)) {
          results.push({
            item: item,
            category: category
          });
        }
      }
    }
    
    // Sort alphabetically
    return results.sort((a, b) => a.item.localeCompare(b.item));
  }
}

// Initialize search on page load
document.addEventListener('DOMContentLoaded', function() {
  // Make sure searchData is loaded
  if (typeof searchData === 'undefined') {
    console.error('Search data not loaded');
    return;
  }
  
  const simpleSearch = new SimpleSearch(searchData);
  const searchInput = document.getElementById('globalSearch');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  const resultsBody = document.getElementById('resultsBody');
  const resultCount = document.getElementById('resultCount');
  const closeSearchResults = document.getElementById('closeSearchResults');
  
  // Function to perform search
  function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
      searchResults.classList.add('d-none');
      return;
    }
    
    const results = simpleSearch.search(query);
    
    // Display results
    resultsBody.innerHTML = '';
    resultCount.textContent = results.length;
    
    if (results.length === 0) {
      searchResults.classList.remove('d-none');
      resultsBody.innerHTML = '<tr><td colspan="2">No results found</td></tr>';
      return;
    }
    
    for (const result of results) {
      const row = document.createElement('tr');
      
      const itemCell = document.createElement('td');
      itemCell.textContent = result.item;
      row.appendChild(itemCell);
      
      const categoryCell = document.createElement('td');
      const categoryLink = document.createElement('a');
      categoryLink.href = `${site.baseurl}/${result.category}.html`;
      categoryLink.textContent = result.category.replace(/-/g, ' ');
      categoryLink.style.textTransform = 'capitalize';
      categoryCell.appendChild(categoryLink);
      row.appendChild(categoryCell);
      
      resultsBody.appendChild(row);
    }
    
    // Show results without moving the page
    searchResults.classList.remove('d-none');
    
    // Prevent form submission which would cause page reload
    return false;
  }
  
  // Close search results
  if (closeSearchResults) {
    closeSearchResults.addEventListener('click', function() {
      searchResults.classList.add('d-none');
    });
  }
  
  // Search on button click
  searchButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    performSearch();
  });
  
  // Search on Enter key
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      performSearch();
    }
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', function(event) {
    if (!searchResults.contains(event.target) && 
        event.target !== searchInput && 
        event.target !== searchButton) {
      searchResults.classList.add('d-none');
    }
  });
});