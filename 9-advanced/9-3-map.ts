{
  /* Mapped Types */

  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOpt: VideoOptional = {
    title: 'youtube',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'effy';

  const video: ReadOnly<Video> = {
    title: 'hello',
    author: 'effy',
    description: 'hello effy',
  };
  // video.title = 'change?'; !!ERROR!!

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: 'effy',
    description: 'hello',
  };

  // -------------------------------------

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxyfy<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  function proxyfy<T>(obj: T): Proxyfy<T> {
    const result = {} as Proxyfy<T>;
    for (const key in obj) {
      let value = obj[key];
      result[key] = {
        get: () => value,
        set: (newValue: T[typeof key]) => {
          value = newValue;
        },
      };
    }
    return result;
  }

  // 예시 객체
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: 'effy',
    age: 30,
  };

  const proxiedPerson = proxyfy(person);

  // 속성 접근 및 설정
  console.log(proxiedPerson.name.get()); // effy
  proxiedPerson.name.set('bob');
  console.log(proxiedPerson.name.get()); // bob
}

// https://dev.to/mattzgg_94/typescript-use-mapped-type-to-implement-a-proxy-4im2
