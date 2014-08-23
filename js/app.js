(function () {
    var app = angular.module('myApp', ['pascalprecht.translate']);

    app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations("en", {
            foo: "bar"
        });

        $translateProvider.translations("lv", {
            foo: "bars"
        });

        $translateProvider.preferredLanguage("lv");

    }]);

})();