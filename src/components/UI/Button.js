import classes from './Button.module.css';
const Button = (props) => {

    return (
        <button onClick={props.onClick} type={props.type || 'button'} className={classes.button}>
            {props.children}
        </button>
    );

}

export default Button