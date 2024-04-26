import { Menu, useMediaQuery } from "@material-ui/core";
import React, { ReactElement, useEffect } from "react";
import { MediaQueries } from "../MediaQueries";

interface Props {
  active: string;
}

export const NavBar = (props: Props): ReactElement => {
  const isTablet = useMediaQuery(MediaQueries.desktopAndUp);

  useEffect(() => {
    if (isTablet) handleClose();
  }, [isTablet]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navUl = (className: string) => (
    <ul className={className}>
      <li className={`nav-item fdr fjc ${props.active === "home" ? "active" : ""}`}>
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className={`nav-item fdr fjc ${props.active === "schedule" ? "active" : ""}`}>
        <a href="/schedule" className="nav-link">
          Schedule
        </a>
      </li>
      <li className={`nav-item fdr fjc ${props.active === "faq" ? "active" : ""}`}>
        <a href="/faq" className="nav-link">
          FAQ
        </a>
      </li>
      <li className={`nav-item fdr fjc ${props.active === "media" ? "active" : ""}`}>
        <a href="/media" className="nav-link">
          Media
        </a>
      </li>
      <li className="fdr fjc nav-item radius icon">
        <a href="https://www.instagram.com/seattle_weekly_distance_skate/">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
      </li>
      <li className="fdr fjc nav-item radius icon">
        <a href="https://www.facebook.com/groups/135066862931505/">
          <i className="fa-brands fa-facebook fa-xl"></i>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="font-lilita text-xl text-black">Seattle Spicy Salmon Roll</span>
        </a>
        <div className="mobile-only">
          <button
            id="menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </div>

        <Menu
          id="basic-menu"
          className="text-d font-sans"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu",
          }}
        >
          {navUl("fdc fac")}
        </Menu>

        {navUl("desktop-only fdr")}
      </div>
    </nav>
  );
};
