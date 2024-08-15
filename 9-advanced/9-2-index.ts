{
  /* Indexed Types */
  const obj = {
    name: 'effy',
  };

  obj.name; // effy
  obj['name']; // effy

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'neutral';
  };
  type Name = Animal['name']; // string
  // const text: Name = 123; !!ERROR!!

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'effy',
    gender: 'female',
  };
}
