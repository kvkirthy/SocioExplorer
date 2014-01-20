mainApp.service('storyListDataAccess',['$http',function(http){
	this.getStoryListViewModel = function(){
		var vmObject = new storyListViewModel();
		return vmObject.transformAndReturnViewModel();
	};
}]);



