/* 
  class는 template이다. 데이터가 없다.
  object는 class에 데이터를 넣으면 객체가 된다. (ES6)
*/

/*
class Person {
  constructor(name, age) {    // fields
    this.name = name;
    this.age = age;

  };

  speak() {       // 메서드
    console.log(`${this.name}: hello!!!`);

  }
}

const adam = new Person('adam', 40);
console.log(adam);          // Person {name: 'adam', age: 40} 출력
console.log(adam.name);     // adam 출력
console.log(adam.age);      // 40 출력
adam.speak();
*/

// Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

  }

  get age() {
    return this._age;

  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }

}

const user1 = new User('hong', 'kil', -1);
console.log(user1.age);

// 생성자없이 필드를 작성하면 public, #를 붙히면 private
class Experiment {
  publicField = 2;
  #privateField = 0;

}

const exper = new Experiment();
console.log(exper.privateField);
console.log(exper.publicField);

/* 
    static - static을 붙히면 클래스 멤버가 된다.
    따라서 static에 접근하기 위해서는 클래스 이름으로 접근해야 한다.
    각 객체마다 만들어지지 않고 공통으로 사용되는 데이터는 메서드에 사용
*/
class Article {
  static publisher = 'Dream Coding';

  constructor(articleNumber) {
    this.articleNumber = articleNumber;

  }

  static printPublisher() {
    console.log(Article.printPublisher);

  }
}

const article1 = new Article(1);
console.log(Article.publisher);

// inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;

  }

  draw() {
    console.log(`drawing ${this.color} color of`);

  }

  getArea() {
    return this.width * this.height;

  }

};

class Rectangle extends Shape {

};

const rectangle = new Rectangle(20, 20, 'blue');

rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
  getArea() {
    return ((this.width * this.height) / 2);

  }
}

const triangle = new Triangle(20, 20, 'blue');
console.log(triangle.getArea());

// instanceof
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

class Counter {
  constructor() {
    this.count;

  }

  increase() {
    this.count++;
    console.log(this.count);

  }
}

const colCount = new Counter();   // new 키워드로 객체를 생성하면 constructor를 실행
colCount.increase();
colCount.increase();
colCount.increase();

colCount.abc = true;
console.log(colCount.abc);