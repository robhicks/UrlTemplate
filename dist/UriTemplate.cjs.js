"use strict";var UriTemplate=function(t){return this.uri=new Uri(t),this};UriTemplate.prototype.expand=function(t){var e=this;return this.path=this.uri.path.get(),this.urlTemplateQuery=this.uri.query.getUrlTemplateQuery(),this.path.forEach(function(r,i){var u=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"));u&&e.uri.path.replace(t[u],i)}),this.urlTemplateQuery&&this.urlTemplateQuery.split(",").forEach(function(r){if(t[r]){var i={};i[r]=t[r],e.uri.query.add(i)}}),this.template=this.uri.toString(),this},UriTemplate.prototype.toString=function(){return this.template},module.exports=UriTemplate;