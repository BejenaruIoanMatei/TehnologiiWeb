// Import Firestore instance
const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs, updateDoc, query, where } = require('firebase/firestore');

// Generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update likesCount and dislikesCount for all souvenirs
async function updateLikesAndDislikes() {
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    snapshot.forEach(async (doc) => {
      const { id } = doc;
      const likesCount = getRandomNumber(100, 250);
      const dislikesCount = getRandomNumber(100, 250);

      // Update the document with new fields
      await updateDoc(doc.ref, {
        likesCount,
        dislikesCount,
      });

      console.log(`Updated souvenir ${id} with likesCount: ${likesCount} and dislikesCount: ${dislikesCount}`);
    });
  } catch (error) {
    console.error("Error updating data: ", error);
    throw error;
  }
}

// Call the function to update likesCount and dislikesCount
updateLikesAndDislikes();
