import { FC, memo } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Icon, IconName } from 'views/elements';

interface DrawerItemProps {
	iconName: IconName;
	text: string;
	caption?: string;
	inProgress?: boolean;
	onClick: () => void;
}

const DrawerItem: FC<DrawerItemProps> = memo(
	({ iconName, text, caption, inProgress = false, onClick }) => {
		return (
			<ListItem button onClick={onClick}>
				<ListItemIcon>
					{inProgress ? (
						<CircularProgress size={18} thickness={4} color="inherit" />
					) : (
						<Icon name={iconName} svgSize="md" />
					)}
				</ListItemIcon>
				<ListItemText primary={text} secondary={caption} />
			</ListItem>
		);
	}
);

export { DrawerItem };
