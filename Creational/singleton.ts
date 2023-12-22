class SingleTon {
   private static instance: SingleTon;

   public name: string;
   public position: string;

   private constructor(name: string, position: string) {
      this.name = name;
      this.position = position;
   }

   public static getInstance() {
      if (!SingleTon.instance) SingleTon.instance = new SingleTon('싱글턴 객체', '중대장');
      return SingleTon.instance;
   }
}

// let getSingleTonObject = new SingleTon('싱글턴 객체', '중대장');

let getSingleTonObject = SingleTon.getInstance();
console.log('직책: ' + getSingleTonObject.position);
console.log('이름: ' + getSingleTonObject.name);
