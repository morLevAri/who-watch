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

  onAddUser = () => {
    const userName = prompt("Enter user name");
    let tvShows = prompt("Enter favorite tv shoes");
    if (!userName || !tvShows) return;
    tvShows = tvShows.split(",");
    whoWatchService.addUser(userName, tvShows);
    this.setState({
      users: whoWatchService.getUsers(),
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
          className="user user-child flex"
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
          <div className="user-child">
            <div className="add-user-container  flex">
              <button
                className="add-user-btn"
                onClick={() => {
                  this.onAddUser();
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        {this.state.isModal && <this.Modal />}
      </section>
    );
  }
}
