
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

   var p1 = new Chatter('KungfuNinja', '#E96B20');
   var p2 = new Chatter('slowCheeta', '#46AEFB');
   var p3 = new Chatter('MrTurtle', '#FFFF00');
   var p4 = new Chatter('PhoenixDown', '#00FF00');

   $scope.messageInputValue = 0;
 
   //$scope.setUser(
   $scope.chat = [
      p1.mkMsg('Sup dude'),
      p2.mkMsg('Yo, what it do homie'),
      p1.mkMsg('nm just swagging you know how it b dawg'),
      p2.mkMsg('werd'),
      p1.mkMsg('tru'),
      p3.mkMsg('Kawabunga'),
      p4.mkMsg('Sup bros')
   ];

   $scope.sendMessage = function() {
      msg = p1.mkMsg($scope.messageValue); 
      $scope.messageValue = '';
      $scope.chat.push(msg);
   }

});
