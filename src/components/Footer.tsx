import React, { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-white footer width-100">
      <div className="container">
        <div>&copy; 2024 Seattle Distance Skating Club</div>
        <div>Event sponsored by <a href="https://usa.shop-task.com/">SHOP TASK</a></div>
        <div>
          <span>
            Site by Anne LoVerso
          </span>
          <span className="mhs">•</span>
          <span>
            <a href="/thanks">Acknowledgements</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
