import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModelOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.tittle}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          onConfirm={props.onConfirm}
          tittle={props.tittle}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModel;
