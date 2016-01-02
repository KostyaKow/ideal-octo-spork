
function Chatter(name, color) {
   this.name = name;
   this.color = color;
   this.mkMsg = function(msg) {
      return {
         'name'   : this.name,
         'color'  : this.color,
         'msg'    : msg
      };
   }
   return this;
}

var app = angular.module('messanger', []);

app.controller('messages', function($scope) {

   var p1 = new Chatter('bob', '#E96B20');
   var p2 = new Chatter('john', '#46AEFB');

   //$scope.setUser(
   $scope.chat = [
      p1.mkMsg('hello'),
      p2.mkMsg('blah'),
   ];

});
