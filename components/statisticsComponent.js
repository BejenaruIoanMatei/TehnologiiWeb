// statisticsComponent.js

// Function to fetch data from server
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}

// Function to update statistics values
async function updateStatistics() {
  try {
    // Fetch data from server endpoints
    const numberOfAccesses = await fetchData('/getNumberOfAccesses');
    console.log('Number of accesses:', numberOfAccesses);
    const loggedUsers = await fetchData('/getLoggedInUsers');
    console.log('LoggedUsers:', loggedUsers);
    const souvenirsSuggested = await fetchData('/getSouvenirsSuggested');
    console.log('SouvenirsSuggested:', souvenirsSuggested);
    const satisfiedCustomers = await fetchData('/getSatisfiedCustomers');
    console.log('SatisfiedCustomers:', satisfiedCustomers);
    const globalLikeRatio = await fetchData('/getGlobalLikeRatio');
    console.log('Global likeRatio:', globalLikeRatio);

    // Update HTML elements with fetched data
    document.getElementById('numberOfAccessesCounter').innerText = numberWithCommas(numberOfAccesses.numberOfAccesses);
    document.getElementById('loggedUsersCounter').innerText = loggedUsers.loggedUsers;
    document.getElementById('souvenirsSuggestedCounter').innerText = numberWithCommas(souvenirsSuggested.souvenirsSuggested);
    document.getElementById('satisfiedCustomersCounter').innerText = numberWithCommas(satisfiedCustomers.satisfiedCustomers);
    document.getElementById('globalLikeRatioPercentage').innerText = `${globalLikeRatio.globalLikeRatio.toFixed(2)}%`;
  } catch (error) {
    console.error('Error updating statistics:', error);
  }
}

// Function to add commas to numbers for better readability
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Automatically update statistics when the page loads
window.addEventListener('load', () => {
  updateStatistics();
});
