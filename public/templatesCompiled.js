(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['results'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <!-- var exampleOneData = {name: 'SDCC Hasbro Maximus', status: 'Sold', image: 'http://thumbs.ebaystatic.com/images/g/M9QAAOSwENxXmmqL/s-l225.jpg', low: 200.00, average: 279.00, high: 300}; -->\n\n<div id='item-row'>\n  <div id='item-image'><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "></div>\n  <div id='information'>\n    <div id='item-name'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n    <div id='item-status'>Status: "
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</div>\n    <div id='table'>\n      <table>\n        <tr>\n          <th></th>\n          <th>Selling Price</th>\n          <th>Profit</th>\n          <th>Profit Margin</th>\n        </tr>\n\n        <tr>\n          <td>Average</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.average || (depth0 != null ? depth0.average : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"average","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.averageProfit || (depth0 != null ? depth0.averageProfit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"averageProfit","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>"
    + alias4(((helper = (helper = helpers.averageProfitPercent || (depth0 != null ? depth0.averageProfitPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"averageProfitPercent","hash":{},"data":data}) : helper)))
    + "%</td>\n        </tr>\n\n        <tr>\n          <td>Lowest</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.lowProfit || (depth0 != null ? depth0.lowProfit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowProfit","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>"
    + alias4(((helper = (helper = helpers.lowProfitPercent || (depth0 != null ? depth0.lowProfitPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowProfitPercent","hash":{},"data":data}) : helper)))
    + "%</td>\n        </tr>\n\n        <tr>\n          <td>Lower Quartile</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.lowerQuartile || (depth0 != null ? depth0.lowerQuartile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerQuartile","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.lowerQuartileProfit || (depth0 != null ? depth0.lowerQuartileProfit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerQuartileProfit","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>"
    + alias4(((helper = (helper = helpers.lowerQuartileProfitPercent || (depth0 != null ? depth0.lowerQuartileProfitPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerQuartileProfitPercent","hash":{},"data":data}) : helper)))
    + "%</td>\n        </tr>\n\n        <tr>\n          <td>Median</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.median || (depth0 != null ? depth0.median : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"median","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.medianProfit || (depth0 != null ? depth0.medianProfit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"medianProfit","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>"
    + alias4(((helper = (helper = helpers.medianProfitPercent || (depth0 != null ? depth0.medianProfitPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"medianProfitPercent","hash":{},"data":data}) : helper)))
    + "%</td>\n        </tr>\n\n        <tr>\n          <td>Upper Quartile</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.upperQuartile || (depth0 != null ? depth0.upperQuartile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upperQuartile","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.upperQuartileProfit || (depth0 != null ? depth0.upperQuartileProfit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upperQuartileProfit","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>"
    + alias4(((helper = (helper = helpers.upperQuartileProfitPercent || (depth0 != null ? depth0.upperQuartileProfitPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upperQuartileProfitPercent","hash":{},"data":data}) : helper)))
    + "%</td>\n        </tr>\n\n        <tr>\n          <td>Highest</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>$"
    + alias4(((helper = (helper = helpers.highProfit || (depth0 != null ? depth0.highProfit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highProfit","hash":{},"data":data}) : helper)))
    + "</td>\n          <td class='cell'>"
    + alias4(((helper = (helper = helpers.highProfitPercent || (depth0 != null ? depth0.highProfitPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"highProfitPercent","hash":{},"data":data}) : helper)))
    + "%</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div id='chart'></div>\n</div>";
},"useData":true});
})();