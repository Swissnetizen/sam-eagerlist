# sam-eagerlist

This sam-eagerlist is a component to simplyfy creating small lists.

# Dev Setup

```
Fork this repo, rename it, then clone it.

$ npm install	// install bower tasks
$ bower install	// install components
$ grunt build   // build the dependencies

```
# [Demo](http://samarthwiz.github.io/sam-eagerlist/demo/) 
# Usage

```
var list = document.createElement("sam-eagerlist");
document.body.appendChild(list);
//How long the list is.
list.count = 100;
//Data to populate, not neccesary but ideal use-case.
var dataArray = [
  {title: "Mail", count:20},
  [...]
], data;
list.setupItem = function (index) {
  data = dataArray[index];
  this.innerHTML = "<h1>"+data.title+"</h1><p>"+data.count+"</p>"
};
//Renders the list;
list.render();

```
