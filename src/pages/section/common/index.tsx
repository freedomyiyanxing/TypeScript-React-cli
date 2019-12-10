import React, { Component } from 'react';
import LinkRouter from '@my-common/material-ui/links';

interface IProps {
  str?: string
}

interface IState {
  count: number
}

class Common extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    console.log(props);
  }

  readonly state: IState = {
    count: 0,
  };

  readonly handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
    console.log(e);
  };


  render(): React.ReactElement<React.JSXElementConstructor<any>> {
    const { count } = this.state;
    return (
      <div>
        <h2>哈哈哈</h2>
        <span>{count}</span>
        <LinkRouter to="/theme-setting">跳转</LinkRouter>
        <button type="button" onClick={this.handleClick}>点击一下</button>
      </div>
    );
  }
}

export default Common;
