
export const whoWatchService = {
    getUsers,
}

let gUsers = [
    {
        userName: 'Isabella',
        tvShows: ['Killing Eve', 'Bridgerton'],
        image: '1.png'
    },
    {
        userName: 'Jacob',
        tvShows: ['The Bodyguard', 'Luther'],
        image: '2.png'
    },
    {
        userName: 'Emily',
        tvShows: ['The Crown', 'Bridgerton'],
        image: '3.png'
    },
    {
        userName: 'Ethan',
        tvShows: ['Outlandern', 'Black Mirror'],
        image: '4.png'
    },
    {
        userName: 'Mia',
        tvShows: ['The Bodyguard', 'Bridgerton'],
        image: '5.png'
    },
];

function getUsers() {
    console.log(gUsers);
    return gUsers;
}
