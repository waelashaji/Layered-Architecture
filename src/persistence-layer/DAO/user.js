// data from database layer
let data = new Data();

class UserDAO {
  getByEmail(email) {
    // find user by email
    let user = data.users.find(user => user.email === email);
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous task (e.g., fetching data from an API)
      setTimeout(() => {
        if (user) {
          resolve(user);
        } else {
          reject('An Error occured while retrieving user!');
        }
      }, 0); // Simulating a 0-second delay
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous task (e.g., fetching data from an API)
      setTimeout(() => {
        const success = true; // Simulating a successful operation

        if (success) {
          resolve(data.users);
        } else {
          reject('An Error occured while retrieving users!');
        }
      }, 0); // Simulating a 0-second delay
    });
  }

}

