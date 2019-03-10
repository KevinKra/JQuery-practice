// 1. Write the command to allow JQuery manipulation once the DOM is loaded. Return a console message. 
$(document).ready( function(){
	console.log('Document ready.');
})

// 2. Write out the command to run the code once the entire page loads (not just the DOM).
// return a console message.
$(window).on("load", function(){
	console.log('Window fully loaded.');
})

// 3. Comment out line 1 and write the shorthand version of $(document).ready().
$(function() {
	console.log('Shorthand document ready.');
})

// 4. How would you assign a new JQuery $ alias when avoiding library conflicts?
const $j = jQuery.noConflict();
$j(document).ready( () => {
	console.log('Alias set');
});


// 5. What is a getter / setter?
// A getter retrieves data, whereas a setter sets the relevant data.


// 6. Provide an example of .attr() as a getter.
// console log the type of the choose name input. Should return: text.
console.log($j("#choose-name").attr("type"));


// 7. Provide an example of .attr() as a setter.
$j("#choose-soothsayer").attr("type", "radio");

//or for multiple sets;
$j("#choose-soothsayer").attr({type: "radio"});


// 8. Select the input with value intellect by attribute, change its type to text.
$j("input[value='intellect']").attr("type", "text");

// 9. Select the same input with any pseudo-selector and change the type back to radio.
$j("input").eq(2).attr("type", "radio");

// CHALLENGE part 1: select all inputs, filter only the inputs with the name of class, change their type.
$j("input").filter("input[name=class]").attr("type", "text");

// CHALLENGE part 2: use the 'not' method to change all the previously modified inputs back to radio type.
$j("input").not("input[name=choose-name]").attr("type", "radio");

