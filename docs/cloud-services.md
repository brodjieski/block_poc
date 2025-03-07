---
layout: default
title: Cloud Services
---

# Cloud Services

Various cloud service providers that have been identified as risky.

## Blocked Services

<div class="table-responsive">
  <input type="text" id="searchInput" class="form-control mb-3" placeholder="Search services...">
  <table class="table table-striped table-hover" id="dataTable">
    <thead>
      <tr>
        <th onclick="sortTable(0)">Service Name <span class="sort-icon">⇵</span></th>
      </tr>
    </thead>
    <tbody>
      <tr><td>cloudservice.org</td></tr>
      <tr><td>cloudservice2.org</td></tr>
      <tr><td>cloudservice3.org</td></tr>
      <tr><td>cloudservice4.org</td></tr>
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