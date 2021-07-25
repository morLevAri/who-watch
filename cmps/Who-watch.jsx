import { whoWatchService } from "../services/who-watch-service.js";
export class WhoWatch extends React.Component {
  state = {
    users: whoWatchService.getUsers(),
    selectedUser: null,
    isModal: false,
  };

  onSelectedUser = (idx) => {
    this.setState({
      selectedUser: idx,
      isModal: whoWatchService.toggleModal(),
    });
  };

  onRemoveUser = () => {
    whoWatchService.removeUser(this.state.selectedUser);
    this.setState({
      selectedUser: 0,
      isModal: whoWatchService.toggleModal(),
    });
  };

  TvShows = () => {
    return this.state.users[this.state.selectedUser].tvShows.map(
      (show, idx) => {
        return (
          <section key={idx} className="show-list-container">
            <li className="show-list">{show}</li>
          </section>
        );
      }
    );
  };

  Users = () => {
    return this.state.users.map((user, idx) => {
      return (
        <section
          className="user flex"
          key={idx}
          onClick={() => {
            this.onSelectedUser(idx);
          }}
        >
          <img src={`../assets/img/${user.image}`} alt="" />
          <h1 className="user-name">{user.userName}</h1>
        </section>
      );
    });
  };

  Modal = () => {
    return (
      <section className="modal-container">
        <div className="modal">
          <i
            onClick={() => {
              this.onSelectedUser(null);
            }}
            className="far fa-window-close close-modal-btn"
          ></i>
          <h1>TV Shows:</h1>
          <this.TvShows />
          <button
            onClick={() => {
              this.onSelectedUser(null);
            }}
          >
            Close Modal
          </button>
          <button
            onClick={() => {
              this.onRemoveUser();
            }}
          >
            Delete User
          </button>
        </div>
      </section>
    );
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
