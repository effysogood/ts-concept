{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  //✱ Object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 2,
  };

  //✱ Class
  class Pos1 implements PositionType {
    constructor(x: number, y: number) {}
    x: number = 0;
    y: number = 1;
  }
  class Pos2 implements PositionInterface {
    constructor(x: number, y: number, z: number) {}
    x: number = 0;
    y: number = 1;
    z: number = 2;
  }

  //✱ Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  //✅ Only interfaces can be merged!
  interface PositionInterface {
    z: number;
  } // interface 결합 가능

  // type PositionType{} !!ERROR!!

  // ✅ Type aliases can use computed properties
  type Person = {
    name: 'effy';
    age: 10;
  };
  type Name = Person['name']; // indexed access type
  type Job = 'developer' | 'accoutant'; // union
}
