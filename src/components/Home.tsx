import React from 'react';
import { Button, Input } from '@material-ui/core';

import Account from './Account';
import Detail from './Detail';

const { useEffect, useState } = React;

export interface HelloProps {
  compiler: string;

  framework: string;
}

const Home: React.FC<HelloProps> = (props) => {
  const { compiler, framework, children } = props;
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('this is useEffect 啊哈哈');
    console.log('2221');
  }, []);

  const handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count + 1);
    console.log(e);
  };

  return (
    <div>
      <h1>
        Hello 1 from
        {compiler}
        and
        {framework}
      </h1>
      <Detail id={1125678}>
        <div>hah222</div>
      </Detail>
      <Input />
      <Button type="button">Add</Button>
      <Account name="freedom.yi" email="851989962@qq.com" />
      <span>{children}</span>
      <p>
        点一下加1
        {count}
      </p>
      <button type="button" onClick={handleClickAdd}>
        Add
      </button>
    </div>
  );
};

export default Home;
