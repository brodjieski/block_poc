#!/usr/bin/env python3
import os
import re
import glob
import json

def read_list_file(filepath):
    """Read a list.txt file and return its contents as a list of strings."""
    with open(filepath, 'r') as f:
        # Strip whitespace and filter out empty lines
        return [line.strip() for line in f.readlines() if line.strip()]

def update_doc_file(category, items):
    """Update the corresponding doc file with the list items."""
    md_file = f"docs/{category}.md"
    html_file = f"docs/{category}.html"
    
    # Choose the file that exists
    doc_file = md_file if os.path.exists(md_file) else html_file if os.path.exists(html_file) else None
    
    if not doc_file:
        print(f"Warning: No documentation file found for {category}")
        return
    
    with open(doc_file, 'r') as f:
        content = f.read()
    
    # Find the table body section
    tbody_pattern = r'<tbody>(.*?)</tbody>'
    tbody_match = re.search(tbody_pattern, content, re.DOTALL)
    
    if tbody_match:
        # Generate new table rows
        new_rows = "\n".join([f'      <tr><td>{item}</td></tr>' for item in items])
        
        # Replace the old table body with the new one
        new_content = content.replace(tbody_match.group(0), f'<tbody>\n{new_rows}\n    </tbody>')
        
        # Write back to the file
        with open(doc_file, 'w') as f:
            f.write(new_content)
        
        print(f"Updated {doc_file} with {len(items)} items")
    else:
        print(f"Warning: Could not find table body in {doc_file}")
    
    return doc_file

def generate_search_data(all_items):
    """Generate a JSON file with all items for search functionality."""
    # Create directory if it doesn't exist
    os.makedirs("docs/assets/js", exist_ok=True)
    
    # Write the search data JSON file
    with open("docs/assets/js/search-data.js", 'w') as f:
        f.write("const searchData = ")
        json.dump(all_items, f, indent=2)
        f.write(";")
    
    print(f"Generated search data with {sum(len(items) for _, items in all_items.items())} total items")

def main():
    """Main function to update all documentation files from list.txt files."""
    # Get all list.txt files
    list_files = glob.glob("*/list.txt")
    
    # Dictionary to store all items by category
    all_items = {}
    
    for list_file in list_files:
        # Extract category from directory name
        category = os.path.dirname(list_file)
        
        # Read list items
        items = read_list_file(list_file)
        
        # Store items for search data
        all_items[category] = items
        
        # Update corresponding doc file
        doc_file = update_doc_file(category, items)
    
    # Generate search data
    generate_search_data(all_items)

if __name__ == "__main__":
    main()