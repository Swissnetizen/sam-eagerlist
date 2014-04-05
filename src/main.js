/*
   Copyright 2014 Samarth AGARWAL

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
(function(){  

 //An eager list(Repeater)
  xtag.register("sam-eagerlist", {
    extends: "ol",
    methods: {
      render: function (i) {
        if (!this.count || !this.setupItem) return false;
        this.topIndex = i;
        this.renderRows(i || 0, +this.count-1);
      },
      renderRows: function (startIndex, EndIndex) {
        var index = startIndex;
        while (index <= EndIndex) {
          this.renderRow(index);
          index += 1;
        }
        return index;
      },
      renderRow: function (index) {
        //Selects a row before the index row.
        var ref = this.getRow(index+1),
            node = document.createElement("li");
        this.destroyRow(index);
        //Special Case for indexes above the topIndex
        if (index < this.topIndex) {
          if (index < 0) return false;
          ref = this.firstChild;
          this.topIndex = index;
        }
        if (index > +this.count) return false;
        node.dataset.index = index;
        (this.setupItem.bind(node))(index);
        this.insertBefore(node, ref);
        this.rowCount = this.rowCount+1 || 1;
        if (index > this.bottomIndex || !this.bottomIndex) this.bottomIndex = index;
        return true;
      },
      getRow: function (index) {
        return this.querySelector("li[data-index=\""+index+"\"]");
      },
      destroy: function () {
        this.innerHTML = "";
      },
      destroyRows: function (startIndex, EndIndex) {
        var index = startIndex;
        while (index <= EndIndex) {
          this.destroyRow(index);
          index += 1;
        }
        return index;
      },
      destroyRow: function(index) {
        if (this.getRow(index)) this.removeChild(this.getRow(index));
      }
    },
    accessors: {
      //Accesors don't accept function datatypes, can't include setupItem. They also don't accept count data types! Woo!
    }, 
    events: {},
    mixins: ["prepend"]
  });
})();
