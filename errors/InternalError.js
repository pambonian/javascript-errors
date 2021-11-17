function loop(x) {
    if (x >= 1000000000000)
      return;
    // do stuff
    loop(x + 1);
  } 
  try {
  loop(0);
  }
  catch {
        console.log("Internal Error Detected!");
    }
  

  module.exports = {
      loop
  }