---
layout: default
title: Block Lists
---

# Block Lists

This site provides categorized blocklists for security and compliance purposes. Each category contains entities that should be blocked according to organizational policies.

<div class="search-container mb-4">
  <div class="input-group">
    <input type="text" id="globalSearch" class="form-control form-control-lg" placeholder="Search all block lists...">
    <div class="input-group-append">
      <button class="btn btn-primary" type="button" id="searchButton">
        <i class="fas fa-search"></i> Search
      </button>
    </div>
  </div>
  <div id="searchResults" class="mt-3 d-none">
    <h3>Search Results (<span id="resultCount">0</span>)</h3>
    <div class="table-responsive">
      <table class="table table-striped table-hover" id="resultsTable">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody id="resultsBody">
        </tbody>
      </table>
    </div>
  </div>
</div>

## Block Categories

<div class="row">
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Cloud Services</h5>
        <p class="card-text">Various cloud service providers identified as risky.</p>
        <a href="{{ site.baseurl }}/cloud-services.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Companies</h5>
        <p class="card-text">Companies linked to specific nation states of concern.</p>
        <a href="{{ site.baseurl }}/companies.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Email Attachment File Types</h5>
        <p class="card-text">Email attachment filetypes blocked via Microsoft Defender.</p>
        <a href="{{ site.baseurl }}/email-attachment-file-types.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Games</h5>
        <p class="card-text">Apps blocked for various reasons.</p>
        <a href="{{ site.baseurl }}/games.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Network Utilities</h5>
        <p class="card-text">Apps blocked for various reasons.</p>
        <a href="{{ site.baseurl }}/network-utilities.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Peer-2-Peer</h5>
        <p class="card-text">Apps and protocols blocked according to policy.</p>
        <a href="{{ site.baseurl }}/peer-2-peer.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Proxy Bypass</h5>
        <p class="card-text">Apps, services, and protocols blocked.</p>
        <a href="{{ site.baseurl }}/proxy-bypass.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Remote Access</h5>
        <p class="card-text">Apps, services, and protocols blocked.</p>
        <a href="{{ site.baseurl }}/remote-access.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Web Content Filters</h5>
        <p class="card-text">Categories of websites blocked.</p>
        <a href="{{ site.baseurl }}/web-content-filters.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Conferencing Services</h5>
        <p class="card-text">Conferencing services that are blocked.</p>
        <a href="{{ site.baseurl }}/conferencing-services.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card category-card h-100">
      <div class="card-body">
        <h5 class="card-title">Known Unapproved Tools</h5>
        <p class="card-text">Tools that have not been approved for use.</p>
        <a href="{{ site.baseurl }}/known-unapproved-tools.html" class="btn btn-primary">View List</a>
      </div>
    </div>
  </div>
</div>

## Usage

These lists can be used to configure various security tools and policies. Each list is provided in a simple text format with one entry per line.

## Questions

Please reach out for questions about these blocklists or to suggest additions.