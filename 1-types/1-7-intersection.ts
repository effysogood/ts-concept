{
  /**
   * Intersection Types: AND (&)
   * 여러 타입을 모두 만족하는 하나의 타입을 의미한다.
   */

  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWorker(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  internWorker({
    name: 'effy',
    score: 30,
    employeeId: 1,
    work: () => console.log('Hard working'),
  });
  // student 타입과 worker 타입 정의를 모두 만족해야함!
}
