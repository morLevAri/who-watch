import { whoWatchService } from "../services/who-watch-service.js";

export class WhoWatch extends React.Component {
  state = {};
  componentDidMount() {
    whoWatchService.getUsers();
  }

  render() {
    return (
      <section className={"who-watch"} onClick={this.handleToggle}>
        <h2>Who's watching?</h2>
        <div className="users-container flex">
          <img className="user" src="../assets/img/1.png" alt="" />
          <img className="user" src="../assets/img/2.png" alt="" />
          <img className="user" src="../assets/img/3.png" alt="" />
          <img className="user" src="../assets/img/4.png" alt="" />
          <img className="user" src="../assets/img/5.png" alt="" />
        </div>
      </section>
    );
  }
}
