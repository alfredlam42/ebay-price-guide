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
    + "</div>\n    <div id='item-low'>Low: $"
    + alias4(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data}) : helper)))
    + "</div>\n    <div id='item-average'>Average: $"
    + alias4(((helper = (helper = helpers.average || (depth0 != null ? depth0.average : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"average","hash":{},"data":data}) : helper)))
    + "</div>\n    <div id='item-high'>High: $"
    + alias4(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data}) : helper)))
    + "</div>\n  </div>\n</div>";
},"useData":true});
})();