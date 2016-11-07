var app = angular.module('myApp.controllers', ['myApp.service','ngFileUpload']);








app.controller('MyCtrl', function($http,$scope,$localStorage,$rootScope,$interval,$state,myfactory,$window,Upload) {
  

$scope.hide = true;


$scope.showBalance = function(pin){

   if (pin !== undefined) {


           
            // alert(pin);

              var data =  {
                            "pin":pin
                          };


             $http.post("https://balancecheckerapp.herokuapp.com/query",data).then(function(res){
                  
                    console.log(JSON.stringify(res));

 
                if (res.data[res.data.length - 1]){
                  
                          $scope.balance = res.data[0].CURRENT_VALUE;
                          $scope.name = res.data[0].NAME;
                           // alert($rootScope.balance);
                           $scope.hide = false;

                }else{

                  alert("Please make sure you entered the correct pin");
                }


                 

                  

             }, function(err){

                    console.log(JSON.stringify(err));
                    alert("there seems to be an error, make sure you have a good internet connection");

             });


      }

  else{

          alert("please enter your crusader sterling pin");
  }


}






$scope.addChatter = function(chatter){


    
    if (chatter === undefined || chatter === null || chatter === "") {
        alert("chatter must be defined");
    };




    var data = {  
                "storyId": $window.localStorage.getItem('storyId'),
                "chatter": chatter
               };


   $http.post("http://localhost:3000/addchatter",data).then(function(res){
        
          console.log(JSON.stringify(res));
          $scope.chatter = null;

   }, function(err){

          console.log(JSON.stringify(err));

   });

};














 

















$scope.edit = function(email,password,newfullName,newemail,newpassword){

    var data = {
                "email": email,
                "password": password,
                "newfullName": newfullName,
                "newemail": newemail,
                "newpassword": newpassword
               };


   $http.post("http://localhost:3000/update",data).then(function(res){
        
          console.log(JSON.stringify(res));
          $state.go("admin");
          $rootScope.permission = true;
        

   }, function(err){

          console.log(JSON.stringify(err));
          alert("gtfoh! you aren't meant to be here...");
           $rootScope.permission = false;

   });
  

};










 


















}); //end of MyCtrl
