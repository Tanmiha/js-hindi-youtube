// Immediately Invoked Functionn Expressions (IIFE)

(function chai(){
    // named  IIfe
    console.log(`DB CONNECTED`);
    
})();

(  () => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )(`hitesh`) 