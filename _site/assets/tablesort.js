$(document).ready(function() {

  var fancyTableA = $("#sampleTableA").fancyTable({
    sortColumn: 0,
    pagination: true,
    perPage: 50,
    globalSearch: true
  });
  var fancyTableB = $("#sampleTableB").fancyTable({
    sortColumn: 0,
    pagination: false,
    perPage: 50,
    globalSearch: true
  });
});
