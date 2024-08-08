{
  /**
   * Enum
   * 여러 가지의 관련(연관)된 상수 값들을 모아 관리
   */

  // JS
  const MAX_NUM = 10;
  const MAX_STUDENTS_PER_CLASS = 20;
  const MONDAY = 0;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TS
  // 앞 첫글자만 대문자
  // (Default) 0부터 하나씩 값을 증가
  // 별도 문자열 및 숫자 할당도 가능

  enum Days {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thurday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
  }
  console.log(Days.Monday);
  let day: Days = Days.Thursday;
  day = Days.Thursday;
  // day = 10;
  console.log(day);

  // ✅ Enum은 String Literal로 대체되어 사용하기에
  // 굳이 사용하지 않고, union 타입으로 대체되어 타입 보장 가능하다.
  // ✅ 이전에는 다른 값을 할당하는 것이 가능했지만 ts5부터 해당 에러 해결됨
  // 그리고 숫자 할당시에도 자동 할당됨 (+1씩)

  type DaysOfWeek = 'monday' | 'tuesday';
  enum Days2 {
    Monday = 1,
    Tuesday = 2,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days2.Friday); // 5

  // ✅ 추가 코멘트
  // union타입으로 심플하게 대체 가능한 경우라면 enum 보다는 union을 더 선호
  // 하지만, 코딩 하다 보면 enum타입이 적합할 경우가 있다
  // 그럴때는 enum 사용해도 됨 👍

  type Errors1 =
    | 'error message simple version'
    | 'error message complicated version'
    | 'error message complicated detail version';

  // 이렇게 복잡한 union대신

  enum Errors {
    Short = 'error message simple version',
    Long = 'error message complicated version',
    Detail = 'error message complicated detail version',
  }

  // 그럼 변수를 할당하는 곳에서 긴 문자열을 (union인 경우)
  // 계속 반복해서 쓰는것이 아니라 깔끔하게 아래 처럼 쓸 수 있을 것

  Errors.Short; // 🥳👍
  // console.log(Errors.Short);
}

// 요약 : 대체로 Union 타입으로 대체되어 사용 가능, 상황에 따라 판단 👀
