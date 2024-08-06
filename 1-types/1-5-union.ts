{
  /**
   * Union Types (A | B)
   * A 또는 B 타입 중 하나가 될 수 있는 경우
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right'); // 자동으로 인자 목록 업데이트

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success / fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in',
      },
    };
  }

  // printLoginState(state: LoginState)
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`👏 ${state.response.body}`);
    } else {
      console.log(`🥹 ${state.reason}`);
    }
  }
}
