// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}

/* 
이건 JSdoc이다. js를 ts에서 쓰는 방법이다. ts에서도 js를 쓸 수 있는데, js를 쓰기 위해서는 allowJs를 tsconfig.json에 설정해두면 된다.
그리고 바로 써도 되지만 js를 ts로 리팩토링 하지 않고도 어느 정도의 call signature효과를 가질 수 있는데 그 방법이 JSdoc이다.

*/
