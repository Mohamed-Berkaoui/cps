async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value); // Log the current value
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);

  //
  async function awaitCall() {
    // Simulate an API call with a delay
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "API response data" }); // Simulated API response
      }, 2000); // Simulate 2-second delay
    });
  
    console.log(response.data); // Log the API response
  }
  
  // Example usage:
  awaitCall();

  ///
  async function awaitCall() {
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.5; // Simulate success/failure randomly
          if (success) {
            resolve({ data: "API response data" });
          } else {
            reject(new Error("API call failed")); // Simulate an error
          }
        }, 2000);
      });
  
      console.log(response.data); // Log the API response
    } catch (error) {
      console.error("Error fetching data:", error.message); // Log a user-friendly error message
    }
  }
  
  // Example usage:
  awaitCall();

  ////

  async function firstFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("First function executed");
  }
  
  async function secondFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Second function executed");
  }
  
  async function thirdFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Third function executed");
  }
  
  async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  }
  
  // Example usage:
  chainedAsyncFunctions();


  ////

  async function parallelCalls(urls) {
    try {
      const requests = urls.map(url => fetch(url).then(response => response.json()));
      const responses = await Promise.all(requests);
  
      console.log("All responses:", responses);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  // Example usage:
  parallelCalls([
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
  ]);