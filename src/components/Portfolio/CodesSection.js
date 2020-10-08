import React from "react";
import { CODES } from "./Data";
import CodeCard from "./CodeCard";
import Masonry from "react-masonry-component";
import "./CodesSection.css";

function CodesSection() {
  return (
    <>
      <div className="portfolio__codes-section">
        <div className="portfolio__codes-section-container container">
          <h1 className="portfolio__codes-section-head">Codes</h1>
          <Masonry
            className="portfolio__codes-section-cards"
            options={{ gutter: 30, fitWidth: true }}
          >
            {CODES.map((Code) => (
              <CodeCard
                key={Code.id}
                className="grid-item"
                {...Code}
              ></CodeCard>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}

export default CodesSection;
