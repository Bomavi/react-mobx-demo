import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			width: 60,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		checkbox: {
			'&:disabled': {
				'& svg': {
					fill: theme.palette.text.disabled,
				},
			},
		},
	})
);
