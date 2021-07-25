// import { whoWatchService } from "../services/who-watch-service.js";
// // import { Modal } from "../cmps/Modal.jsx";

// export class Users extends React.Component {
//   state = {
//     users: whoWatchService.getUsers(),
//     selectedUser: null,
//     // isModal: false,
//   };

//   onSelectedUser = (user) => {
//     this.setState({
//       selectedUser: user,
//       // isModal: whoWatchService.toggleModal(),
//     });
//   };

//   render() {
//     return this.state.users.map((user, idx) => {
//       return (
//         <section
//           className="user flex"
//           key={idx}
//           onClick={() => {
//             this.onSelectedUser(user);
//           }}
//         >
//           <img src={`../assets/img/${user.image}`} alt="" />
//           <h1 className="user-name">{user.userName}</h1>
//           {/* {this.state.isModal && <Modal />} */}
//         </section>
//       );
//     });
//   }
// }
