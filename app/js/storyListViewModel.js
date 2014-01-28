function storyListViewModel(storyText){

	var self = this;

	//TODO: View Model is a separate JS file and class as it could encapsulate validations
	// A directive should take care of showing errors with each of these properties

	this.storyText = storyText || "sample text - will b replaced using server returned text";
	this.storyPreview = "";
	this.sourceIndicatorImage = "../resources/images/twitter.png";
	var now = new Date();
	this.dateTimeCreated = now.getDate() + "/" + now.getMonth()+1  + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	this.imageUrl="../resources/images/noImage.png";

	this.transformAndReturnViewModel = function(modelObject){
		var storyListArray = [];
		storyListArray.push(new storyListViewModel("Hello World. Here is Socio Explorer, coolest responsive app"));		
		storyListArray.push(new storyListViewModel("I\'m a mobile application"));		
		storyListArray.push(new storyListViewModel("I\'m a desktop application"));		
		storyListArray.push(new storyListViewModel("Member registration drive being conducted at kannamwar nagar, Vikhroli East."));		
		storyListArray.push(new storyListViewModel(" Hi manishji. I have called school helpline thrice on a saturday and they have responded well each time. V impressed!"));		
		storyListArray.push(new storyListViewModel());		
		storyListArray.push(new storyListViewModel());		
		storyListArray.push(new storyListViewModel());		


		return storyListArray;
	};
}