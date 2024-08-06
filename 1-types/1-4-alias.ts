{
  /**
   * 교차 타입 Intersection (C = A & B)
   * A와 B 타입을 모두 만족하는 경우, 두 가지 이상 가능
   */
  type ProductItem = {
    id: number;
    name: string;
    type: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };

  type ProductItemWithDiscount = ProductItem & { discountAmout: number };

  /**
   * Type Aliases : 타입 별칭
   */

  type Text = string;
  const name: Text = 'effy';
  const address: Text = 'Korea';
  type Num = number;
  const phone: Num = 10101;

  // Object도 타입으로 정의
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'effy',
    age: 20,
  };

  /**
   * String Literal Types
   * 문자열도 타입으로 정의
   */

  type Name = 'name';
  let effyName: Name;
  effyName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isTrue: Boal = true;
}
