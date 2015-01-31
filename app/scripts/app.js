(function () {

	'use strict';

	var dependencies = ['ng-dropdown-multiselect'];

	angular.module('ngDropdownMultiselectDemo', dependencies)

		/* @ngInject */
		.controller('ngDropdownMultiselectDemoCtrl', function ($scope) {

			$scope.examplemodel = [];
			$scope.exampledata = [
				{id: 1, label: 'David'},
				{id: 2, label: 'Jhon'},
				{id: 3, label: 'Danny'}];
			$scope.examplesettings = {
				showCheckAll: false,
				showUncheckAll: false,
				dynamicTitle: true,
				smartButtonMaxItems: 3,
				enableNewItem: true
			};

			$scope.exampleevents = {
				onNewItemAdd: function (newItem) {
					var id = $scope.exampledata.lenght + 1;
					$scope.exampledata.push({id:id, label:newItem});
				}
			};

		});

})();