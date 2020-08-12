import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { ListItemIcon, ListItem, ListItemText } from "@material-ui/core";
import ChildCareIcon from "@material-ui/icons/ChildCare";

export const Sidebar = () => {
	return (
		<React.Fragment key="left">
			<Drawer anchor={"left"} open={true}>
				<ListItem button key={"Hello There"}>
					<ListItemIcon>
						<ChildCareIcon />
					</ListItemIcon>
					<ListItemText primary={"whojimawhatsit"} />
				</ListItem>
			</Drawer>
		</React.Fragment>
	);
};
