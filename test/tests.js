/* global describe, it */

(function () {
  'use strict';

    describe('About our zoo', function () {

      beforeEach( function(){
        window.zoo = new Zoo();
      });

      describe('create a new zoo', function () {
        it('should create a new instance of our zoo', function () {
          expect(zoo instanceof Zoo).to.equal(true);
        });
      });
      describe('the animals in our zoo', function(){
        it('should contain an array of animals', function(){
          expect(zoo.animals).to.be.an('array');
        });
      });
    });
    describe('About our animals', function(){
      beforeEach( function(){
        window.tiger = new Animal({
          name:'Tony',
          species: 'Tiger',
          age: 5,
          status: "Grrreeeattt"
        });
      });
      describe('creating an animal', function(){
        it('should be an animal', function(){
         expect(tiger instanceof Animal).to.equal(true);
        });
      });
      describe('giving our animals properties', function(){
        it('should have a name', function(){
          expect(tiger.name).to.exist;
          expect(tiger.name).to.be.a('string');
        });
        it('should have other properties', function(){
          expect(tiger.species).to.exist;
          expect(tiger.age).to.exist;
          expect(tiger.status).to.exist;
        });
      });
      describe('animals escaping', function(){
        it('should have a way to escape', function(){
          expect(tiger.escape).to.exist;
        });
        it('should alter the status', function(){
          tiger.escape();
          expect(tiger.status).to.equal('escaped');
        });
      });
  });


})();
