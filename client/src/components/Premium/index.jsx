import NavBarLanding from "../LandingPage/NavBarLanding";
import Footer from "../LandingPage/Footer";
import CardPlan from "../CardPlan";
import styles from "./premium.module.css";

export default function Premium() {
  return (
    <div>
      <NavBarLanding />
      <div className={styles.subcontainer}>
        <img
          src="https://i.pinimg.com/originals/66/d1/b4/66d1b4865389a633bc108a602aee9311.jpg"
          alt="album"
          className={styles.imagen}
        />
        <h1 className={styles.title}>Listen trend music any time, anywhere</h1>
      </div>
      <div className={styles.subcontainer2}>
        <CardPlan plan={"$2,99 / 1 month"} />
        <CardPlan plan={"$5,99 / 3 months"} />
        <CardPlan plan={"$20,99 / 12 months"} />
      </div>
      <Footer />
    </div>
  );
}
