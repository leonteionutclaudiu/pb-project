import Accordion from 'react-bootstrap/Accordion';
import classes from './Questions.module.css';

function Questions() {
  return (
    <div className={classes.questions}>
      <h3 className={classes.titleText}>
        Frequently asked <br />{' '}
        <span className={classes.questionsSpan}>questions</span>
      </h3>
      <Accordion className={classes.accordion} defaultActiveKey="1">
        <Accordion.Item className={classes.accordionItem} eventKey="0">
          <Accordion.Header className={classes.accordionTitle}>
            <p>How do I change my details?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            TEST TEXT
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className={classes.accordionTitle}>
            <p>What platforms will I be able to use?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            <p>
              We provide only the best trading software. The trading terminal
              MetaTrader4 is the most popular and convenient platform for access
              to global exchanges. You can work anywhere. All you need is the
              Internet because the necessary trading tools are already collected
              in one place and are available in a couple of clicks. Use only the
              best and develop with us!
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className={classes.accordionTitle}>
            <p>How do I change my details?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            TEST TEXT
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className={classes.accordionTitle}>
            <p>How do I change my details?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            TEST TEXT
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className={classes.accordionTitle}>
            <p>How do I change my details?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            TEST TEXT
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className={classes.accordionTitle}>
            <p>How do I change my details?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            TEST TEXT
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header className={classes.accordionTitle}>
            <p>How do I change my details?</p>
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            TEST TEXT
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Questions;
