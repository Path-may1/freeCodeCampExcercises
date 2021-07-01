//Use a Mixin to Add Common Behavior Between Unrelated Objects
//challenge
/*
Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
*/

et bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("this is glide")
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// tests
/*
Your code should declare a glideMixin variable that is a function.

Passed
Your code should use the glideMixin on the bird object to give it the glide method.

Passed
Your code should use the glideMixin on the boat object to give it the glide method.
*/
