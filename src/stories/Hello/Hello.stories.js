import React from "react";
import Hello from "./Hello";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import mdx from "./Hello.mdx";

export default {
  title: "components|basic/Hello", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx,
    },
  },
};

export const hello = () => {
  const big = boolean("big", false);
  const name = text("name", "Storybook");
  return (
    <Hello
      name={name}
      big={big}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};
hello.story = {
  name: "Default",
};

/**
 * standard 버전입니당
 */
export const standard = () => <Hello name="Storybook" />;

/**
 * big 버전입니당
 */
export const big = () => <Hello name="Storybook" big />;

// text: 텍스트를 입력 할 수 있습니다.
// boolean: true/false 값을 체크박스로 설정 할 수 있습니다.
// number: 숫자를 입력 할 수 있습니다. 1~10과 같이 간격을 설정 할 수도 있습니다.
// color: 컬러 팔레트를 통해 색상을 설정 할 수 있습니다.
// object: JSON 형태로 객체 또는 배열을 설정 할 수 있습니다.
// array: 쉼표로 구분된 텍스트 형태로 배열을 설정 할 수 있습니다.
// select: 셀렉트 박스를 통하여 여러가지 옵션 중에 하나를 선택 할 수 있습니다.
// radios: Radio 버튼을 통하여 여러가지 옵션 중에 하나를 선택 할 수 있습니다.
// options: 여러가지 옵션을 선택 하는 UI 를 커스터마이징 할 수 있습니다 (radio, inline-radio, check, inline-check, select, multi-select)
// files: 파일을 선택 할 수 있습니다.
// date: 날짜를 선택 할 수 있습니다.
// button: 특정 함수를 실행하게 하는 버튼을 만들 수 있습니다.
// 위 Knobs 들의 자세한 스펙은 https://www.npmjs.com/package/@storybook/addon-knobs#available-knobs
// const big = boolean('big', false, 'Group 1'); 그룹지정가능
