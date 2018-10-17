import * as React from "react";
import Menu from "../../views/layout/Menu";
// import { Component } from "react";

// export interface IOuterBaseProps {}

// export interface IOuterBaseState {}

class OuterBase extends React.Component {
  // <IOuterBaseProps, IOuterBaseState> {
  // state = { :  }

  public render() {
    return (
      <div id="container">
        <Menu minimised={false} />
      </div>
    );
  }
}

export default OuterBase;
