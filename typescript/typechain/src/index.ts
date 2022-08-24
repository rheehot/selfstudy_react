import crypto from "crypto";

/* 
hash는 블록의 고유 서명과 같은 것이다. prevHash, height, data 값을 통해서 새로운 해쉬값을 생성해야 한다.
즉, 데이터가 변하지 않으면 해쉬값도 변하지 않는다. 이게 블록체인에서 블록을 보호하는 방법이다.

static함수 ::: 클래스에서 사용하는 메소드인데 클래스 '인스턴스가 없어도' 부를 수 있는 함수이다. 클래스 안에서 쓰기 위해서는 해당 클래스 이름을 쓰고 호출하면 된다.

import * as crypto from "crypto";
이렇게 Import를 하기 싫으면 esModuleInterop 설정을 tsconfig에 추가해주면 된다. 이건 ES6모듈 사양을 준수하여 CommonJS모듈(require쓰는)을 가지고 올 수 있게 된다.
js에는 여러 시스템과 모듈이 존재한다. module 항목은 import 문법을 뭘 쓸지를 정해주는 것.
=> module을 commonJS 기준으로 해주고, 이렇게 하면 Import를 사용할 수 없기 때문에 esModuleInterop을 true로 해서 Import를 사용할 수 있게 해주는 것 같다.
*/

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
  }
}
