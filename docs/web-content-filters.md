---
layout: default
title: Web Content Filters
---

# Web Content Filters

Categories of websites.

## Blocked Categories

<div class="table-responsive">
  <input type="text" id="searchInput" class="form-control mb-3" placeholder="Search categories...">
  <table class="table table-striped table-hover" id="dataTable">
    <thead>
      <tr>
        <th onclick="sortTable(0)">Category <span class="sort-icon">⇵</span></th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Adult / Mature Content > Abortion</td></tr>
      <tr><td>Adult / Mature Content > Advocacy Organizations</td></tr>
      <tr><td>Adult / Mature Content > Alcohol</td></tr>
      <tr><td>Adult / Mature Content > Alternative Beliefs</td></tr>
      <tr><td>Adult / Mature Content > Dating</td></tr>
      <tr><td>Adult / Mature Content > Gambling</td></tr>
      <tr><td>Adult / Mature Content > Lingerie and Swimsuit</td></tr>
      <tr><td>Adult / Mature Content > Marijuana</td></tr>
      <tr><td>Adult / Mature Content > Nudity and Risque</td></tr>
      <tr><td>Adult / Mature Content > Other Adult Materials</td></tr>
      <tr><td>Adult / Mature Content > Pornography</td></tr>
      <tr><td>Adult / Mature Content > Sex Education</td></tr>
      <tr><td>Adult / Mature Content > Sports Hunting and War Games</td></tr>
      <tr><td>Adult / Mature Content > Tobacco</td></tr>
      <tr><td>Adult / Mature Content > Weapons (Sales)</td></tr>
      <tr><td>Bandwidth Consuming > Internet Radio and TV</td></tr>
      <tr><td>Bandwidth Consuming > Internet Telephony</td></tr>
      <tr><td>Bandwidth Consuming > Peer-to-peer File Sharing</td></tr>
      <tr><td>Bandwidth Consuming > Streaming Media and Download</td></tr>
      <tr><td>General Interest - Business > Charitable Organizations</td></tr>
      <tr><td>General Interest - Business > General Organizations</td></tr>
      <tr><td>General Interest - Personal > Advertising</td></tr>
      <tr><td>General Interest - Personal > Arts and Culture</td></tr>
      <tr><td>General Interest - Personal > Auction</td></tr>
      <tr><td>General Interest - Personal > Brokerage and Trading</td></tr>
      <tr><td>General Interest - Personal > Child Education</td></tr>
      <tr><td>General Interest - Personal > Digital Postcards</td></tr>
      <tr><td>General Interest - Personal > Domain Parking</td></tr>
      <tr><td>General Interest - Personal > Dynamic Content</td></tr>
      <tr><td>General Interest - Personal > Entertainment</td></tr>
      <tr><td>General Interest - Personal > Folklore</td></tr>
      <tr><td>General Interest - Personal > Games</td></tr>
      <tr><td>General Interest - Personal > Global Religion</td></tr>
      <tr><td>General Interest - Personal > Health and Wellness</td></tr>
      <tr><td>General Interest - Personal > Instant Messaging</td></tr>
      <tr><td>General Interest - Personal > Job Search</td></tr>
      <tr><td>General Interest - Personal > Meaningless Content</td></tr>
      <tr><td>General Interest - Personal > Medicine</td></tr>
      <tr><td>General Interest - Personal > News and Media</td></tr>
      <tr><td>General Interest - Personal > Newsgroups and Message Boards</td></tr>
      <tr><td>General Interest - Personal > Personal Privacy</td></tr>
      <tr><td>General Interest - Personal > Personal Vehicles</td></tr>
      <tr><td>General Interest - Personal > Personal Websites and Blogs</td></tr>
      <tr><td>General Interest - Personal > Political Organizations</td></tr>
      <tr><td>General Interest - Personal > Real Estate</td></tr>
      <tr><td>General Interest - Personal > Restaurant and Dining</td></tr>
      <tr><td>General Interest - Personal > Shopping</td></tr>
      <tr><td>General Interest - Personal > Social Networking</td></tr>
      <tr><td>General Interest - Personal > Society and Lifestyles</td></tr>
      <tr><td>General Interest - Personal > Sports</td></tr>
      <tr><td>General Interest - Personal > Travel</td></tr>
      <tr><td>General Interest - Personal > Web Chat</td></tr>
      <tr><td>General Interest - Personal > Web-based Email</td></tr>
      <tr><td>Potentially Liable > Child Abuse</td></tr>
      <tr><td>Potentially Liable > Discrimination</td></tr>
      <tr><td>Potentially Liable > Drug Abuse</td></tr>
      <tr><td>Potentially Liable > Explicit Violence</td></tr>
      <tr><td>Potentially Liable > Extremist Groups</td></tr>
      <tr><td>Potentially Liable > Hacking</td></tr>
      <tr><td>Potentially Liable > Illegal or Unethical</td></tr>
      <tr><td>Potentially Liable > Plagiarism</td></tr>
      <tr><td>Potentially Liable > Proxy Avoidance</td></tr>
      <tr><td>Security Risk > Dynamic DNS</td></tr>
      <tr><td>Security Risk > Malicious Websites</td></tr>
      <tr><td>Security Risk > Newly Observed Domain</td></tr>
      <tr><td>Security Risk > Newly Registered Domain</td></tr>
      <tr><td>Security Risk > Phishing</td></tr>
      <tr><td>Security Risk > Potentially Illegal Terrorism</td></tr>
      <tr><td>Security Risk > Spam URLs</td></tr>
      <tr><td>Unrated > Not Rated</td></tr>
    </tbody>
  </table>
</div>

<a href="{{ site.baseurl }}/" class="btn btn-primary">Back to Home</a>

<script>
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dataTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

document.getElementById('searchInput').addEventListener('keyup', function() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toLowerCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
</script>