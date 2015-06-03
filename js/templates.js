this["template"] = this["template"] || {};
this["template"]["timeline"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li>\n\n    <div class=\"postheader\">\n      <div class=\"timedate\">\n        <div class=\"date\">"
    + alias3(((helper = (helper = helpers.calendar || (depth0 != null ? depth0.calendar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"calendar","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"time\">"
    + alias3(((helper = (helper = helpers.clock || (depth0 != null ? depth0.clock : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"clock","hash":{},"data":data}) : helper)))
    + "</div>\n      </div>\n      <div class=\"icon\"><i class=\"fa "
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i></div>\n    </div>\n    <div class=\"triangle\"></div>\n    <div class=\"post\">\n      <div class=\"title\"><h2>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n      <div class=\"content\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Timeline</h1>\n\n<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timelines : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});