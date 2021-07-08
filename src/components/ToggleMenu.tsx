import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Tab from '@material-ui/core/Tab';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size="large"
            >
                <MenuIcon />
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/">
                        <Tab icon={<HomeIcon />} label="HOME" />
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/charts">
                        {' '}
                        <Tab icon={<BarChartIcon />} label="CHARTS" />
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/other">
                        <Tab icon={<PersonPinIcon />} label="OTHER" />
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
