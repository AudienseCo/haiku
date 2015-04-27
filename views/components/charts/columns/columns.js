// create a new chart
new Highcharts.Chart({
  chart: {
    type: 'column',
    renderTo: 'columns-container'
  },
  title: {
    text: 'Column chart'
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    column : {
      color: '#7F4C95',
      pointPadding: -.2,
      // labels
      dataLabels : {
        enabled : true,
        color: 'white',
        padding: 12,
        y : 38,
        style: {
          textShadow: false,
          fontWeight: 'bold'
        },
        formatter: function (){
          var label = this.y+'';
          if (label < 1000) {
            return label;
          }
          // divide and format
          return (label/1000).toFixed(label % 1000 != 0)+'k';
        }
      }
    }
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Spendings',
      data: [1000, 50000, 15000, 45000, 26000, 29000, 14000, 18000, 27000, 29000, 33000]
    }
  ]
});
