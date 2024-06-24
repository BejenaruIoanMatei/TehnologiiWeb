/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs, updateDoc } = require('firebase/firestore');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

updateLikesAndDislikes();
