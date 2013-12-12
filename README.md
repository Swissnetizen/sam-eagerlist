# sam-eagerlist

This sam-eagerlist is a component to simplyfy creating small lists.

# Dev Setup

```
Fork this repo, rename it, then clone it.

$ npm install	// install bower tasks
$ bower install	// install components
$ grunt build   // build the dependencies

```

# Links

[X-Tags Docs](http://x-tags.org/docs)

[Guide for creating X-Tag Components](https://github.com/x-tag/core/wiki/Creating-X-Tag-Components)

[Using X-Tag components in your applications](https://github.com/x-tag/core/wiki/Using-our-Web-Components-in-Your-Application)


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
