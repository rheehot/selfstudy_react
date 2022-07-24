import add from "./calculator";
// 테스트 케이스
// 테스트 슈트의 이름은 "add test"
// 뭘 비교할 건지는 두 번째 callback에서 쓸 수 있다.
it("add test", () => {
  expect(add(1, 2)).toBe(3);
});

test("add test2", () => {
  expect(add(1, 2)).toBe(2);
});

describe("test descript", () => {
  it("add test", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("add test2", () => {
    expect(add(1, 2)).toBe(2);
  });
});
