(function () {
    var app = angular.module('app', ['pascalprecht.translate']);

    app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations("lv", lv_lang);
        $translateProvider.translations("ru", ru_lang);

        $translateProvider.preferredLanguage("lv");
    }]);

    app.controller('languageCtrl', ['$translate', '$scope', function ($translate, $scope) {
        $scope.selectedLang = $translate.use();

        $scope.changeLanguage = function (langKey) {
            $scope.selectedLang = langKey;
            $translate.use(langKey);
        };

    }]);

})();