let my_string = "Hello! can you replace me with empty space when you find the text Replace me or replace me ?";
console.log("Replacing words (case sensitive)");
let new_text = my_string.replace(/replace me/g,'');
console.log(new_text);
new_text = my_string.replace(/replace me/ig,'');
console.log("Replacing words (not case sensitive)");
console.log(new_text);