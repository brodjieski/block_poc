---
layout: default
title: GitHub Pages Setup
---

# Setting Up GitHub Pages for Block POC

This document provides instructions for setting up GitHub Pages to display the Block POC repository content.

## Step 1: Push to GitHub

If you haven't already, push this repository to GitHub:

```bash
git remote add origin https://github.com/your-username/block_poc.git
git push -u origin main
```

## Step 2: Configure GitHub Pages

1. Go to your repository on GitHub (https://github.com/your-username/block_poc)
2. Click on "Settings" (tab on the top right)
3. Scroll down to the "GitHub Pages" section (or click on "Pages" in the left sidebar)
4. Under "Source", select "main" branch and the "/docs" folder
5. Click "Save"
6. Wait for GitHub to build and publish your site (this usually takes a minute or two)

## Step 3: Access Your Site

After GitHub Pages builds your site, you'll see a message with a URL like:
`Your site is published at https://your-username.github.io/block_poc/`

Click on the link to visit your published site.

## Customizing Your Site

To make changes to your site:

1. Edit the files in the `docs/` folder of your local repository
2. Commit your changes: `git commit -am "Update site"`
3. Push to GitHub: `git push origin main`
4. GitHub will automatically rebuild your site with the changes

## Troubleshooting

If your site doesn't appear correctly:

1. Check the GitHub Pages settings page for any error messages
2. Verify that the docs/_config.yml file has the correct settings
3. Ensure all Jekyll front matter (the --- sections at the top of .md files) is properly formatted
4. Look at GitHub's build logs for any errors (available in the "Actions" tab)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)