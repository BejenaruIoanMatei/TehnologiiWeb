/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

/* fetchData -> face handle la requesturi de fetch in functie de endpointul primit */
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

    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}

async function updateStatistics() {
  try {
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

    document.getElementById('numberOfAccessesCounter').innerText = numberWithCommas(numberOfAccesses.numberOfAccesses);
    document.getElementById('loggedUsersCounter').innerText = loggedUsers.loggedUsers;
    document.getElementById('souvenirsSuggestedCounter').innerText = numberWithCommas(souvenirsSuggested.souvenirsSuggested);
    document.getElementById('satisfiedCustomersCounter').innerText = numberWithCommas(satisfiedCustomers.satisfiedCustomers);
    document.getElementById('globalLikeRatioPercentage').innerText = `${globalLikeRatio.globalLikeRatio.toFixed(2)}%`;
  } catch (error) {
    console.error('Error updating statistics:', error);
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.addEventListener('load', () => {
   updateStatistics();
});
