import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.topFooter}>
        <div className={classes.logo}>LOGO</div>
        <div className={classes.footerInfos}>
          <div>
            <p className={classes.footerInfoTitle}>
              Information and high risk warning:
            </p>
            <p className={classes.footerInfo}>
              Trading with foreign exchange (FX), contract for differences
              (CFDs) and precious metals carries a high level of risk that may
              not be suitable for all investors. Leverage creates additional
              risk and loss exposure. Before you decide to trade foreign
              exchange or contract for differences, carefully consider your
              investment objectives, experience level, and risk tolerance.
            </p>
          </div>
          <div>
            <p className={classes.footerInfoTitle}>Legal disclaimer:</p>
            <p className={classes.footerInfo}>
              Forex trading entails significant risks and is not appropriate for
              all investors. The possibility of incurring substantial losses
              should be taken into account. It is therefore important to
              understand the possible consequences of investing. Traders should
              weigh their earning potential against the risks involved and act
              accordingly. Interactive Trade Ltd operating under brand and using
              domenLink domain within the European Economic Area.
            </p>
          </div>
        </div>
        <div className={classes.aboutUsLinks}>
          <p className={classes.footerLink}>About us</p>
          <p className={classes.footerLink}>Platforms</p>
          <p className={classes.footerLink}>Contact Us</p>
          <p className={classes.footerLink}>Sign in</p>
          <p className={classes.footerLink}>Sign up for free</p>
        </div>
      </div>
      <div className={classes.bottomFooter}>
        <p className={classes.footerBottomLink}>
          Copyright 2020, All Right Reserved
        </p>
        <p className={classes.footerBottomLink}>Terms and Conditions</p>
        <p className={classes.footerBottomLink}>Privacy Policy</p>
        <p className={classes.footerBottomLink}>Risk Warnings</p>
        <p className={classes.footerBottomLink}>Anti-Money Laundering</p>
      </div>
    </footer>
  );
}

export default Footer;
