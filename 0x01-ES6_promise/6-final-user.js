// 6-final-user.js

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const userStatus = userResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';
    const photoStatus = photoResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';

    const userValue = userResult.status === 'fulfilled' ? userResult.value : userResult.reason;
    const photoValue = photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason;

    return [
      { status: userStatus, value: userValue },
      { status: photoStatus, value: photoValue }
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}

export default handleProfileSignup;
