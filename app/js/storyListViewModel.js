function storyListViewModel(){

	var self = this;

	//TODO: View Model is a separate JS file and class as it could encapsulate validations
	// A directive should take care of showing errors with each of these properties

	this.storyText = "sample text - will b replaced using server returned text";
	this.storyPreview = "";
	this.sourceIndicatorImage = "../resources/images/twitter.png";
	this.dateTimeCreated = new Date();
	this.imageUrl="../resources/images/noImage.png";

	this.transformAndReturnViewModel = function(modelObject){
		var storyListArray = [];
		storyListArray.push(new storyListViewModel());		
		storyListArray.push(new storyListViewModel());		
		storyListArray.push(new storyListViewModel());		
		storyListArray.push(new storyListViewModel());		

		return storyListArray;
	};
}