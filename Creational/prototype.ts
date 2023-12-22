// 프로토타입 인터페이스
interface Monster {
   clone(): Monster;
   initialize(): void;
   displayInfo(): void;
}

// 구체적인 몬스터 프로토타입
class BasicMonster implements Monster {
   private health: number;
   private attackPower: number;

   constructor() {
      this.health = 100;
      this.attackPower = 10;
   }

   clone(): Monster {
      const cloneMonster = new BasicMonster();
      cloneMonster.initialize(); // 몬스터 초기화
      return cloneMonster;
   }

   initialize(): void {
      // 복잡한 초기화 로직
      // 예: 특별한 스킬 추가, 랜덤한 체력 부여 등
      this.increaseHealth(); // 피 통 증가
   }

   private increaseHealth(): void {
      // 피 통을 정확한 값으로 설정
      this.health = 120;
   }

   displayInfo(): void {
      console.log(`Monster - Health: ${this.health}, Attack Power: ${this.attackPower}`);
   }
}

// 클라이언트 코드
const prototypeMonster = new BasicMonster();
const monsterA = prototypeMonster.clone();
const monsterB = prototypeMonster.clone();

monsterA.displayInfo(); // 출력: Monster - Health: 120, Attack Power: 10
monsterB.displayInfo(); // 출력: Monster - Health: 120, Attack Power: 10
