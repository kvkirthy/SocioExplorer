mainApp.controller('storyListView', ['$scope','storyListDataAccess', function(scope, storyListDataAccess){
	scope.storyListArray = storyListDataAccess.getStoryListViewModel();
}]);
