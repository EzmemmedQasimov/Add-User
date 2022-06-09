import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Wrapper from "../Helper/Wrapper";

const ErrorModal = (props) => {
    return (
        <Wrapper>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h1>{props.title}</h1>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </Card>
        </Wrapper>
    );
}
export default ErrorModal