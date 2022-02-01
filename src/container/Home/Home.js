import "./Home.scss";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <div>
      <h1 className="home-title">Tous les articles</h1>
      <div className="container-cards">
        <Card>
          <h2>Hello card</h2>
        </Card>
      </div>
    </div>
  );
}
