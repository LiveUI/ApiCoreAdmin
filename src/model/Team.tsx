export default interface ITeam {
  id?: string;
  title: string;
  subtitle: string;
}

export default class Team implements ITeam {
  public id?: string;
  public title: string;
  public subtitle: string;

  constructor(id: string, title: string, subtitle: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
  }
}
