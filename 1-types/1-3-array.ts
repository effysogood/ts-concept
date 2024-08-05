{
  // Array
  const fruits: string[] = ['🍏', '🍎'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple 타입과 길이도 제한
  // ⚠️ 권장하지 않는 방식, 가독성 떨어짐
  // -> interface, type alias, class로 대체
  let student: [string, number];
  student = ['name', 12];
  student[0]; // name
  student[1]; // 12

  // Tuple을 Object Destructuring로
  const [name, age] = student;
}
