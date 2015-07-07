;
(function ($, window) {
    "use strict";

    function elque() {
        var instance = this;
        var resizeTimer;

        function sortObj (obj) {
            var arr = [];
            var os = obj.split(',');

            for (var i = 0; i < os.length; i++) {
                var s = os[i].split(':');

                arr.push({
                    'key': s[0].replace(/^\s+|\s+$/g, ''),
                    'value': parseFloat(s[1])
                });
            }

            return arr.sort(function (a, b) { return a.value - b.value; });
        };
        
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === 'style') {
                    var $target = $(mutation.target);
                    var data = $target.data();

                    if (data.elque.width !== $target.outerWidth()) {
                        data.elque.width = $target.outerWidth();
                        $target.data(data);
                        if (instance.query) instance.query($target);
                    }
                }
            });
        });

        function init() {
            instance.allowMultipleStates = false;
            instance.$elements = $('[data-elq]');
            instance.$elements.each(function () {
                var $this = $(this);
                var data = {
                    elque: {
                        queries: sortObj($this.attr('data-elq'))
                    }
                };
                
                $this.data(data);
                observer.observe($this.get(0), { attributes: true, attributeFilter: ["style"] });
            });

            instance.query = function(el) {
                var $this = $(el);
                var data = $this.data('elque');
                var states = [];
                var w = $this.outerWidth();

                for (var i in data.queries) {
                    if (data.queries.hasOwnProperty(i)) {
                        var q = data.queries[i];

                        if (w >= q.value) states.push(q.key);
                    }
                }

                if (!instance.allowMultipleStates && states.length > 0) {
                    states = [states[states.length - 1]];
                }

                if (states.length === 0)
                    $this.removeAttr('data-elq-state');
                else
                    $this.attr({ 'data-elq-state': states.join(' ') });
            };

            instance.refresh = function () {
                instance.$elements.each(function () {
                    instance.query(this);
                });
            };

            instance.refresh();
        }

        $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(instance.refresh, 100);
        });

        init.apply(this);
    }
    
    window.elque = new elque();
})(jQuery, window);