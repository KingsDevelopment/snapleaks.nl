(function(){
    'use strict';

    angular.module('app')
        .run([ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config(
        [ '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/pages/dashboard');

                $stateProvider
                    .state('pages', {
                        abstract: true,
                        url: '/pages',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('pages.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'pages/dashboard.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('pages.chat', {
                        url: '/chat',
                        templateUrl: 'pages/chat.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-22';
                        }]
                    })
                    .state('pages.email', {
                        url: '/email',
                        templateUrl: 'pages/email.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-12 sidebar-r3 app-mobile';
                        }]
                    })
                    .state('pages.tickets', {
                        url: '/tickets',
                        templateUrl: 'pages/tickets.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('pages.appointments', {
                        url: '/appointments',
                        templateUrl: 'pages/appointments.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('pages.login', {
                        url: '/login',
                        templateUrl: 'pages/login.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'login';
                        }]
                    })
                    .state('pages.sign-up', {
                        url: '/sign-up',
                        templateUrl: 'pages/sign-up.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'login';
                        }]
                    });

                $stateProvider
                    .state('essentials', {
                        abstract: true,
                        url: '/essentials',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('essentials.overview', {
                        url: '/overview',
                        templateUrl: 'essentials/overview.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.buttons', {
                        url: '/buttons',
                        templateUrl: 'essentials/buttons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.icons', {
                        url: '/icons',
                        templateUrl: 'essentials/icons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.expandable', {
                        url: '/expandable',
                        templateUrl: 'essentials/expandable.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.ribbons', {
                        url: '/ribbons',
                        templateUrl: 'essentials/ribbons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.forms', {
                        url: '/forms',
                        templateUrl: 'essentials/forms.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.wizards', {
                        url: '/wizards',
                        templateUrl: 'essentials/wizards.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.tabs', {
                        url: '/tabs',
                        templateUrl: 'essentials/tabs.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.nestable', {
                        url: '/nestable',
                        templateUrl: 'essentials/nestable.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.tree', {
                        url: '/tree',
                        templateUrl: 'essentials/tree.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.modals', {
                        url: '/modals',
                        templateUrl: 'essentials/modals.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.tables', {
                        url: '/tables',
                        templateUrl: 'essentials/tables.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.progress', {
                        url: '/progress',
                        templateUrl: 'essentials/progress.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('essentials.grid', {
                        url: '/grid',
                        templateUrl: 'essentials/grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    });

                $stateProvider
                    .state('media', {
                        abstract: true,
                        url: '/media',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('media.carousel', {
                        url: '/carousel',
                        templateUrl: 'media/carousel.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('media.gallery', {
                        url: '/gallery',
                        templateUrl: 'media/gallery.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    });

                $stateProvider
                    .state('maps', {
                        abstract: true,
                        url: '/maps',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('maps.google-edit', {
                        url: '/google-edit',
                        templateUrl: 'maps/google-edit.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.google-filters', {
                        url: '/google-filters',
                        templateUrl: 'maps/google-filters.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.google-json', {
                        url: '/google-json',
                        templateUrl: 'maps/google-json.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.google-pagination', {
                        url: '/google-pagination',
                        templateUrl: 'maps/google-pagination.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.google-pagination-bottom', {
                        url: '/google-pagination-bottom',
                        templateUrl: 'maps/google-pagination-bottom.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.google-themes', {
                        url: '/google-themes',
                        templateUrl: 'maps/google-themes.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.google-markers', {
                        url: '/google-markers',
                        templateUrl: 'maps/google-markers.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('maps.vector', {
                        url: '/vector',
                        templateUrl: 'maps/vector.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    });

                $stateProvider
                    .state('charts', {
                        abstract: true,
                        url: '/charts',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('charts.flot', {
                        url: '/flot',
                        templateUrl: 'charts/flot.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    })
                    .state('charts.morris', {
                        url: '/morris',
                        templateUrl: 'charts/morris.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    });

                $stateProvider
                    .state('layouts', {
                        abstract: true,
                        url: '/layouts',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('layouts.fluid-1-sidebar', {
                        url: '/fluid-1-sidebar',
                        templateUrl: 'layouts/fluid-1-sidebar.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l2';
                        }]
                    })
                    .state('layouts.fluid-2-sidebars', {
                        url: '/fluid-2-sidebars',
                        templateUrl: 'layouts/fluid-2-sidebars.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l1 sidebar-r2';
                        }]
                    })
                    .state('layouts.fluid-3-sidebars', {
                        url: '/fluid-3-sidebars',
                        templateUrl: 'layouts/fluid-3-sidebars.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l1 sidebar-r-sum-12';
                        }]
                    })
                    .state('layouts.app', {
                        url: '/app',
                        templateUrl: 'layouts/app.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar ls-bottom-footer show-sidebar sidebar-r-sum-11 sidebar-l-sum-12 app-mobile';
                        }]
                    })
                    .state('layouts.fluid-no-sidebar', {
                        url: '/fluid-no-sidebar',
                        templateUrl: 'layouts/fluid-no-sidebar.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar';
                        }]
                    })
                    .state('layouts.footer-simple', {
                        url: '/footer-simple',
                        templateUrl: 'layouts/footer-simple.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar ls-bottom-footer';
                        }]
                    })
                    .state('layouts.sidebar-size-1', {
                        url: '/sidebar-size-1',
                        templateUrl: 'layouts/sidebar-size-1.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l1';
                        }]
                    })
                    .state('layouts.sidebar-size-1-reveal', {
                        url: '/sidebar-size-1-reveal',
                        templateUrl: 'layouts/sidebar-size-1-reveal.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l1 sidebar-r1';
                        }]
                    })
                    .state('layouts.sidebar-size-2', {
                        url: '/sidebar-size-2',
                        templateUrl: 'layouts/sidebar-size-2.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l2';
                        }]
                    })
                    .state('layouts.sidebar-size-3', {
                        url: '/sidebar-size-3',
                        templateUrl: 'layouts/sidebar-size-3.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'ls-top-navbar show-sidebar sidebar-l3';
                        }]
                    })
                    .state('layouts.sidebar-size-percentage', {
                        url: '/sidebar-size-percentage',
                        templateUrl: 'layouts/sidebar-size-percentage.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar hide-sidebar';
                        }]
                    });
            }
        ]
    );

})();