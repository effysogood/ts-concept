{
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
