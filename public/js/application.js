$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();

    var searchResult = {};
    var data = $(this).serialize()
    var searchParam = $('#item').val();
    var status;

    if ($('#checkbox')[0].checked){
      status = 'Sold';
    } else {
      status = 'On Sale';
    };

    $.ajax({
      method: 'GET',
      data: data,
      url: '/search',
      dataType: 'JSON'
    })

    .done(function(response){
      //the property of the first object is different depending in the completed box is checked
      var items = response[Object.keys(response)[0]].searchResult.item;
      var imageURL = items[0].galleryURL;
      var calculations = getCalculations(items);
      var dataPoints = calculateQuartiles(calculations.prices);

      var templateData = {name: searchParam, status: status, image: imageURL, low: calculations.lowest, average: calculations.average, high: calculations.highest}
      var resultsTemplate = Handlebars.templates.results(templateData);

      $('#results').prepend(resultsTemplate);
      addChart(dataPoints, calculations.prices.length);
    })

  // var exampleOneData = {name: 'SDCC Hasbro Maximus', status: 'Sold', image: 'http://thumbs.ebaystatic.com/images/g/M9QAAOSwENxXmmqL/s-l225.jpg', low: 200.00, average: 279.00, high: 300};
  // var exampleOneTemplateData = Handlebars.templates.results(exampleOneData);

  // $('#results').prepend(exampleOneTemplateData);
  // $('#chart')

  })
})

function getCalculations(items){
  var calculations = {
    lowest: Infinity,
    highest: 0,
    average: 0,
    prices: []
  };

  items.map(function(item){
    var price = parseInt(item.sellingStatus.currentPrice.__content__);

    if (price < calculations.lowest){
      calculations.lowest = price
    }
    if (price > calculations.highest){
      calculations.highest = price
    }
    calculations.prices.push(price);
  })

  var sum = calculations.prices.reduce(add, 0);
  calculations.average = sum / calculations.prices.length;

  return calculations;
}

function add(a, b){
  return a + b;
}

function calculateQuartiles(data){
  //returns an array that contains: lowest value, lower quartile, median, upper quartile, highest value
  data = data.sort(function(a,b){return a - b});

  var lowest = data[0];
  var lowerQuartile = 0;
  var median = findMedian(data);
  var upperQuartile = 0;
  var highest = data[data.length - 1];

  if (data.length % 2 === 0){
    lowerQuartile = findMedian(data.slice(0, data.length / 2));
    upperQuartile = findMedian(data.slice(data.length / 2, data.length));
  } else{
    lowerQuartile = findMedian(data.slice(0, Math.floor(data.length / 2)));
    upperQuartile = findMedian(data.slice(Math.floor(data.length / 2) + 1, data.length));
  }

  return [lowest, lowerQuartile, median, upperQuartile, highest];
}

function findMedian(data){
  if (data.length % 2 === 0){
    return (data[data.length / 2] + data[(data.length / 2) - 1]) / 2;
  } else {
    return data[Math.floor(data.length / 2)];
  }
}

function addChart(dataPoints, dataLength){
  $('#chart').highcharts({
    chart: {
        type: 'boxplot'
    },

    title: {
        text: String(dataLength) + ' Items Calculated'
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: ['1'],
        title: {
            text: 'Item'
        }
    },

    yAxis: {
        title: {
            text: 'Price Range'
        }
    },

    plotOptions: {
        boxplot: {
            fillColor: '#F0F0E0',
            lineWidth: 2,
            medianColor: '#0C5DA5',
            medianWidth: 3,
            stemColor: '#A63400',
            stemDashStyle: 'dot',
            stemWidth: 1,
            whiskerColor: '#3D9200',
            whiskerLength: '20%',
            whiskerWidth: 3
        }
    },

    series: [{
        name: 'Prices',
        data: [dataPoints]
    }]
  })
}