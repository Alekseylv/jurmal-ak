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
        $scope.selectedLang = $translate.use();

        $scope.changeLanguage = function (langKey) {
            $scope.selectedLang = langKey;
            $translate.use(langKey);
        };

    }]);

})();