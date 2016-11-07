/**
 * Created by TOBI ALAGBE on 9/7/2016.
 */

var service = angular.module('myApp.service', []);

service.factory('myfactory', function($rootScope,$http,$state,$localStorage,$window,$interval,$timeout) {



    var successCallback = function(response){


    }





    var errorCallback = function(data){


    };






    return {

        validate: function(myusername,mypassword){


            var mydata =  {
                "username":myusername,
                "password":mypassword
            }

            var header = {
                "content-type":"application/json"
            }

            $http.post(loginurl, mydata,header).then(successCallback, errorCallback);
        } ,


        fetchstory: function(){

            var header = {
                "content-type":"application/json"
            }

            $http.get('http://localhost:3000/fetchstory',header).then(function(res) {

                $rootScope.storyLength = res.data[0].chatter.length;
                $window.localStorage.setItem('storyId',res.data[0].storyId);
                $window.localStorage.setItem('chatter', JSON.stringify(res.data[0].chatter));
                console.log(JSON.stringify(res.data[0].chatter));
                $rootScope.chat = "click the button below and lets get chatting..."

            }, function(err){
                console.log(JSON.stringify(err));
            });
        } ,





        logTransaction: function(remoteTransaction){

            var header = {
                "content-type":"application/json"
            };

            var res = $http.post('https://ibeta.paypad.com.ng/paypad/webapi/logtransactions',remoteTransaction,header);
            res.success(function(data, status, headers, config){

            });
            res.error(function(data, status, headers, config){

            });

        }, //end of log transaction










    } // end of return






}); //end of myfactory