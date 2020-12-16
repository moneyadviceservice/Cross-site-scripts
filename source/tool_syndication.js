(function() {
  window.PartnerMAS.ToolSyndication = (function() {
    function ToolSyndication() {}

    ToolSyndication.prototype.findWidgetTargets = function() {
      var allElements, el, i, len, results;
      if (document.all) {
        allElements = document.all;
      } else {
        allElements = document.getElementsByTagName("*");
      }
      results = [];
      for (i = 0, len = allElements.length; i < len; i++) {
        el = allElements[i];
        if (el.className === masConfig.targetSelector) {
          results.push(el);
        }
      }
      return results;
    };

    ToolSyndication.prototype.renderWidgets = function() {
      var i, len, node, ref, results;
      ref = this.findWidgetTargets();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        results.push((function(node) {
          var widget;
          widget = new window.PartnerMAS.Widget(node);
          return widget.render();
        })(node));
      }
      return results;
    };

    return ToolSyndication;
  })();
}).call(this);
