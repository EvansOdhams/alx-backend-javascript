// 4-user-promise.js

function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName
    });
  });
}

export default signUpUser;
