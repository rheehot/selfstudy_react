// recap
// const add = (a: number, b: number) => a + b;
// call "signature"
// type Add = (a: number, b: number) => number;
// const min: Add = (a, b) => {
//   return a + b;
// };

// Overloading : 함수가 여러개의 call signature를 가지고 있을 때 발생한다.
// 라이브러리나 패키지를 디자인 할 때 자주 사용된다.
/* type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
  (a: number, b: string, c: number): number; // c는 기본적으로 optional이라는 뜻이다.
};
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
// 그래서 c를 적을 때는 물음표와 함께 얘는 number일꺼라는 것을 explicit해주어야 한다.
const plus: Add = (a, b, c?: number) => {
  if (typeof b === "string") return a;
  return a + b + c;
}; */

// polymorphism 다형성 : poly(다양한) + morphism(형태) => 즉 이미 우리는 지난 시간에 overloading을 하면서 하나의 함수 안에 다양한 형태, 다양한 파라미터를 가지고 있는, 그런 함수들을 봤다. 이것 역시 다형성이라고 볼 수 있다.
// concrete type 이전에 본 여러 타입.  generic type은 type들의 Placeholder이다. 그래서 내가 무엇을 적든지 그 placeholder를 타입스크립트가 읽어서 해석할 수 있도록 해준다.
// 여러 타입들이 들어올 수 있다면 그 타입을 일일이 정해주기 보다는 이렇게 제네릭 타입을 사용하면 훨씬 편리하다. 이렇게 해줌으로서 Add는 훨씬 간단하게 다형성을 가질 수 있다.
// 제네릭은 내가 요구한 대로 call signature를 생성하게 해주는 도구이다. 이 부분에서 any와 크게 다르다.
// type Add = {
//     <T>(a: T[]): void;
// };
// type Add = <T, M>(a: T[]) => T;
// type Add = <T, M>(a: T[], b?: M) => T; // 제네릭이 여러 개이면 그냥 순서대로 사용해주면 된다. 이 경우에는 두 번째 파라미터에 해당하는 요소의 타입을 M제네릭이 추론한다.
// const add: Add = (arr) => {
//   arr.forEach((el) => console.log(el));
//   return arr[0];
// };
// add([1, "string", true]); // 제네릭은 사용자가 type을 입력할 수 있도록 허용한다. 그래서 왼쪽과 같이 입력을 하면 number | string | boolean으로 타입된다.

/* 
도움이 되는 댓글 ,,,

Generics

제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법입니다. 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성할 수 있습니다.
(구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.)
타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있습니다.

*/

// Conclusion : 라이브러리를 만들거나 다른 개발자가 사용할 기능을 개발하는 경우엔 제네릭이 유용하다. 그 외 대부분의 경우에는 제네릭을 작성하는 경우는 많이 없다고 한다. 대부분은 만들어 진 제네릭을 사용한다.
// 타입스크립트가 스스로 이게 어떤 타입인지 찾게하는 것이 항상 best이다.

// function Test<V>(a: V[]) {
//   return a[0];
// }
// type Player<M> = {
//   name: string;
//   extraInfo: M;
// };

// const nico: Player<{ favFood: string }> = {
//   name: "nico",
//   extraInfo: {
//     favFood: "kimchi",
//   },
// };

// 제네릭은 함수에서만 사용을 하는 것이 아니다.