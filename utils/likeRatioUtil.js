const { db } = require('./firebaseInit');
const { collection, getDocs, updateDoc } = require('firebase/firestore');

// Function to calculate like ratio
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

    // Iterate through each souvenir individually
    for (const souvenirDoc of snapshot.docs) {
      try {
        // Use the corrected field names
        const { likesCount, dislikesCount } = souvenirDoc.data();

        // Ensure likesCount and dislikesCount are treated as numbers
        const likesCountNum = Number(likesCount || 0);
        const dislikesCountNum = Number(dislikesCount || 0);

        const likeRatio = calculateLikeRatio(likesCountNum, dislikesCountNum);
        const likeRatioNumber = Number(likeRatio.toFixed(2));

        // Update the individual document atomically (using updateDoc)
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
