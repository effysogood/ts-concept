{
  /**
   * Type Assertions 💩
   * 100% 타입을 장담할 경우에만 사용하도록
   */

  function jsStrFunc(): any {
    // return 'hello';
    return 2;
  } // JS 시스템적으로 any, 하지만 분명히 string을 반환!

  const result = jsStrFunc();
  console.log((result as string).length); // 문자라고 타입 캐스팅
  console.log((<string>result).length);
  // 숫자인 경우는 undefined 출력. Why? 문자열이라고 강제 타입 변환을 했기 때문.

  const wrong: any = 8;
  console.log((wrong as Array<number>).push(1)); // !! ERROR !!

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers?.push(2); // optional
  numbers!.push(2); // 🙀 ! 확신 100%

  const button = document.querySelector('class')!; // 🙀 ! 확신 100%
  button?.nodeValue; // 혹은 null일수도 있기에 물음표로 에러 방지
}
