(function () {
    var now = new Date();
    var month = now.getMonth() + 2;
    var hour = now.getHours();

    if (month > 12) {
        month = 1;
    }

    var body = document.body;
    var classes = 'month-' + month + ' hour-' + hour;

    if (body.className) {
        body.className += ' ' + classes;
    } else {
        body.className = classes;
    }
})();