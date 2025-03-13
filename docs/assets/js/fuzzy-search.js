// Fuzzy search implementation
class FuzzySearch {
  constructor(items, options = {}) {
    this.items = items;
    this.keys = options.keys || null;
    this.threshold = options.threshold || 0.6;
  }

  // Calculate Levenshtein distance between two strings
  levenshteinDistance(str1, str2) {
    const track = Array(str2.length + 1).fill(null).map(() => 
      Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
    }
    
    for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
    }
    
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
    
    return track[str2.length][str1.length];
  }

  // Calculate similarity between two strings (0 to 1)
  similarity(str1, str2) {
    if (!str1.length && !str2.length) return 1;
    const maxLength = Math.max(str1.length, str2.length);
    const distance = this.levenshteinDistance(str1, str2);
    return 1 - distance / maxLength;
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
        const score = this.similarity(query, itemString);
        
        if (score >= this.threshold) {
          results.push({
            item: item,
            category: category,
            score: score
          });
        }
      }
    }
    
    // Sort by score in descending order
    return results.sort((a, b) => b.score - a.score);
  }
}

// Initialize search on page load
document.addEventListener('DOMContentLoaded', function() {
  // Make sure searchData is loaded
  if (typeof searchData === 'undefined') {
    console.error('Search data not loaded');
    return;
  }
  
  const fuzzySearch = new FuzzySearch(searchData);
  const searchInput = document.getElementById('globalSearch');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  const resultsBody = document.getElementById('resultsBody');
  const resultCount = document.getElementById('resultCount');
  
  // Function to perform search
  function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
      searchResults.classList.add('d-none');
      return;
    }
    
    const results = fuzzySearch.search(query);
    
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
    
    searchResults.classList.remove('d-none');
  }
  
  // Search on button click
  searchButton.addEventListener('click', performSearch);
  
  // Search on Enter key
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});