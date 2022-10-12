$(document).ready(function() {

    var fancyTableA = $("#sampleTableA").fancyTable({
        sortColumn: 0,
        pagination: true,
        perPage: 50,
        globalSearch: true,
        sortOrder: 'descending'
    });

    var fancyTableB = $("#sampleTableB").fancyTable({
        sortColumn: 0,
        pagination: false,
        perPage: 50,
        globalSearch: true,
        sortOrder: 'descending'

    });

    var fancyTableC = $("#sampleTableC").fancyTable({
        sortColumn: 0,
        pagination: true,
        perPage: 6,
        globalSearch: true,
        sortOrder: 'descending'
    });



});
