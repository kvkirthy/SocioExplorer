
var routingApp = angular.module('routesManager', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{controller:'storyListView', templateUrl: 'view/storyListViewTemplate.html'})
	.otherwise({redirectTo:'/'})
	;
}]);

var mainApp = angular.module('socioExplorerMain', ['routesManager']);