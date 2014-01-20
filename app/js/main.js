
var routingApp = angular.module('routesManager', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{controller:'storyListView', template: '<div>test</div>'})
	.otherwise({redirectTo:'/'})
	;
}]);

var mainApp = angular.module('socioExplorerMain', ['routesManager']);