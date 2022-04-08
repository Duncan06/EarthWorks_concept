import classes from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div>
      <div className={classes.mainContactContainer}>
        <div className={classes.contactInfo}>
          <h1 className={classes.innerTitle}>
            We look forward to getting in touch with you soon!
          </h1>
          <br />
          <h2 className={classes.emailPhoneInfo}>
            Email:&nbsp;
            <a href="mailto:j.c.earthworks@gmail.com?subject=Project Request">
              j.c.earthworks@gmail.com
            </a>
          </h2>
          <h2 className={classes.emailPhoneInfo}>Phone: xxx-xxx-xxxx</h2>
          <div className={classes.pictureContainer}>
            <img
              className={classes.contactPic}
              src="https://thumbs.dreamstime.com/b/planet-earth-space-night-some-elements-image-furnished-nasa-111176972.jpg"
              alt="contactPic1"
            />
            <img
              className={classes.contactPic}
              src="https://thumbs.dreamstime.com/b/theodolite-construction-site-12015421.jpg"
              alt="contactPic2"
            />
            <img
              className={classes.contactPic}
              src="https://thumbs.dreamstime.com/b/project-construction-renovation-house-49925875.jpg"
              alt="contactPic3"
            />
            <img
              className={classes.contactPic}
              src="https://thumbs.dreamstime.com/b/architect-engineer-working-concept-construction-tools-saf-architect-engineer-working-concept-construction-tools-118420998.jpg"
              alt="contactPic4"
            />
            <img
              className={classes.contactPic}
              src="https://thumbs.dreamstime.com/b/new-home-construction-1408651.jpg"
              alt="contactPic5"
            />
            <img
              className={classes.contactPic}
              src="https://thumbs.dreamstime.com/b/home-renovation-construction-diy-abstract-background-tools-wooden-board-closeup-140640845.jpg"
              alt="contactPic6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
