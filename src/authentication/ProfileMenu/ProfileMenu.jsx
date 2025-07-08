import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useAuth } from "../../store/useAuth";

export default function ProfileMenu() {
  const { user, logoutUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
        <Avatar src={user?.photoURL || ""} sx={{ width: 43, height: 43 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          ml={1.5}
        >
          <Typography sx={{ color: "#fff" }} fontWeight="bold">
            {user?.displayName || "unknown user"}
          </Typography>
          <Typography
            sx={{ color: "#fff" }}
            variant="body2"
            color="text.secondary"
          >
            {user?.email || "unknown email"}
          </Typography>
        </Box>
        {open ? (
          <ExpandLessIcon sx={{ color: "#fff" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "#fff" }} />
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 4,
          sx: {
            mt: 1,
            minWidth: 240,
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box px={2} py={1.5}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: 43, height: 43 }} src={user?.photoURL || ""} />
            <Box ml={1.5}>
              <Typography sx={{ color: "#000" }} fontWeight="bold">
                {user?.displayName || "unknown user"}
              </Typography>
              <Typography
                sx={{ color: "#000" }}
                variant="body2"
                color="text.secondary"
              >
                {user?.email || "unknown email"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
        <Divider />

        <MenuItem onClick={(handleClose, logoutUser)} sx={{ color: "red" }}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" sx={{ color: "red" }} />
          </ListItemIcon>
          Log Out
        </MenuItem>
      </Menu>
    </Box>
  );
}
