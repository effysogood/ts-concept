{
  /**
   * Discriminated Union
   * 리터럴 멤버 속성이 있는 클래스가 있다면 그 속성으로 유니원 구성원을 구별할 수 있다.
   * 구별 속성(kind, type)에 대해 타입 가드 스타일의 검사(==, ===, !=, !==)
   * 또는 switch를 사용하면 TS가 특정한 리터럴을 가진 객체를 대상으로 한다는 것을 알아채고 타입 좁히기를 실행
   */

  interface Square {
    kind: 'square';
    size: number;
  }
  interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }
  type Shape = Square | Rectangle;

  function area(s: Shape) {
    if (s.kind === 'square') {
      // kind 키워드로 s=squre 인식
      // 그러므로 'Square'의 멤버를 안전하게 사용 가능
      return s.size * s.size;
    } else {
      // 'Square'이 아니면? TS는 'Reactangle'임을 인식
      // 그러므로 'Reactangle'의 멤버를 안전하게 사용 가능
      return s.width * s.height;
    }
  }

  // --------------------------

  // function: login -> success / fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    // 예제 사용자 데이터베이스 (일반적으로 DB로 대체)
    const usersDB: { [key: string]: string } = {
      // 인덱스 시그니처를 사용하여 동적 키 접근을 허용
      user1: 'password1',
      user2: 'password2',
    };

    // 유효성 검사
    if (!id || !password) {
      return {
        result: 'fail',
        reason: 'Invalid input',
      };
    }

    // 사용자 존재 확인 및 비밀번호 검증
    const userPassword = usersDB[id];
    if (userPassword && userPassword === password) {
      return {
        result: 'success',
        response: {
          body: `Welcome, ${id}!`,
        },
      };
    } else {
      return {
        result: 'fail',
        reason: 'Invalid credentials',
      };
    }
  }

  // 테스트
  const result = login('user1', 'password1');
  console.log(result);

  // printLoginState(state: LoginState)
  function printLoginState(state: LoginState): void {
    if (state.result === 'success') {
      console.log(`👏 ${state.response.body}`);
    } else {
      console.log(`🥹 ${state.reason}`);
    }
  }
}
