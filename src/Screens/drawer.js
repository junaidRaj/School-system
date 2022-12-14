import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate } from "react-router-dom";
import Registration from "./registration";
import CourceForm from "./adminConfig/courceForm";
import CreateResult from "./adminConfig/createResul";
import Quiz from "./adminConfig/createQuiz";
import Country from "./adminConfig/country";
import City from "./adminConfig/city";
import Trainer from "./adminConfig/Trainer";
import StudentsList from "./Students";
import TrainerData from "./adminConfig/TrainerData";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const [menuLinks,SetMenulinks] = React.useState([
  
      {
        displayName: "CourseForm",
            routeName:   "Trainer",
        },
        {
            displayName: "Trainer Data",
            routeName:   "trainerData",
        },
        {
            displayName: "studentList",
            routeName:   "stdlist",
        },
        {
            displayName: "Create Quiz",
            routeName:   "createQuiz",
        },
        {
            displayName: "Country",
            routeName:   "country",
        },
        {
            displayName: "Cities",
            routeName:   "city",
        },
        {
            displayName: "Create Result",
            routeName:   "createResult",
        },
    ]);

const navidate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let clickNavigate = (routeName) =>{
    navidate(routeName);
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuLinks.map((x, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={()=>clickNavigate(x.routeName)}>
                {i % 2 === 0 ?<InboxIcon/>:<MailIcon/>}
              {/* <ListItemIcon>{text.icon()}</ListItemIcon> */}
              <ListItemText primary={x.displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Routing */}
        <Routes>
          <Route path="registration" element={<Registration />} />
         <Route path="createQuiz" element={<Quiz/>} />
          <Route path="country" element={<Country/>} />
          <Route path="city" element={<City/>} />
          <Route path="Trainer" element={<Trainer/>} />
          <Route path="createResult" element={<CreateResult/>} />
          <Route path="stdList" element={<StudentsList/>}/>
          <Route path="trainerData" element={<TrainerData/>}/>
          </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
