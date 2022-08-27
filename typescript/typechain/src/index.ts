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

/* 
타입스크립트로 작성되지 않은 패키지를 import할 때 타입 정의를 일일이 다 적고 싶지는 않다고 한다.(강의에서는 crypto를 import했을 때 에러가 안났다. 아마 이미 타입이 된 것으로 보인다.)
이걸 하려고 하면 d.ts에 라이브러리의 타입을 해주어야 한다.
하지만 크립토 패키지를 쓰려고 할 때 마다, 정의 파일을 만들고 있을 순 없다. 그래도 패키지를 ts에 설명해주고 보호기능을 사용하고 싶은데...

지금부터 ts로 만들어지지 않은 패키지를 받았는데 타입 정의도 하나도 없을 때 어떻게 하는지 배워보자.

그 답은, DefinitelyType!
콘솔을 통해서 설치하면 된다. npm i -D @types/something

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
    return crypto.createHash("sha-256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  // 이전 블록을 불러와주는 메소드
  private getPrevHash() {
    // 하나도 없으면 이전 해쉬가 없는 것이다.
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  // 블록을 추가해주는 메소드
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    // 새 블록을 push
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return this.blocks;
  }
}
