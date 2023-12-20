function stretch() {
  return new Promise((resolve, reject) => {
    let stretched = false
    setTimeout(()=> {
      stretched = true;
      console.log("done stretching")
      resolve(stretched);
    }, 1000)
  })
}

function runOnTreadmill(stretchedStatus) {
  return new Promise((resolve, reject) => {
    let run
    if (stretchedStatus === true){
      setTimeout(()=> {
        run = true;
        console.log("done running on treadmill")
        resolve(run);
      }, 500)
    } else {
      run = false
      reject()
    }
  })
}

function liftWeights(runStatus) {
  return new Promise((resolve, reject) => {
    let weights
    if (runStatus === true){
    setTimeout(()=> {
      weights = true;
      console.log("done lifting weights")
      resolve(weights);
    }, 2000)
  } else {
    weights = false;
    reject();
  }
  })

}

function workout() {
  stretch()
  .then((stretched) => runOnTreadmill(stretched))
  .then((run) => liftWeights(run))
  .then((weights) => {
    console.log("done working out")
  })

}


workout()
/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
