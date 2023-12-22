//  빌더 패턴은 복잡한 객체의 생성을 해당 객체의 표현으로부터 분리하는 생성 디자인 패턴

class Burger {
   public name: string;
   public bread: number;
   public cheese: number;
   public meat: number;
   public pickle: number;
   public lettuce: boolean;

   constructor(name: string, bread: number, cheese: number, meat: number, pickle: number, lettuce: boolean) {
      this.name = name;
      this.bread = bread;
      this.cheese = cheese;
      this.meat = meat;
      this.pickle = pickle;
      this.lettuce = lettuce;
   }
}

class BurgerBuilder {
   private burger: Burger;

   constructor(name: string) {
      this.burger = new Burger(name, 0, 0, 0, 0, false);
   }

   public addBread(bread: number): this {
      this.burger.bread = bread;
      return this;
   }

   public addCheese(cheese: number): this {
      this.burger.cheese = cheese;
      return this;
   }

   public addMeat(meat: number): this {
      this.burger.meat = meat;
      return this;
   }

   public addPickle(pickle: number): this {
      this.burger.pickle = pickle;
      return this;
   }

   public addLettuce(lettuce: boolean): this {
      this.burger.lettuce = lettuce;
      return this;
   }

   public build(): Burger {
      return this.burger;
   }
}
// Builder 패턴 X
const burgerContentsNoBuilder = new Burger('Cheese Burger', 2, 5, 1, 3, true);
console.log(burgerContentsNoBuilder);

// Builder 패턴 O
const burgerContents = new BurgerBuilder('cheese Burger')
   .addBread(2)
   .addCheese(5)
   .addMeat(1)
   .addPickle(3)
   .addLettuce(true)
   .build();

console.log(burgerContents);
