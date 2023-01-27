import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={`${classes.section2Card} ${props.translateClass}`}>
      <div className={props.borderClass2}></div>
      <div className={classes.section2CardText}>
        <p className={classes.section2Nr}>{props.number} </p>
        <h3 className={classes.section2Subtitle}>{props.title}</h3>
        <p className={classes.section2Text}>{props.text}</p>
      </div>
      <div className={props.borderClass}></div>
    </div>
  );
}

export default Card;
