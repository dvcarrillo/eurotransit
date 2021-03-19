import React from "react";
import chroma from "chroma-js";

import theme from "../../src/theme.json";

const Legend = ({ limits, transportation }) => {
    const [max, min] = limits
    const range = [theme.map[transportation].min, theme.map[transportation].max];
    const color_range = chroma.scale(range).domain([min, max]).colors(8);
    return (
        <div className="legend">
            <div className="legend__colors">
                {color_range.map((opt) => (
                    <div style={{ backgroundColor: opt, width: "30px", height: "10px" }}></div>
                ))}
            </div>
            <div className="legend__description">
                <div className="legend__text">{transportation == 'plane' ? (min / 1000).toFixed(0) : min}{transportation == 'plane' ? 'K' : ''} passengers</div>
                <div className="legend__text">{(max / 1000000).toFixed(0)}M passengers</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
