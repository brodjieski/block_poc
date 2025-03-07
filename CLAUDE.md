# CLAUDE.md - Guidelines for Block POC Repository

## Repository Purpose
This repository maintains categorized blocklists for security and compliance purposes. Each directory contains a `list.txt` file with entities to be blocked.

## Commands
- To validate all lists: `find . -name "list.txt" -exec cat {} \; | wc -l`
- To add entries to a list: `echo "new_entry" >> category-name/list.txt`
- To check for duplicates: `sort category-name/list.txt | uniq -d`
- To alphabetize a list: `sort -o category-name/list.txt category-name/list.txt`

## Content Guidelines
- One entry per line in each list.txt file
- Use lowercase for consistency when possible
- Include domain names without protocol (example.com not https://example.com)
- For applications, include full name and common variations
- For file types, include both the extension and description
- Annotate entries with comments when rationale isn't obvious

## Categories
Each category (directory) represents a distinct blocking policy. When adding new entries, ensure they match the category's purpose as described in README.md.