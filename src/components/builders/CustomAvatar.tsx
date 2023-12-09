import React, {useState} from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineLogout } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { logoutBusiness } from "api/services/auth";
import { Link } from "react-router-dom";

const CustomAvatar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const logOut = () => {
		logoutBusiness()
		window.location.replace("/")
	}

	return (
		<>
			<Box data-testid="avatar-container">
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						data-testid="avatar-icon-button"
					>
						<Avatar sx={{ width: "32px", height: "32px", marginX: "8px" }} data-testid="avatar-component"/>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						}
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				data-testid="avatar-dropdown-menu"
			>
				<Link to="/profile">
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<Avatar sx={{ width: "24px", height: "24px" }} />
						</ListItemIcon>
						Profile
					</MenuItem>
				</Link>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<MdNotificationsNone size={24} />
					</ListItemIcon>
					Notifications
				</MenuItem>
				<Divider />
				<MenuItem onClick={() => {handleClose(); logOut()}}>
					<ListItemIcon>
						<AiOutlineLogout size={24} />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export default CustomAvatar;
