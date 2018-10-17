import "src/components/views/cells/TeamCell.css";
import ITeam from "src/model/Team";
import * as React from "react";
// import * as ReactDOM from "react-dom";

interface ITeamCell {
  team: ITeam;
  icon?: string;
  didSelect: any;
  active: boolean;
}

class TeamCell extends React.Component<ITeamCell> {
  public static defaultProps = { active: false };

  constructor(props: ITeamCell) {
    super(props);

    this.state = {
      active: false
    };
  }

  public render() {
    const { team, icon, active } = this.props;
    return (
      <div
        className={active ? "active cell" : "cell"}
        onClick={this.handleClick}
      >
        {icon ? (
          <img className="icon" src={icon} alt={team.title} />
        ) : (
          <div className="icon" />
        )}
        <h3>{team.title}</h3>
        <p>{team.subtitle}</p>
      </div>
    );
  }

  // Actions

  private handleClick = () => {
    const { team, didSelect } = this.props;
    didSelect(team);

    this.setState({
      active: true
    });
  };
}

export default TeamCell;
