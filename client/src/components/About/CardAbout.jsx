import styles from "./about.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

function CardAbout({ name, title, location, images, linkedin, github }) {
  console.log(linkedin, github);
  return (
    <div className="card-about">
      <div className={styles.containerCards}>
        <div className={styles.containerTxt}>
          <h2 className={styles.cardName}>{name}</h2>
          <h3 className={styles.cardTitle}>{title}</h3>
          <h4 className={styles.cardLocation}>
            <MdLocationOn />
            {location}
          </h4>
          <div className={styles.footerSocial}>
            <BsGithub onClick={() => window.open(github, "_blank")} className={styles.gitHubIcon} />
            <BsLinkedin onClick={() => window.open(linkedin, "_blank")} className={styles.linkedinIcon} />
          </div>
        </div>
        <img src={images} alt="avatar" className={styles.imgCard} />
      </div>
    </div>
  );
}

export default CardAbout;
