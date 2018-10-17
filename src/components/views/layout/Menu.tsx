import "src/components/views/layout/Menu.css";
import Team from "src/model/Team";
import ITeam from "src/model/Team";
import * as React from "react";
import MenuHeaderCell from "../cells/MenuHeaderCell";
import TeamCell from "../cells/TeamCell";

interface IMenuProps {
  minimised: boolean;
}

interface IMenuState {
  activeTeam?: ITeam;
}

class Menu extends React.Component<IMenuProps, IMenuState> {
  constructor(props: any) {
    super(props);

    // Bind the this context to the handler function
    this.didSelectItemHandler = this.didSelectItemHandler.bind(this);

    // Set some state
    this.state = {
      activeTeam: undefined
    };
  }

  public didSelectItemHandler(team: ITeam) {
    this.setState({
      activeTeam: team
    });

    // QUESTION: How do I unset the other items?!
  }

  public render() {
    const teams = [
      new Team("1", "All teams", "123 apps, 8680 builds"),
      new Team("2", "FordPass", "Go further"),
      new Team("3", "GoPark", "Park in the park!"),
      new Team("4", "DevOps", "Go Rodney!")
    ];

    return (
      <div id="menu">
        <MenuHeaderCell
          title="LiveUI"
          subtitle="Enterprise mobility"
          icon="https://avatars3.githubusercontent.com/u/34305229"
        />
        {teams.map((team, i) => (
          <TeamCell
            key={i}
            active={
              this.state.activeTeam && this.state.activeTeam.id === team.id
            }
            didSelect={this.didSelectItemHandler}
            team={team}
            icon="https://data.apksum.com/f8/com.ford.fordpass/2.4.0/icon.png"
          />
        ))}
      </div>
    );
  }
}

export default Menu;
