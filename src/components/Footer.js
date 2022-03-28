import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footerMain}>
      <div className={classes.emailFooter}>
        <a href="mailto:j.c.earthworks@gmail.com?subject=Project Request">
          j.c.earthworks@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
