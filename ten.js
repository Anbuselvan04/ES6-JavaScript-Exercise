const waitAndReturn = () => 
    new Promise(resolve => setTimeout(() => resolve("Done"), 2000));
  
  async function run() {
    const result = await waitAndReturn();
    console.log(result); 
  }
  
  run();
