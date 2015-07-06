;
(function ($, undefined) {
    function serializeObject() {
        var o = {};
        var a = $(this).serializeArray();

        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    $('[data-ajax-form="true"]').live('submit', function(e) {
        var $this = $(this);
        var data = serializeObject.apply(this);
        var extraData = $this.data();

        if (extraData.ajaxForm && extraData.ajaxForm.data)
            data = $.extend({}, data, extraData.ajaxForm.data);

        $.ajax({
            type: $this.attr('method'),
            url: $this.attr('action'),
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(d) {
                $this.trigger('ajax.submit', [d]);
            }
        });

        e.preventDefault();
    });
})(jQuery);