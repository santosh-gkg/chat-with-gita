// Define the base URL of your FastAPI server
const baseUrl = "http://localhost:8000";

// Function to send a query to the FastAPI server and get a response
async function runChat(query) {
    // const url = `${baseUrl}/ask`;
    
    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ query })
    // });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // const data = await response.json();
    return "Hello World!";

    // return data.response;
}
export default runChat;
