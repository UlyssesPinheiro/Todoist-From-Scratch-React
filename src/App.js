import Content from "./Components/Layout/Content";
import Header from "./Components/Layout/Header/Header";
import classes from "./App.module.css";

export default function App() {
  return (
    <div className={classes}>
      <Header />
      <Content />
    </div>
  );
}
