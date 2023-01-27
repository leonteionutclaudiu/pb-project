import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.heroLeft}>
        <h2 className={classes.heroTitle}>
          Trade everywhere.
          <br />
          Invest here!
        </h2>
        <p className={classes.heroText}>
          We provide only the best trading software. The trading terminal
          MetaTrader4 is the most popular and convenient platform for access to
          global exchanges. You can work anywhere.
        </p>
        <button className={classes.ctaHeroBtn}>START TRADING</button>
      </div>
      <img
        className={classes.chart}
        src="./assets/images/chart.svg"
        alt="chart img"
      />
    </section>
  );
}

export default Hero;
