/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('./firebaseInit');
const { collection, getDocs, updateDoc } = require('firebase/firestore');

/* functie ce calculeaza procentajul de multumire per suvenir si il updateaza in baza de date */
function calculateLikeRatio(likeCount, dislikeCount) {
  const totalVotes = likeCount + dislikeCount;
  if (totalVotes === 0) {
    return 0; // Handle division by zero case
  }
  return (likeCount / totalVotes) * 100;
}

async function updateLikeRatioForSouvenirs() {
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    for (const souvenirDoc of snapshot.docs) {
      try {
        const { likesCount, dislikesCount } = souvenirDoc.data();

        const likesCountNum = Number(likesCount || 0);
        const dislikesCountNum = Number(dislikesCount || 0);

        const likeRatio = calculateLikeRatio(likesCountNum, dislikesCountNum);
        const likeRatioNumber = Number(likeRatio.toFixed(2));

        await updateDoc(souvenirDoc.ref, { likeRatio: likeRatioNumber });
        console.log(`Updated likeRatio for souvenir with ID: ${souvenirDoc.id}`);

      } catch (innerError) {
        console.error(`Error updating likeRatio for souvenir with ID ${souvenirDoc.id}:`, innerError);
      }
    }

    console.log('Completed processing all souvenirs.');
  } catch (error) {
    console.error('Error fetching souvenirs or updating likeRatio:', error);
    throw error;
  }
}
module.exports = {
  calculateLikeRatio,
  updateLikeRatioForSouvenirs
};
