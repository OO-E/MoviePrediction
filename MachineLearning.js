/**
 * Created by ozgun on 31.03.2017.
 */

var generator = require('knear');

var k = 3; //k can be any integer
var machine = new generator.kNear(k);

machine.learn([-1,2,3],7);
machine.learn([0,0,0],8);
machine.learn([10,10,10],9);
machine.learn([9,12,9],8);

var y = machine.classify([1,0,1]);
//returns 'good'

var x = machine.classify([11,11,9]);
//returns 'bad'


console.log(x);
console.log(y);

//bu algoritma çalısıyor.