/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */
const { db } = require('./firebaseInit');
const { collection, getDocs, updateDoc, doc, getDoc, setDoc } = require('firebase/firestore');

async function calculateGlobalLikeRatio() {
  const suveniruriCollection = collection(db, 'suveniruri');
  const snapshot = await getDocs(suveniruriCollection);

  let totalLikes = 0;
  let totalDislikes = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    totalLikes += data.likesCount || 0;
    totalDislikes += data.dislikesCount || 0;
  });

  const totalVotes = totalLikes + totalDislikes;
  return totalVotes === 0 ? 0 : (totalLikes / totalVotes) * 100;
}

async function updateStatisticsDataGlobalLikeRatio() {
  try {
    const globalLikeRatio = await calculateGlobalLikeRatio();
    const statsDocRef = doc(collection(db, 'statisticsData'), 'globalLikeRatio');

    await updateDoc(statsDocRef, { value: globalLikeRatio });
    console.log('Global like ratio updated successfully');
  } catch (error) {
    console.error('Error updating global like ratio:', error);
    throw error;
  }
}

async function getGlobalLikeRatio(req, res) {
  try {
    await updateStatisticsDataGlobalLikeRatio();

    const statsDocRef = doc(collection(db, 'statisticsData'), 'globalLikeRatio');
    const docSnap = await getDoc(statsDocRef);

    if (!docSnap.exists()) {
      throw new Error('Document does not exist');
    }

    const { value } = docSnap.data();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ globalLikeRatio: value }));
  } catch (error) {
    console.error('Error fetching globalLikeRatio:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to fetch globalLikeRatio' }));
  }
}

async function updateStatisticsDataNumberOfAccesses() {
  try {
    const statsCollectionRef = collection(db, 'statisticsData');
    const docRef = doc(statsCollectionRef, 'numberOfAccesses');
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, { value: 1 });
    } else {
      const { value } = docSnap.data();
      const newValue = value + 1;
      await updateDoc(docRef, { value: newValue });
    }
  } catch (error) {
    console.error('Error updating numberOfAccesses:', error);
    throw error;
  }
}

async function updateStatisticsDataSouvenirsSuggested(req, res) {
  // Send immediate response to the client
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok' }));

  try {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const { value: incrementValue } = JSON.parse(body);

      console.log('The souvenirs recomended count is: ', incrementValue);
      const statsCollectionRef = collection(db, 'statisticsData');
      const docRef = doc(statsCollectionRef, 'souvenirsSuggested');
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, { value: incrementValue });
      } else {
        const { value } = docSnap.data();
        const newValue = value + incrementValue;
        await updateDoc(docRef, { value: newValue });
      }
    });
  } catch (error) {
    console.error('Error updating souvenirsSuggested:', error);
  }
}
{

}
// const updateStatisticsSatisfiedCustomers = (req,res)
// {
//
// }
// const updateStatisticsDataGlobalLikeRatio = (req,res)
// {
//
// }

async function getNumberOfAccesses(req, res) {
  try {
    const statsCollectionRef = collection(db, 'statisticsData');
    const docRef = doc(statsCollectionRef, 'numberOfAccesses'); // Assuming 'numberOfAccesses' is the auto-generated document ID
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Document does not exist');
    }

    const { value } = docSnap.data();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ numberOfAccesses: value }));
  } catch (error) {
    console.error('Error fetching numberOfAccesses:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to fetch numberOfAccesses' }));
  }
}


async function getLoggedInUsers(req, res) {
  try {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);

    let loggedInUsersCount = 0;
    querySnapshot.forEach(doc => {
      const userData = doc.data();
      if (userData.loggedIn === true) {
        loggedInUsersCount++;
      }
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ loggedUsers: loggedInUsersCount }));
  } catch (error) {
    console.error('Error fetching loggedUsers:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to fetch loggedUsers' }));
  }
}

async function getSouvenirsSuggested(req, res) {
  try {

    const statsCollectionRef = collection(db, 'statisticsData');
    const docRef = doc(statsCollectionRef, 'souvenirsSuggested'); // Assuming 'numberOfAccesses' is the auto-generated document ID
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Document does not exist');
    }

    const { value } = docSnap.data();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ souvenirsSuggested: value }));
  } catch (error) {
    console.error('Error fetching souvenirsSuggested:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to fetch souvenirsSuggested' }));
  }
}


async function updateStatisticsSatisfiedCustomers() {
  try {
    const souvenirsRef = collection(db, 'suveniruri');
    const querySnapshot = await getDocs(souvenirsRef);

    let totalLikes = 0;

    querySnapshot.forEach((doc) => {
      const { likesCount } = doc.data();
      totalLikes += likesCount;
    });

    const statsDocRef = doc(db, 'statisticsData', 'satisfiedCustomers');
    const docSnap = await getDoc(statsDocRef);

    if (!docSnap.exists()) {
      await setDoc(statsDocRef, { value: totalLikes }); // Initialize with totalLikes if document doesn't exist
    } else {
      const { value } = docSnap.data();
      const newValue = totalLikes; // Update with the total likes calculated
      await updateDoc(statsDocRef, { value: newValue });
    }

    console.log('Updated satisfiedCustomers with total likes:', totalLikes);
  } catch (error) {
    console.error('Error updating satisfiedCustomers:', error);
    throw error;
  }
}

async function getSatisfiedCustomers(req, res) {
  try {

    await updateStatisticsSatisfiedCustomers();
    const statsCollectionRef = collection(db, 'statisticsData');
    const docRef = doc(statsCollectionRef, 'satisfiedCustomers'); // Assuming 'numberOfAccesses' is the auto-generated document ID
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Document does not exist');
    }

    const { value } = docSnap.data();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ satisfiedCustomers: value }));
  } catch (error) {
    console.error('Error fetching satisfiedCustomers:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to fetch satisfiedCustomers' }));
  }
}



module.exports = {
  updateStatisticsDataSouvenirsSuggested,
  updateStatisticsDataNumberOfAccesses,
  getNumberOfAccesses,
  getLoggedInUsers,
  getSouvenirsSuggested,
  getSatisfiedCustomers,
  getGlobalLikeRatio
};
