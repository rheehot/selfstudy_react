import "styled-components";

// styled-components를 import하고 styled-components의 테마 정의를 확장하는 것이다.
// styled-components의 DefaultTheme을 확장하는 것이다.
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
