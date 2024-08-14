interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`Pay for full time worker!`);
  }
  workFullTime() {
    console.log('Working full time');
  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`Pay for part time worker!`);
  }
  workPartTime() {
    console.log('Working part time');
  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩
function badPay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

// -------------------------------------

const effy = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const effyAfterPay = badPay(effy); // 세부 클래스의 정보를 잃어버림
const bobAfterPay = badPay(bob); // as PartTimeEmployee 강제 캐스팅 ❌

effy.workFullTime();
bob.workPartTime();
effy.pay();
