
export const whoWatchService = {
    getUsers,
    toggleModal,
    removeUser,
    addUser,
}

let isModal = false

let gUsers = [
    {
        userName: 'jacob',
        tvShows: ['Killing Eve', 'Bridgerton'],
        image: '1.png'
    },
    {
        userName: 'isabella',
        tvShows: ['The Bodyguard', 'Luther'],
        image: '2.png'
    },
    {
        userName: 'emily',
        tvShows: ['The Crown', 'Bridgerton'],
        image: '3.png'
    },
    {
        userName: 'ethan',
        tvShows: ['Outlandern', 'Black Mirror'],
        image: '4.png'
    },
    {
        userName: 'mia',
        tvShows: ['The Bodyguard', 'Bridgerton'],
        image: '5.png'
    },
];

function addUser(userName, tvShows) {
    const newUser = {
        userName,
        tvShows,
        image: `${_getRandomInt(1, 10)}.png`,
    }
    gUsers.push(newUser);
}

function getUsers() {
    return gUsers;
}


function toggleModal() {
    isModal = !isModal
    return isModal
};

function removeUser(idx) {
    gUsers.splice(idx, 1)
};

function _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}