
export const whoWatchService = {
    getUsers,
}

let gUsers = [];

function getUsers() {
    console.log(gUsers);
    return gUsers;
}