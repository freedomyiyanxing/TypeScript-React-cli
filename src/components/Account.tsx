import * as React from 'react';

interface AccountProps {
  name: string;

  email: string;
}

const Account: React.FC<AccountProps> = props => {
  const { name, email } = props;
  return (
    <div>
      <h2> 个人账户 1</h2>
      <p>{name}</p>
      <div>{email}</div>
    </div>
  );
};

export default Account;
