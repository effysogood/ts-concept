{
  // let
  let name = 'hello';
  name = 'hi';

  // const
  const age = 13;
}

{
  /**
   * JavaScript
   * Primitive: number, sring, boolean, bigInt, Symbol, null, undefined
   * Object: function, Array, Object
   */
}

{
  // number
  const num: number = 100;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 단독 사용 X
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined; // null보다 보편적 사용
  }

  // null
  let person: null; // 💩 단독 사용 X
  let person2: string | null;

  // unknown 💩
  // 가능하면 타이을 구체화해서 사용!
  let notSure: unknown = 0;
  notSure = 'him';
  notSure = true;

  // any 💩💩💩
  let anything: any = 0;
  anything = 'hello';

  // void
  // 아무 값도 리턴하지 않는 함수
  // 생략 가능
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //💩💩💩

  // never
  // 절대 리턴되지 않는 경우
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    // while(true){
    //     // Infinite
    // }
  }
  let neverEnding: never; //💩💩💩

  // object
  let obj: object; // 💩 원시 타입을 제외한 모든 타입 할당 가능
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'effy' });
}
