// Say hello! A tiny module!
function helloWorld(name = 'nobody') {
  console.log(`Hello to ${name}, from inside an ES module!`);
};

function goodbyeWorld(name = 'nobody') {
  console.log(`Goodbye to ${name}, from inside an ES module!`);
}

export {helloWorld, goodbyeWorld};
