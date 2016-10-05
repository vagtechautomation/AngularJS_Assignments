(function (){
	
	'use strict';
	angular.module("LunchChecker",[])
		.controller("LunchCheckerController",function($scope){
			//alert("here");
			//$scope.message="hi";
			$scope.checkFunction = function(){
				if(!$scope.lunchMenu){
					$scope.message="Please enter data first";
				}
				else{
					var arr = ($scope.lunchMenu).split(",");
					var len = arr.length;
					
					if (len>3){
						$scope.message="Too Much";
					}
				
					else if (len>0 && len<4){
						$scope.message="Enjoy :-)";
					}
									
				}
			};
		});
	
})();