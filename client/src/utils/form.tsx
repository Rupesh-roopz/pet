import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root : {
		'& .MuiFormControl-root' : {
			width : '80%',
			margin : theme.spacing(1),

		},
		'& .MuiInputBase-input ' : {
			fontSize : '22px' 
		}
		
		
	}
}));

const Form = (props: any) => {

	const classes = useStyles();
	const { children, ...other } = props;
	return (
		<form className={classes.root} autoComplete="off" {...other}>
			{props.children}
		</form>
	);
};


export  default Form;