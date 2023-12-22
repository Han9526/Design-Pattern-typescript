// 장점 확장성,테스트 Good
// 단점 코드의 양 많아지고 코드파악난이도 올라감

// // 생성하는 함수를  팩토리클래스를 만들어서 구현한것이 팩토리메소드?

// class Weapon {
//    type: string;

//    constructor(type: string) {
//       this.type = type;
//    }

//    fire() {
//       console.log('총소리');
//    }
// }

// class Shotgun extends Weapon {
//    name: string;

//    constructor(type: string, name: string) {
//       super(type);
//       this.name = name;
//    }

//    fire() {
//       console.log('퉁');
//    }
// }

// class Sniper extends Weapon {
//    name: string;

//    constructor(type: string, name: string) {
//       super(type);
//       this.name = name;
//    }

//    fire() {
//       console.log('뾱');
//    }
// }
