// create a new chart
new Highcharts.Chart({
  chart: {
    renderTo: 'pie-container',
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  },
  title: {
    text: 'Browser market shares at a specific website, 2014'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }]
});