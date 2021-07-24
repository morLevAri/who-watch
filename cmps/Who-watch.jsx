import { whoWatchService } from "../services/who-watch-service.js";

export class WhoWatch extends React.Component {
  state = {
    users: whoWatchService.getUsers(),
    isModal: false,
  };
  componentDidMount() {
    whoWatchService.getUsers();
  }

  Users = () => {
    return this.state.users.map((user, idx) => {
      return (
        <section className="user flex" key={idx} onClick={this.toggleModal}>
          <img src={`../assets/img/${user.image}`} alt="" />
          <h1 className="user-name">{user.userName}</h1>
        </section>
      );
    });
  };

  Modal = () => {
    // return this.state.users.map((user, idx) => {
    return (
      <section className="modal-container">
        <div className="modal">
          <i
            onClick={this.toggleModal}
            className="far fa-window-close close-modal-btn"
          ></i>
          <h1>TV Shows:</h1>
          {/* <h1>{user.tvShows[0]}</h1>
        <h1>{user.tvShows[1]}</h1> */}
          <button onClick={this.toggleModal}>Close Modal</button>
          <button>Delete User</button>
        </div>
      </section>
    );
    // });
  };

  toggleModal = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    return (
      <section className="who-watch">
        <h2>Who's watching?</h2>
        <div className="users-container flex">
          <this.Users />
        </div>
        {this.state.isModal && <this.Modal />}
      </section>
    );
  }
}
