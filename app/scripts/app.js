(function () {

	'use strict';

	var dependencies = ['ng-dropdown-multiselect-pair'];

	angular.module('ngDropdownMultiselectPairDemo', dependencies)

		/* @ngInject */
		.controller('ngDropdownMultiselectPairDemoCtrl', function ($scope) {

			$scope.examplemodel = [];
			$scope.$watch('examplemodel', function () { $scope.asd = $scope.examplemodel.id; },true);
			$scope.exampledata = [
				{id: 1, label: 'David', extra: 34 },
				{id: 2, label: 'Jhon', extra: 22 },
				{id: 3, label: 'Danny', extra: 27 }];
			$scope.examplesettings = {
				showCheckAll: false,
				showUncheckAll: false,
				dynamicTitle: true,
				smartButtonMaxItems: 3,
				enableNewItem: true,
				selectionLimit: 2,
				enableEdit: true
			};

			$scope.exampleevents = {
				onNewItemAdd: function (newItemLabel, newItemExtra) {
					var id = $scope.exampledata.length + 1;
					$scope.exampledata.push({id:id, label:newItemLabel, extra:newItemExtra});
					console.log(newItem);
				},
				// onItemEdit: function (id, label, extra) {
				// 	debugger;
				// },
				// onItemRemove: function (id) {
				// 	// debugger;
				// }
			};

		});

})();