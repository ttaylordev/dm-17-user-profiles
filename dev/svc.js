angular.module("userProfiles").service("mainSvc", function($http) {
  this.test = 'test this stuff';

  const baseUrl = './data.json';
  var data;
  var setData = function(dataObj){
    data = dataObj;
  }
    var getUsers = function() {
      return $http({
        method: 'GET',
        url: baseUrl
      }).then(function(response) {
        console.log(response.data, '.data');
        setData(response.data);
        console.log(data, 'data from service');
          return response.data;
      });
    };

    
  this.getUsers = getUsers;
  
  this.toggleFavorite = function(index){
    if(index >= 0){
      data[index].isFavorite = !data[index].isFavorite;
    }
  }
  
});