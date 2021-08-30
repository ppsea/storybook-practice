import React from "react";

type THelloProps = {
  /** 보여주고 싶은 이름*/
  name: string;
  /** big === true? h1태그 : p태그 */
  big: boolean;
  /** onClick Hello */
  onHello?: () => void;
  /** onClick Bye */
  onBye?: () => void;
};

/**
 * 안녕하세요
 * - 주석을 달아봤습니다 `hahaha`
 */
const Hello = ({ name, big, onHello, onBye }: THelloProps) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.defaultProps = {
  big: false,
};

export default Hello;
