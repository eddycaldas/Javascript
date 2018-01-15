// function expressions
const square = function(x=3){
    return x * x
};
console.log(square());


// Immidiately Invokable functions expressions IIFEs- declare and run at the same time
(function(){
    console.log("IIFE Ran...");
})();
                    //--
(function(name){
    console.log("Hello " + name);
})('Brad');


// Property methods - when a function inside object, its call method
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log("Delete todo...");
}

todo.add();
todo.edit(22);
todo.delete();
