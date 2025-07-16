import React, { ReactElement, useEffect } from "react";
import { MediaQueries } from "../MediaQueries";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import { CONTROLS, INSTA_LINK } from "../domain/consts";

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
    <ul className={`nav-ul ${className}`}>
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
      {CONTROLS.registrationLive && (
        <li className={`nav-item fdr fjc ${props.active === "register" ? "active" : ""}`}>
          <a href="/register" className="nav-link">
            Register
          </a>
        </li>
      )}
      {CONTROLS.showThanks && (
        <li className={`nav-item fdr fjc ${props.active === "thanks" ? "active" : ""}`}>
          <a href="/thanks" className="nav-link">
            Thanks
          </a>
        </li>
      )}
      <li className="fdr fjc nav-item radius icon">
        <a href={INSTA_LINK} target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/instagram.svg"
            alt="INSTAGRAM"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      </li>
      <li className="fdr fjc nav-item radius icon">
        <a
          href="https://www.facebook.com/groups/135066862931505/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/facebook.svg" alt="FACEBOOK" style={{ width: "24px", height: "24px" }} />
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
            <img src="/icons/bars.svg" alt="MENU" style={{ width: "24px", height: "24px" }} />
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
