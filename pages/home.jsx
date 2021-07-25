import { WhoWatch } from "../cmps/Who-watch.jsx";

export class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="main-container">
          <WhoWatch />
        </div>
      </section>
    );
  }
}
