$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();

    var searchResult = {};
    var data = $(this).serialize()//.split('&');
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

      var templateData = {name: searchParam, status: status, image: imageURL, low: calculations.lowest, average: calculations.average, high: calculations.highest}
      var resultsTemplate = Handlebars.templates.results(templateData);
      $('#results').prepend(resultsTemplate);
    })

  })

  // var exampleOneData = {name: 'SDCC Hasbro Maximus', status: 'Sold', image: 'http://thumbs.ebaystatic.com/images/g/M9QAAOSwENxXmmqL/s-l225.jpg', low: 200.00, average: 279.00, high: 300};
  // var exampleOneTemplateData = Handlebars.templates.results(exampleOneData);

  // $('#results').prepend(exampleOneTemplateData);

})

function getCalculations(items){
  var calculations = {
    lowest: Infinity,
    highest: 0,
    average: 0,
  };
  var prices = [];

  items.map(function(item){
    var price = parseInt(item.sellingStatus.currentPrice.__content__);

    if (price < calculations.lowest){
      calculations.lowest = price
    }
    if (price > calculations.highest){
      calculations.highest = price
    }
    prices.push(price);
  })

  var sum = prices.reduce(add, 0);
  calculations.average = sum / prices.length;

  return calculations;
}

// function mean(items){
//   var prices = [];
//   items.map(function(item){
//     var price = item.sellingStatus.currentPrice.__content__;
//     prices.push(price)
//   })
//   var sum = prices.reduce(add, 0);
//   var average = sum / prices.length;

//   return average;
// }

// function findHiLo(items){
//   var hiLo = {
//     lowest: Infinity,
//     highest: 0,
//   }

//   items.map(function(item){
//     var price = item.sellingStatus.currentPrice.__content__;
//     if (price < lowest){
//       hiLo.lowest = price;
//     }
//     if (price > highest){
//       hiLo.highest = price;
//     }
//   })

//   return hiLo;
// }

function add(a, b){
  return a + b;
}