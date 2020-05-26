import React, { createContext, useCallback } from 'react';

interface ITest {
  name: string;
  ToDo(): void;
}

const TestContext = createContext<ITest>({} as ITest);

const TestProvider: React.FC = ({ children }) => {
  const ToDo = useCallback(() => {
    console.log('ToDo');
  }, []);

  return (
    <TestContext.Provider value={{ name: 'Alex V. ', ToDo }}>
      {children}
    </TestContext.Provider>
  );
};

export { TestContext, TestProvider };
