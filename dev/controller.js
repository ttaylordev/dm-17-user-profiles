thisApp.controller('mainCtrl', function($scope, mainSvc){
    
    $scope.thisAppIsBroken = "This angular app is working";
    $scope.test = mainSvc.test;
    $scope.users;
    
    $scope.getUsers = function(){
      $scope.users = mainSvc.getUsers()
        console.log($scope.users.$$state, ' $scope.users');
        
      
    }();
    
    $scope.toggleFavorite = mainSvc.toggleFavorite;
});