/**
   * Generic 
    사용자가 사용할 때 타입을 지정할 수 있으면서도
    유연하게 타입 보장이 됨, 컴파일 시 타입 지정
   */

{
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error('Not valid number');
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('Difficult to guarantee type');
    }
    return arg;
  }

  function checkNotNull<T>(arg: T): T {
    if (arg == null) {
      throw new Error('Checked null type');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
