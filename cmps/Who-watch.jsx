import { whoWatchService } from "../services/who-watch-service.js";

export class WhoWatch extends React.Component {
  state = {
    users: whoWatchService.getUsers(),
  };
  componentDidMount() {
    whoWatchService.getUsers();
  }

  Users = () => {
    return this.state.users.map((user, idx) => {
      return (
        <section className="user flex" key={idx}>
          <img src={`../assets/img/${user.image}`} alt="" />
          <h1 className="user-name">{user.userName}</h1>
          {/* <h1>TV Shows:</h1>
          <h1>{user.tvShows[0]}</h1>
          <h1>{user.tvShows[1]}</h1> */}
        </section>
      );
    });
  };

  render() {
    return (
      <section className="who-watch" onClick={this.handleToggle}>
        <h2>Who's watching?</h2>
        <div className="users-container flex">
          <this.Users />
        </div>
      </section>
    );
  }
}
