(function () {
    var app = angular.module('GCPLApp');
    app.directive('myDate', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.on('click', function () {
                    var TDate = $(document.getElementsByName('ToDate'));
                    angular.element($(TDate)).triggerHandler('input');
                    $(element).datepicker('destroy');
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy',
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                            TDate.val('');
                            angular.element($(TDate)).triggerHandler('input');
                        }
                    });
                });
                element.on('mouseenter', function () {
                    var TDate = $(document.getElementsByName('ToDate'));
                    angular.element($(TDate)).triggerHandler('input');
                    $(element).datepicker('destroy');
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy',
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                            TDate.val('');
                            angular.element($(TDate)).triggerHandler('input');
                        }
                    });
                });
            }
        };
    });
}());
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(function () {
    var app = angular.module('GCPLApp');
    app.directive('myDateTime', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.on('click', function () {
                    var TDate = $(document.getElementsByName('ToDate'));
                    angular.element($(TDate)).triggerHandler('input');
                    $(element).datepicker('destroy');
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy ' + getTime(new Date()),
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                            TDate.val('');
                            angular.element($(TDate)).triggerHandler('input');
                        }
                    });
                });
                element.on('mouseenter', function () {
                    var TDate = $(document.getElementsByName('ToDate'));
                    angular.element($(TDate)).triggerHandler('input');
                    $(element).datepicker('destroy');
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy ' + getTime(new Date()),
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                            TDate.val('');
                            angular.element($(TDate)).triggerHandler('input');
                        }
                    });
                });
            }
        };
    });
}());
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
(function () {
    var app = angular.module('GCPLApp');
    app.directive('myDateMin', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, element, attrs) {
                element.on('click', function () {
                    $(element).datepicker('destroy');
                    var FDate = $(document.getElementsByName('FromDate')).val();
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        minDate: FDate.toString(),
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy',
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                        }
                    });
                });
                element.on('mouseenter', function () {
                    $(element).datepicker('destroy');
                    var FDate = $(document.getElementsByName('FromDate')).val();
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        minDate: FDate.toString(),
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy',
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                        }
                    });
                });
                //dateFormat: 'dd-mm-yy ' + getTime(new Date())
                //element.on('mouseleave', function () {
                //    element.css('background-color', 'red');
                //});                  
            }
        };
    });
}());
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
(function () {
    var app = angular.module('GCPLApp');
    app.directive('myDateTimeMin', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, element, attrs) {
                element.on('click', function () {
                    $(element).datepicker('destroy');
                    var FDate = $(document.getElementsByName('FromDate')).val();
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        minDate: FDate.toString(),
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy ' + getTime(new Date()),
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                        }
                    });

                });
                element.on('mouseenter', function () {
                    $(element).datepicker('destroy');
                    var FDate = $(document.getElementsByName('FromDate')).val();
                    $(element).datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        minDate: FDate.toString(),
                        numberOfMonth: 1,
                        dateFormat: 'mm/dd/yy ' + getTime(new Date()),
                        onSelect: function (date) {
                            angular.element($(element)).triggerHandler('input');
                        }
                    });
                });
                //dateFormat: 'dd-mm-yy ' + getTime(new Date())
                //element.on('mouseleave', function () {
                //    element.css('background-color', 'red');
                //});                    
            }
        };
    });
}());
