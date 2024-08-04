// {
//   // JavaScript
//   function jsAdd(num1, num2) {
//     return num1 + num2;
//   }

//   // TypeScript✨
//   function add(num1: number, num2: number): number {
//     return num1 + num2;
//   }

//   // JavaScript 💩
//   function jsFetchNum(id) {
//     // code..
//     // code..
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }

//   // TypeScript✨
//   function fetchNum(id: string): Promise<number> {
//     // code..
//     // code..
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }
// }

{
  // JavaScript✨ => TypeScript✨
  // Optional parameter
  function printName(fristName: string, lastName?: string) {
    console.log(`${fristName} ${lastName}`);
  }
  printName('saeyoung', 'choi');
  printName('saeyoung');

  // Default Parameter
  function printMessage(message: string = 'Default Message') {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(1, 2, 3);
}
