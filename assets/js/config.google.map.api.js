'use strict';

angular.module('grabApp')
    .config(['uiGmapGoogleMapApiProvider', function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            // key: 'your api key',
            // v: '3.20', // defaults to latest 3.X anyhow
            libraries: 'places'
        });
    }]);
