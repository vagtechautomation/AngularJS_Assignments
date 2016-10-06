(function (){
	
	'use strict';
	angular.module("LunchChecker",[])
		.controller("LunchCheckerController",function($scope){
	
			$scope.checkFunction = function(){
				try{
					var arr = $scope.lunchMenu.split(",");
					var count=0;
					
					for(var i in arr){
						if(arr[i]) count++;
					}
					if(count >3){
						$scope.message="Too Much";
					} else {
						$scope.message="Enjoy :-)";
					}
				}
				catch(e){
					console.log(e);
					$scope.message="Please enter data first";
				}
			} ;
				    
				
		});
	
})();