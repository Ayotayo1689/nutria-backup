import React, { FC, useState } from "react";
import "./scroll-selector.styles.scss";
import { IScrollSelectorProps } from "./scroll-selector.types";

// Scroll Selector Component
const ScrollSelector: FC<IScrollSelectorProps> = (props) => {
  const { items, onSelect } = props;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onSelect(items[index]);
  };

  return (
    <div className="scroll__selector">
      <ul className="scroll__item-list">
        <div className="list__flex-container">
          {items.map((item, index) => (
            <li
              key={index}
              className="list__item"
              onClick={() => handleItemClick(index)}
            >
              <p className="item">{item}</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ScrollSelector;
