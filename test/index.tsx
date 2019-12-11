import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import Common from '../src/pages/section/common/index';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });


describe('renders three <Common> components', () => {
  const warpper = shallow(<Common str="这是一个props" />);

  it('should render App', () => {
    console.log(warpper.debug())
  });
  it ('必循包含一个H2标签', () => {
    expect(warpper.find('h2').length).toBe(1)
  });
  it ('class 为 hahhahahahaha 的标签 能被正常渲染', () => {
    expect(warpper.find('.hahhahahahaha').exists()).toBeTruthy();
  });

  it ('class 为 hahhahahahaha 的标签 有4个子元素', () => {
    expect(warpper.find('.hahhahahahaha').children().length).toBe(4)
  });

  it ('button 标签的 内容', () => {
    expect(warpper.find('button').text()).toBe('点击一下')
  });

  it ('LinkRouter 是 link ', () => {
    expect(warpper.find('LinkRouter'))
  });
  it('测 组件的 props', () => {
    expect(warpper.props())
  })
});
