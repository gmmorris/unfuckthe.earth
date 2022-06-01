$(document).ready(function() {
    window._charts = window._charts || [];
    window._charts.forEach(function(chartToAttach) {
        new Chart($(chartToAttach.selector)[0], chartToAttach.chart);
    })
});