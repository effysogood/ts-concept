type SuccessState = {
  state: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  state: 'fail';
  reason: string;
};

type LoadingState = {
  state: 'loading';
};

type ResourceLoadState = SuccessState | FailState | LoadingState;

function printLoginState(state: ResourceLoadState) {
  switch (state.state) {
    case 'loading':
      console.log(`👀 Loading`);
      break;
    case 'success':
      console.log(`👍 ${state.response.body}`);
      break;
    case 'fail':
      console.log(`🙀 ${state.reason}`);
      break;
    default:
      throw new Error(`unknown state: ${state}`);
  }
}

printLoginState({ state: 'loading' });
printLoginState({ state: 'success', response: { body: 'loaded' } });
printLoginState({ state: 'fail', reason: 'no network' });
