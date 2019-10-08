import React from 'react';

interface BaProps {
  name: string;
}

const Ba: React.FC<BaProps> = ({ name }: BaProps) => (
  <div>
    我是
    {name}
  </div>
);

interface DetailProps {
  id: number;
}

const Detail: React.FC<DetailProps> = props => {
  const { children, id } = props;
  return (
    <div>
      <Ba name="Ba 22" />
      <div>{children}</div>
      <h2>这是Details</h2>
      <p>{id}</p>
      <div>哈哈哈 喜喜 啥啥啥</div>
    </div>
  );
};

export default Detail;
