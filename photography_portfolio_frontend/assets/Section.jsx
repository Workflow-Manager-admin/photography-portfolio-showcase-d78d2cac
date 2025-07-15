import React from "react";
import "./Section.css";

/**
 * Section Component - Replicates the layout described in Figma Section FRAME id 1:109.
 * This section follows a vertical stack centered, with heading, subtext, and a call-to-action button.
 * All semantic HTML is used, and structure, spacing, and alignment match the design spec.
 */
const Section = () => (
  <section className="section-root">
    <div className="center-container">
      <div className="center-frame">
        <h2 className="main-heading">Capture the world with us</h2>
        <p className="subtext">
          Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat nisl vel pretium lectus. In ornare quam viverra orci sagittis eu volutpat odio. Euismod nisi porta lorem mollis aliquam ut porttitor leo ac felis.
        </p>
      </div>
    </div>
    <div className="actions-wrap">
      <button className="cta-button">
        Contact us
      </button>
    </div>
  </section>
);

export default Section;
