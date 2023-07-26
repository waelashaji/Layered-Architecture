// DAO from persistence layer
let userDAO = new UserDAO();

let error = false
let users = []

async function getUsers() {
    // use auth service to authenticate user 
    if (isAdmin('email@example.com')) {
        // use user service to get users
        userDAO.getAll()
            .then((result) => {
                // Promise resolved
                users = JSON.stringify(result);
            })
    } else {
        error = true
    }

}

async function isAdmin(email) {
    let user;
    await userDAO.getByEmail(email)
    .then((result) => {
        // Promise resolved
        user = result;
    })
    .catch((error) => {
        // Promise rejected
        console.error(error);
    });
    return user && user.role === 'admin'
}