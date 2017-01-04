(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/admin-angular/main.js":[function(require,module,exports){
// Angular App
require('./angular/app.js');
require('./angular/config.router.js');
require('./angular/main.js');

// Directives
require('essential/js/angular/main');
require('layout/js/angular/main');
require('sidebar/js/angular/main');
require('maps/js/angular/main');
require('media/js/angular/main');
require('charts/js/angular/main');
},{"./angular/app.js":"/Code/html/themes/themekit/src/js/themes/admin-angular/angular/app.js","./angular/config.router.js":"/Code/html/themes/themekit/src/js/themes/admin-angular/angular/config.router.js","./angular/main.js":"/Code/html/themes/themekit/src/js/themes/admin-angular/angular/main.js","charts/js/angular/main":"/Code/html/themes/themekit/lib/charts/js/angular/main.js","essential/js/angular/main":"/Code/html/themes/themekit/lib/essential/js/angular/main.js","layout/js/angular/main":"/Code/html/themes/themekit/lib/layout/js/angular/main.js","maps/js/angular/main":"/Code/html/themes/themekit/lib/maps/js/angular/main.js","media/js/angular/main":"/Code/html/themes/themekit/lib/media/js/angular/main.js","sidebar/js/angular/main":"/Code/html/themes/themekit/lib/sidebar/js/angular/main.js"}],"/Code/html/themes/themekit/lib/charts/js/angular/_easy-pie.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('easyPie', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkEasyPie();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/charts/js/angular/_flot.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'flot-chart-simple') {
                        el.tkFlotChartSimple();
                    }
                    if (attrs.toggle == 'flot-chart-pie') {
                        el.tkFlotChartPie();
                    }
                    if (attrs.toggle == 'flot-chart-mixed') {
                        el.tkFlotChartMixed();
                    }
                    if (attrs.toggle == 'flot-chart-lines-1') {
                        el.tkFlotChartLines1();
                    }
                    if (attrs.toggle == 'flot-chart-lines-2') {
                        el.tkFlotChartLines2();
                    }
                    if (attrs.toggle == 'flot-chart-lines-3') {
                        el.tkFlotChartLines3();
                    }
                    if (attrs.toggle == 'flot-chart-ordered-bars') {
                        el.tkFlotChartOrderedBars();
                    }
                    if (attrs.toggle == 'flot-chart-donut') {
                        el.tkFlotChartDonut();
                    }
                    if (attrs.toggle == 'flot-chart-stacked-bars') {
                        el.tkFlotChartStackedBars();
                    }
                    if (attrs.toggle == 'flot-chart-horizontal-bars') {
                        el.tkFlotChartHorizontalBars();
                    }
                    if (attrs.toggle == 'flot-chart-live') {
                        el.tkFlotChartLive();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/charts/js/angular/_morris.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'morris-chart-area') {
                        $timeout(function(){
                            el.tkMorrisChartArea();
                        }, 100);
                    }
                    if (attrs.toggle == 'morris-chart-bar') {
                        $timeout(function(){
                            el.tkMorrisChartBar();
                        }, 100);
                    }
                    if (attrs.toggle == 'morris-chart-donut') {
                        $timeout(function(){
                            el.tkMorrisChartDonut();
                        }, 100);
                    }
                    if (attrs.toggle == 'morris-chart-line') {
                        $timeout(function(){
                            el.tkMorrisChartLine();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/charts/js/angular/_sparkline.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('sparklineLine', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSparkLine();
                }
            };
        } ])
        .directive('sparklineBar', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSparkBar();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/charts/js/angular/main.js":[function(require,module,exports){
require('./_easy-pie');
require('./_flot');
require('./_morris');
require('./_sparkline');
},{"./_easy-pie":"/Code/html/themes/themekit/lib/charts/js/angular/_easy-pie.js","./_flot":"/Code/html/themes/themekit/lib/charts/js/angular/_flot.js","./_morris":"/Code/html/themes/themekit/lib/charts/js/angular/_morris.js","./_sparkline":"/Code/html/themes/themekit/lib/charts/js/angular/_sparkline.js"}],"/Code/html/themes/themekit/lib/essential/js/angular/_carousel.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('carousel', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCarousel();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_check-all.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'check-all') {
                        el.tkCheckAll();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'collapse') {
                        el.tkCollapse();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_cover.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('cover', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function () {
                        el.tkCover();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_datepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('datepicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDatePicker();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_daterangepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('daterangepickerReport', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReport();
                }
            };
        } ])
        .directive('daterangepickerReservation', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReservation();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_expandable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('expandable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkExpandable();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_minicolors.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('minicolors', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkMiniColors();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_modal.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'modal') {
                        el.tkModal();
                    }
                    if (attrs.toggle == 'tk-modal-demo') {
                        el.tkModalDemo();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_nestable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('nestable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkNestable();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_panel-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    var randomId = function () {
        /** @return String */
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    angular.module('app')
        .directive('toggle', [ '$compile', function ($compile) {
            return {
                restrict: 'A',
                priority: 100,
                compile: function (el, attrs) {

                    if (attrs.toggle !== 'panel-collapse') return;

                    var body = angular.element('.panel-body', el),
                        id = body.attr('id') || randomId(),
                        collapse = angular.element('<div/>');

                    collapse
                        .attr('id', id)
                        .addClass('collapse' + (el.data('open') ? ' in' : ''))
                        .append(body.clone());

                    body.remove();

                    el.append(collapse);

                    $('.panel-collapse-trigger', el)
                        .attr('data-toggle', 'collapse')
                        .attr('data-target', '#' + id)
                        .collapse({trigger: false})
                        .removeAttr('style');

                    return function (scope, el, attrs) {
                    };

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_select2.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'select2' || attrs.toggle == 'select2-tags') {
                        el.tkSelect2();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_selectpicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('selectpicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSelectPicker();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_slider.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slider', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.slider == 'default') {
                        el.tkSlider();
                    }

                    if (attrs.slider == 'formatter') {
                        el.tkSliderFormatter();
                    }

                }
            };
        } ]);

    angular.module('app')
        .directive('onSlide', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    el.tkSliderUpdate();

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_summernote.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('summernote', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSummernote();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_tables.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'data-table') {
                        el.tkDataTable();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_tabs.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tab') {
                        el.click(function(e){
                            e.preventDefault();
                        });
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_touchspin.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'touch-spin') {
                        el.tkTouchSpin();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_tree.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tree') {
                        el.tkFancyTree();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/_wizard.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'wizard') {
                        el.tkWizard();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/essential/js/angular/main.js":[function(require,module,exports){
require('./_panel-collapse');
require('./_carousel');
require('./_check-all');
require('./_collapse');
require('./_cover');
require('./_datepicker');
require('./_daterangepicker');
require('./_expandable');
require('./_minicolors');
require('./_modal');
require('./_nestable');
require('./_select2');
require('./_selectpicker');
require('./_slider');
require('./_summernote');
require('./_touchspin');
require('./_tables');
require('./_tabs');
require('./_tree');
require('./_wizard');
},{"./_carousel":"/Code/html/themes/themekit/lib/essential/js/angular/_carousel.js","./_check-all":"/Code/html/themes/themekit/lib/essential/js/angular/_check-all.js","./_collapse":"/Code/html/themes/themekit/lib/essential/js/angular/_collapse.js","./_cover":"/Code/html/themes/themekit/lib/essential/js/angular/_cover.js","./_datepicker":"/Code/html/themes/themekit/lib/essential/js/angular/_datepicker.js","./_daterangepicker":"/Code/html/themes/themekit/lib/essential/js/angular/_daterangepicker.js","./_expandable":"/Code/html/themes/themekit/lib/essential/js/angular/_expandable.js","./_minicolors":"/Code/html/themes/themekit/lib/essential/js/angular/_minicolors.js","./_modal":"/Code/html/themes/themekit/lib/essential/js/angular/_modal.js","./_nestable":"/Code/html/themes/themekit/lib/essential/js/angular/_nestable.js","./_panel-collapse":"/Code/html/themes/themekit/lib/essential/js/angular/_panel-collapse.js","./_select2":"/Code/html/themes/themekit/lib/essential/js/angular/_select2.js","./_selectpicker":"/Code/html/themes/themekit/lib/essential/js/angular/_selectpicker.js","./_slider":"/Code/html/themes/themekit/lib/essential/js/angular/_slider.js","./_summernote":"/Code/html/themes/themekit/lib/essential/js/angular/_summernote.js","./_tables":"/Code/html/themes/themekit/lib/essential/js/angular/_tables.js","./_tabs":"/Code/html/themes/themekit/lib/essential/js/angular/_tabs.js","./_touchspin":"/Code/html/themes/themekit/lib/essential/js/angular/_touchspin.js","./_tree":"/Code/html/themes/themekit/lib/essential/js/angular/_tree.js","./_wizard":"/Code/html/themes/themekit/lib/essential/js/angular/_wizard.js"}],"/Code/html/themes/themekit/lib/layout/js/angular/_gridalicious.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'gridalicious') {
                        $timeout(function(){
                            el.tkGridalicious();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/layout/js/angular/_isotope.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'isotope') {
                        $timeout(function(){
                            el.tkIsotope();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/layout/js/angular/_parallax.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('parallax', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkParallax();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/layout/js/angular/_scrollable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('scrollable', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable();
                }
            };
        } ])
        .directive('scrollableH', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable({ horizontal: true });
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/layout/js/angular/_sidebar-pc.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'sidebar-size-pc-demo') {
                        el.tkSidebarSizePcDemo();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/layout/js/angular/main.js":[function(require,module,exports){
require('./_scrollable');
require('./_isotope');
require('./_parallax');
require('./_gridalicious');
require('./_sidebar-pc');
},{"./_gridalicious":"/Code/html/themes/themekit/lib/layout/js/angular/_gridalicious.js","./_isotope":"/Code/html/themes/themekit/lib/layout/js/angular/_isotope.js","./_parallax":"/Code/html/themes/themekit/lib/layout/js/angular/_parallax.js","./_scrollable":"/Code/html/themes/themekit/lib/layout/js/angular/_scrollable.js","./_sidebar-pc":"/Code/html/themes/themekit/lib/layout/js/angular/_sidebar-pc.js"}],"/Code/html/themes/themekit/lib/maps/js/angular/_google-maps.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle !== 'google-maps') return;

                    el.tkGoogleMap();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/maps/js/angular/_vector-maps.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'vector-world-map-gdp') {
                        el.tkVectorWorldMapGDP();
                    }
                    if (attrs.toggle == 'vector-world-map-markers') {
                        el.tkVectorWorldMapMarkers();
                    }
                    if (attrs.toggle == 'vector-usa-unemployment') {
                        el.tkVectorUSAUnemployment();
                    }
                    if (attrs.toggle == 'vector-region-selection') {
                        el.tkVectorRegionSelection();
                    }
                    if (attrs.toggle == 'vector-france-elections') {
                        el.tkVectorFranceElections();
                    }
                    if (attrs.toggle == 'vector-random-colors') {
                        el.tkVectorRandomColors();
                    }
                    if (attrs.toggle == 'vector-mall-map') {
                        el.tkVectorMallMap();
                    }
                    if (attrs.toggle == 'vector-projection-map') {
                        el.tkVectorProjectionMap();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/maps/js/angular/main.js":[function(require,module,exports){
require('./_google-maps');
require('./_vector-maps');
},{"./_google-maps":"/Code/html/themes/themekit/lib/maps/js/angular/_google-maps.js","./_vector-maps":"/Code/html/themes/themekit/lib/maps/js/angular/_vector-maps.js"}],"/Code/html/themes/themekit/lib/media/js/angular/_owl.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('owlBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlDefault();
                    }, 200);
                }
            };
        } ])
        .directive('owlMixed', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlMixed();
                    }, 200);
                }
            };
        } ])
        .directive('owlPreview', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlPreview();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/media/js/angular/_slick.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slickBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkSlickDefault();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/media/js/angular/main.js":[function(require,module,exports){
require('./_owl');
require('./_slick');
},{"./_owl":"/Code/html/themes/themekit/lib/media/js/angular/_owl.js","./_slick":"/Code/html/themes/themekit/lib/media/js/angular/_slick.js"}],"/Code/html/themes/themekit/lib/sidebar/js/angular/_sidebar-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'collapse') return;

                    el.tkSidebarCollapse();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/sidebar/js/angular/_sidebar-dropdown.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'dropdown') return;

                    el.tkSidebarDropdown();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/sidebar/js/angular/_sidebar-toggle-bar.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggleBar', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggleBar) {
                        el.tkSidebarToggleBar();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/themekit/lib/sidebar/js/angular/main.js":[function(require,module,exports){
require('./_sidebar-dropdown');
require('./_sidebar-collapse');
require('./_sidebar-toggle-bar');
},{"./_sidebar-collapse":"/Code/html/themes/themekit/lib/sidebar/js/angular/_sidebar-collapse.js","./_sidebar-dropdown":"/Code/html/themes/themekit/lib/sidebar/js/angular/_sidebar-dropdown.js","./_sidebar-toggle-bar":"/Code/html/themes/themekit/lib/sidebar/js/angular/_sidebar-toggle-bar.js"}],"/Code/html/themes/themekit/src/js/themes/admin-angular/angular/app.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.utils',
        'ui.jq'
    ]);

    var app = angular.module('app')
        .config(
        [ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $interpolateProvider.startSymbol('::');
                $interpolateProvider.endSymbol('::');
            }
        ]);

})();
},{}],"/Code/html/themes/themekit/src/js/themes/admin-angular/angular/config.router.js":[function(require,module,exports){
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
},{}],"/Code/html/themes/themekit/src/js/themes/admin-angular/angular/main.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .controller('AppCtrl', [ '$scope', '$state',
            function ($scope, $state) {

                $scope.app = {
                    settings: {
                        htmlClass: ''
                    }
                };

                $scope.$state = $state;

            } ]);

})();
},{}]},{},["./src/js/themes/admin-angular/main.js"]);
