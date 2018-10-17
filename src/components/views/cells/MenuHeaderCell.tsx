import "src/components/views/cells/MenuHeaderCell.css";
import * as React from "react";
// import * as ReactDOM from "react-dom";

interface IMenuHeaderCell {
  title: string;
  subtitle: string;
  icon: string;
}

class MenuHeaderCell extends React.Component<IMenuHeaderCell> {
  public render() {
    const { title, subtitle, icon } = this.props;
    return (
      <div className="header">
        <img src={icon} alt="{title}" />
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    );
  }
}

export default MenuHeaderCell;
