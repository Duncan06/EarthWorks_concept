import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footerMain}>
      <div className={classes.message}>We look forward to working with you.</div>
      <div className={classes.emailFooter}>j.c.earthworks@gmail.com</div>
    </footer>
  );
}

export default Footer;
