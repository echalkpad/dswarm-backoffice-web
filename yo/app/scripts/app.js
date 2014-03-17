'use strict';

angular.module('dmpApp', [
    // Angular Modules
    'ngRoute', 'ngResource',
    // AngularUI Modules
    'ui.utils', 'ui.bootstrap', 'ui.bootstrap.tabs', 'ui.bootstrap.modal',
    // 3rd Party
    'ngProgress', 'ngGrid', 'LocalStorageModule', 'gridster'
]);

// jQuery Compatibility with dragdrop
// http://jasonturim.wordpress.com/2013/09/01/angularjs-drag-and-drop/
jQuery.event.props.push('dataTransfer');