var Zoo = function(){
  this.animals = [];
};
var Animal = function(options){
  var args = options || {};
  this.name = args.name;
  this.age = args.age;
  this.species = args.species;
  this.status = args.status;

};
Animal.prototype.escape = function(){
    this.status = 'escaped';
};
