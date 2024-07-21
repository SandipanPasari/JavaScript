// Immedietly Invoked Function Expression (IIFE)

// Named IIFE

(function chai() {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED AGAIN ${name}`);
})("Sandipan");
