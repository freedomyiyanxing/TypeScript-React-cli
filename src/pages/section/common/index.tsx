import React, { Component } from 'react';
import LinkRouter from '../../../common/material-ui/links';

interface IProps {
  str: string
  func: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
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
    const { str, func } = this.props;
    const { count } = this.state;
    return (
      <div className="hahhahahahaha">
        <h2>
          哈哈哈
          {str}
        </h2>
        <span className="spana">{count}</span>
        <LinkRouter to="/theme-setting">跳转</LinkRouter>
        <button type="button" onClick={this.handleClick}>点击一下</button>
        <input type="text" onChange={func} />
      </div>
    );
  }
}

export default Common;
