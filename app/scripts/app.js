(function () {

	'use strict';

	var dependencies = ['ng-dropdown-multiselect'];

	angular.module('ngDropdownMultiselectDemo', dependencies)

		/* @ngInject */
		.controller('ngDropdownMultiselectDemoCtrl', function ($scope) {

			$scope.example1model = [];
			$scope.example1data = [
				{id: 1, label: 'David'},
				{id: 2, label: 'Jhon'},
				{id: 3, label: 'Danny'}];

		});

})();