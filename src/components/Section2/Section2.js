import Card from '../Card/Card';
import classes from './Section2.module.css';

function Section2() {
  return (
    <section className={classes.section2}>
      <h2 className={classes.titleText}>
        Getting Started Is <br />
        <span className={classes.section2Span}>Fast & Easy</span>
      </h2>
      <div className={classes.section2Cards}>
        <Card
          borderClass={classes.section2FirstBorder}
          number="01."
          title="Register"
          text="Complete the simple registration to get your trading credentials."
        />
        <Card
          translateClass={classes.translateUp30}
          borderClass2={classes.section2SecondBorder}
          number="02."
          title="Verification"
          text="Big Invest is required to verify your identity, upload your
          documents quickly and get approved in minutes."
        />
        <Card
          translateClass={classes.translateUp60}
          borderClass={classes.section2FirstBorder}
          number="03."
          title="Deposit funds"
          text="Big Invest accepts credit cards and bank wires. Just use the
          secure deposit form and follow the steps."
        />
        <Card
          borderClass2={classes.emptyBorder}
          translateClass={classes.translateUp90}
          number="04."
          title="Register"
          text="Once your deposit has been credited, you can begin trading
          instantly. In no time you will see profits rolling into your
          account."
        />
      </div>
    </section>
  );
}

export default Section2;
