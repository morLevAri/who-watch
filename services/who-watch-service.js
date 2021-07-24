
export const whoWatchService = {
    getUsers,
    // toggleModal,
}

// let isModal = false

let gUsers = [
    {
        userName: 'isabella',
        tvShows: ['Killing Eve', 'Bridgerton'],
        image: '1.png'
    },
    {
        userName: 'jacob',
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

function getUsers() {
    return gUsers;
}

// function toggleModal() {
//     isModal = !isModal
// };