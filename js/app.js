(function () {
    var app = angular.module('app', ['pascalprecht.translate']);

    app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations("en", {
            foo: "bar"
        });

        $translateProvider.translations("lv", {
            foo: "bars"
        });

        $translateProvider.translations("ru", {
            foo: "бар"
        });

        $translateProvider.preferredLanguage("lv");

    }]);

    angular.module('app').controller('languageCtrl', ['$translate', '$scope', function ($translate, $scope) {

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };

    }]);

})();