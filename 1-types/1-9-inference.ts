{
  /**
   * Type Inference
   */

  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); // 숫자라고 타입 유추
}

// 요약!
// 👍 명시적으로 타입을 정의해주는 것이 좋다!
// 👍 스타일 가이드에 따라, 가독성을 위해 통일되게끔 타입을 명시하는게 좋다!
