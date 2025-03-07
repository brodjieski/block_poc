# Block Lists

Things we want blocked.

## Block Categories

- [Cloud Services](cloud-services): Various cloud service providers that we've identified as risky.
- [Companies](companies): Mostly companies linked to specific nation states of concern.
- [Email Attachment File Types](email-attachment-file-types): Email attachment filetypes we block via Microsoft Defender.
- [Games](games): Apps blocked for various reasons.
- [Network Utilities](network-utilities): Apps blocked for various reasons.
- [Peer-2-Peer](peer-2-peer): Apps and protocols blocked according to policy.
- [Proxy Bypass](proxy-bypass): Apps, services, and protocols blocked.
- [Remote Access](remote-access): Apps, services, and protocols blocked.
- [Web Content Filters](web-content-filters): Categories of websites.

## GitHub Pages

This repository is set up to display the block lists using GitHub Pages. The site can be accessed at [https://your-username.github.io/block_poc/](https://your-username.github.io/block_poc/).

### Setup GitHub Pages

1. Go to the repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "main" branch and "/docs" folder
4. Click Save

The site will be automatically built and deployed from the docs folder in the main branch. Detailed setup instructions can be found in [docs/github-pages-setup.md](docs/github-pages-setup.md).

## Repository Structure

- `/docs/` - Contains all GitHub Pages files for the web interface
- Each category folder contains a `list.txt` file with the actual blocked items

## Questions

Please reach out for questions.