var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Data Type: String
var helloWorld = 'Hello World';
console.log(helloWorld);
//Data Type: Array
var cars = ['BMW', 'Audi', 'Mercedes'];
console.log(cars);
//Data Type: Tuple
var user = ['John', 25, true, 'Admin'];
console.log(user);
//Data Type: object
var bus;
bus = { name: 'BMW', model: 2019, mensei: 'M3' };
console.log(bus);
console.log(bus.name);
//Data Type: enum
var Color;
(function (Color) {
    Color["Red"] = "K\u0131rmz\u0131";
    Color["Green"] = "Ye\u015Fil";
    Color["Blue"] = "Mavi";
})(Color || (Color = {}));
;
/*enum Color {Red, Green, Blue};
console.log(Color.Green);
output: 1 (default olarak 0 dan başlar)*/
console.log(Color.Green);
//Data Type: union
var myUnion;
myUnion = 'Hello';
console.log(myUnion);
myUnion = 25;
console.log(myUnion);
//Data Type: any
var myAny;
myAny = 'Hello';
console.log(myAny);
myAny = 25;
console.log(myAny);
myAny = true;
console.log(myAny);
myAny = { name: 'John', age: 25 };
console.log(myAny);
var arr = ['John', 2, true];
console.log(arr);
/*let person={}
person.name = 'John'; //error*/
var person = {};
person.name = 'John'; //ok
console.log(person);
/*const person: Person = {
    name: 'John',
    age: 25,
    isMarried: false,
    sayHello: () => {
        console.log('Hello, My name is John');
    }
}*/
//FUNCTİONS IN TYPESCRİPT
function namePrint(name, surname) {
    console.log(name + " " + surname);
}
namePrint('John', 'Doe');
function sayHello() {
    console.log('Hello, My name is void function');
}
sayHello();
var sayHello2 = function () {
    console.log('Hello, My name is void arrow  function');
};
sayHello2();
//Optional Parameters
function sum(x, y, z) {
    return typeof z !== 'undefined' ? x + y + z : x + y;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
//Optional Parameters--->Arrow Function
var sum2 = function (x, y, z) {
    return typeof z !== 'undefined' ? x + y + z : x + y;
};
console.log(sum2(1, 3));
console.log(sum2(1, 3, 3));
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
console.log(add('Hello', 'World'));
//Rest Parameters
function add2(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    console.log(a);
    var sum = 0;
    nums.forEach(function (num) {
        sum += num;
    });
    return sum;
}
console.log(add2('Tekin\'in Yaşı : ', 20, 30));
//Rest Parameters--->Arrow Function
var add3 = function (a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    console.log('Arrow function --->', a);
    var sum = 0;
    nums.forEach(function (num) {
        sum += num;
    });
    return sum;
};
console.log(add3('Tekin\'in Yaşı : ', 20, 30));
var addMessage = function (message) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return message + " " + name.join(' ve ');
};
console.log(addMessage('Merhaba arkadaşlarım nasılsınız? ', 'Abdullah', 'Cuma'));
var calculate = function (message) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    console.log(message);
    var sum = 0;
    nums.forEach(function (num) {
        sum += num;
    });
    return sum;
};
var birim = 'TL';
console.log(calculate('1kg Domates ve 1kg Elmanın Toplam Maliyeti =', 30, 40), birim);
//*********TYPESCRİPTTE CLASSLAR  ***********/
var Person = /** @class */ (function () {
    function Person(id, name, lastname, age) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    //Private methodlara sadece kendi classı içinde erişilebilir.
    Person.prototype.fullname = function () {
        return this.name + " " + this.lastname + " ";
    };
    //Protected methodlara sadece kendi classı içinde ve extend edilen classlarda erişilebilir.
    Person.prototype.getFullname = function () {
        var fullname = this.fullname();
        return fullname + " " + this.age + " ya\u015F\u0131ndad\u0131r";
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, lastname, age) {
        return _super.call(this, id, name, lastname, age) || this;
    }
    Employee.prototype.setNewFullName = function (newName, newLastName) {
        var name = this.getFullname(); //Protected olan methodu çağırdık.Protected olan methodu sadece kendi classı içinde ve extend edilen classlarda kullanabiliriz.
        return name + " ve " + newName + " " + newLastName + "  selam s\u00F6ylemektedir";
    };
    return Employee;
}(Person));
var printEmployee = new Employee(1, 'Tekin', 'Gündoğdu', 49);
console.log(printEmployee.setNewFullName('Pınar', 'Ünal\'a'));
/*console.log(printEmployee.getFullname());//Error...getFullname() methodu protected olduğu için bu şekilde çağrılamaz
console.log(printEmployee.fullname());//Error...fullname() methodu private olduğu için bu şekilde çağrılamaz.*/
//*********STATİC  METHOD KULLANIMI  ***********/
var Circle = /** @class */ (function () {
    function Circle() {
        this.PI = 3;
        Circle.PI++;
        this.PI++;
    }
    Circle.calculateArea = function (radius) {
        return this.PI * radius * radius; //Static metod içinden this anahtar kelimesi ile sadece static olan değişkene erişebiliriz.
    };
    Circle.calculateCircumference = function (radius) {
        return 2 * this.PI * radius;
    };
    Circle.prototype.piDisplay = function () {
        return "Static olmayan pi de\u011Feri:" + this.PI + " Static pi de\u011Feri :" + Circle.PI + " ";
        //this anahtar kelimesi ile static olmayan metod içinden  static  olmayan değişkene erişebiliriz.Static olmayan metod içinden static olan değişkene this anahtar kelimesi ile erişilmez.Onun için sınıf ismi yani Circle.PI şeklinde erişebiliriz.
    };
    Circle.prototype.calculateArea = function (radius) {
        return Circle.PI * radius * radius; //Static metod içinden this anahtar kelimesi ile sadece static olan değişkene erişebiliriz.
    };
    Circle.PI = 3.14;
    return Circle;
}());
console.log("Dairenin alan\u0131 : " + Circle.calculateArea(5) + " cm2");
console.log("Dairenin \u00E7evresi : " + Circle.calculateCircumference(5) + " cm");
var circle = new Circle();
var circle2 = new Circle();
console.log("Dairenin alan\u0131 : " + circle.calculateArea(5) + " cm2");
console.log("Pi de\u011Feri -> " + circle.piDisplay());
//*********ABSTRACT CLASS KULLANIMI  ***********/
var Departmant = /** @class */ (function () {
    function Departmant(name, person) {
        this.name = name;
        this.person = person;
    }
    return Departmant;
}());
var ITDepartmant = /** @class */ (function (_super) {
    __extends(ITDepartmant, _super);
    function ITDepartmant() {
        return _super.call(this, 'IT', 3) || this;
    }
    //Burada abstract class'taki task() metodunu muhakkak kullanmamız gerekiyor, bu yüzden override etmek zorundayız.
    ITDepartmant.prototype.task = function () {
        return 'sunucu bakımı, yazılım geliştirme, veri tabanı yönetimi';
    };
    //Burada base class'taki jobdescription() metodunu override ettik.Ama bu metod base class'ta abstract değil, bu yüzden aslında kullanmak zorunda değiliz.Ancak override ettiğimizde base class'taki metodun içeriğini değiştirebiliriz.Abstract base class daki aynı adlı metoda "super" anahtar kelimesi ulaşabiliriz. "this" anahtar kelimesi ile ulaşamayız.
    /*jobDescription():string{
        return super.jobDescription()+`Bu ${this.person} arkadaşa görevlerini başarıyla yaptıkları için teşekkür ederim.`;
    }*/
    ITDepartmant.prototype.jobDescription = function () {
        var task = this.task();
        return this.name + " departman\u0131nda " + task + " i\u015Finde g\u00F6revli " + this.person + " arkada\u015Fa   g\u00F6revlerini ba\u015Far\u0131yla yapt\u0131klar\u0131 i\u00E7in te\u015Fekk\u00FCr ederim.";
    };
    ITDepartmant.prototype.helloPerson = function () {
        return "Merhaba " + this.person + " g\u00F6revli arkada\u015F\u0131m";
    };
    return ITDepartmant;
}(Departmant));
//Burada base class'tan inherit edilen class'ın instance'ını oluşturduk.Burada aşağıda  basılan metodları kullanabiliriz.Çünkü type olarak base calss'ı tanımlamadık
/*let printTask=new ITDepartmant();
console.log(printTask.jobDescription());
console.log(printTask.helloPerson());*/
//Peki  printTask classının type'ını Departmant olarak tanımlarsak ne olur
var printTask = new ITDepartmant(); //Burada sadece base class'taki metodları kullanabiliriz.Yani ondan extend edilen class'ın metodlarını kullanamayız.Ama base class'ta abstract olan tanımlanan metodlar extend edilen class içinde kullanılmış ise onları kullanabiliriz
console.log(printTask.jobDescription());
/*console.log(printTask.helloPerson());//Error .. helloPerson() metodunu kullanamayız.Çünkü base class'ta abstract olarak tanımlanmamış.*/
//*********INTEFACE KULLANIMI  ***********/
//İnterface kullanmadan dışardan parametre alan bir fonksiyon yazalım
var getFullName = function (persons) {
    return persons.name + " " + persons.lastname;
};
var persons = {
    name: 'Tekin',
    lastname: 'Gündoğdu'
};
console.log(getFullName(persons));
var getFullName2 = function (persons) {
    return persons.age ? persons.name + " " + persons.lastname + " " + persons.age + " " : persons.name + " " + persons.lastname;
};
var persons2 = {
    name: 'Tekin',
    lastname: 'Gündoğdu',
    age: 49
};
//persons2.name="Emin"//Error...name property'si readonly olduğu için bu şekilde değiştiremiyoruz
persons2.lastname = "Pirveli"; //lastname property'si readonly olmadığı için bu şekilde değiştirebiliyoruz
console.log(getFullName2(persons2));
var formatPerson = function (name, isUpper) {
    return isUpper ? name.toUpperCase() : name.toLowerCase();
};
console.log(formatPerson('Tekin', true));
//Burada IEmployee interface'ini referans göstererek bir obje oluşturduk.Ancak burada IPersons interface'ini extend ettiğimiz için IPersons interface'indeki propertyleride kullanabiliriz ve ayrıca IEmployee interface'indeki propertyleri de kullanabiliriz.Eğer IEmployee interface'indeki propertyleri kullanmaz isek hata verir.
/*let Workers:IWorker={
    name:'Tekin',
    lastname:'Gündoğdu'
}//Error...salary property'si zorunlu olduğu için bu şekilde oluşturamayız.Muhakkak salary propertysini de tanımlamamız lazım*/
var Workers = {
    name: 'Tekin',
    lastname: 'Gündoğdu',
    salary: 1000
};
console.log(Workers);
/*let employee:employeeDepartmant={
    lastname:'Gündoğdu',
    salary:2000,
    departmant:'IT'
}*/ //Error ...Burada IPersons interface indeki name property'si kullanmadığımız için hata alırız.
var employee = {
    name: 'Tekin',
    lastname: 'Gündoğdu',
    salary: 1000,
    departmant: 'IT'
};
console.log(employee);
var Worker4 = /** @class */ (function () {
    function Worker4(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    Worker4.prototype.getFullName = function () {
        return "Classa implements etti\u011Fimiz interface den sonra \u00E7al\u0131\u015Fan metod : " + this.name + " " + this.lastname;
    };
    return Worker4;
}());
var workerProperties = new Worker4('Tekin', 'Gündoğdu');
console.log(workerProperties.getFullName());
var customer = {
    name: 'Tekin',
    lastname: 'Gündoğdu',
    salary: 1000,
    id: 1,
    age: 49,
    phone: '123456789'
};
console.log(customer);
var addTipFunc = function (a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + " " + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error("Parametreler string veya number tipinde olmalıdır");
};
console.log(addTipFunc('Tekin', 'Gündoğdu'));
console.log(addTipFunc(5, 6));
//console.log(addTipFunc(5,'Gündoğdu'));//Error...Parametreler string veya number tipinde olmalıdır
//İnstanceof ile type guard yapmak  (instanceof ile sadece class'larda kullanılabilir)  
var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer2;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isShortList = function () {
        return false;
    };
    return Supplier;
}());
var customerSupplierFunc = function (partner) {
    var message = '';
    if (partner instanceof Customer2) {
        message = partner.isCreditAllowed() ? 'Kredi kullanabilir' : 'Kredi kullanamaz';
    }
    if (partner instanceof Supplier) {
        message = partner.isShortList() ? 'Kısa listeye alındı' : 'Kısa listeye alınmadı';
    }
    return message;
};
var customer2 = new Customer2();
console.log(customer2.isCreditAllowed());
var supplier = new Supplier();
console.log(supplier.isShortList());
console.log(customerSupplierFunc(supplier));
console.log(customerSupplierFunc(customer2));
/************ GENERİCS KULLANIMI ************/
var getRandomNumber = function (numbers) {
    var randomNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumber];
};
var getRandomString = function (strings) {
    var randomString = Math.floor(Math.random() * strings.length);
    return strings[randomString];
};
var names = ['Tekin', 'Gündoğdu', 'İstanbul'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomNumber(numbers));
console.log(getRandomString(names));
//Yukarıdaki fonksiyonları tek bir fonksiyonla yazalım.Bunun için "any" olarak tanımlayalım tipleri.
var getRandomValue = function (values) {
    var randomValue = Math.floor(Math.random() * values.length);
    return values[randomValue];
};
console.log(getRandomValue(numbers));
console.log(getRandomValue(names));
//Tipleri "any" olarak tanımlamak aslında istenen bir durum değildir.Çünkü yazdığımız fonksiyon safe type olmaktan çıkıyor.
//Yukarıdaki fonksiyonu bir de generics olarak yazalım.
var getRandomGenericValue = function (values) {
    var randomValue = Math.floor(Math.random() * values.length);
    return values[randomValue];
};
//Buradaki <> işaretleri generics tanımlamak için kullanılır.Arasına hangi harfi yazarsak o harfi kullanırız.Mesela <T> değilde <A> olarak da yazabilirdik.Burada <T> fonsiyona gönderilen değerlerin tipini belirtir.Fonsiyonu tipi tanımlamadan çağralım yani Type inference olarak çalıştıralım.Yani fonksiyona gönderilen değerlerin tipini Typescript otomatik olarak algılar. 
console.log(getRandomGenericValue(numbers));
console.log(getRandomGenericValue(names));
//Burada fonksiyona gönderilen değerlerin tipini belirtmek için <number> veya <string> gibi yazabiliriz.Ve burada type inference çalışmaz.
console.log(getRandomGenericValue(numbers));
console.log(getRandomGenericValue(names));
var booleanValues = [true, false, true, false, true];
console.log(getRandomGenericValue(booleanValues));
/*******GENERİCS CONSTRAINTS *******/
var Merge = function (obj1, obj2) {
    return __assign({}, obj1, obj2);
};
var mergeObj = Merge({ name: 'Tekin Gündoğdu' }, 49 //Burada 49 değerini number olarak algılar.Ve hata vermez ama console 49 değerini yazdırmaz.Burada zorunlu olarak obje göndermesini istersek o zaman fonksiyonun parametre kısmına extends keyword'ü ile obje tipini belirtiriz.Aşağıda tekrar yazalım.
);
console.log(mergeObj);
var Merge2 = function (obj1, obj2) {
    return __assign({}, obj1, obj2);
};
var mergeObj2 = Merge2({ name: 'Tekin Gündoğdu' }, 
/*49//Bakın burada hata verdi.Çünkü Number olarak göndedik.Biz bunu obje olarak göndermek zorundayız.Çünkü yukarda extends object olarak belirttik.*/
{ age: 49 });
console.log(mergeObj2);
var MyColletion = /** @class */ (function () {
    function MyColletion() {
        this._items = [];
    }
    MyColletion.prototype.add = function (item) {
        this._items.push(item);
    };
    MyColletion.prototype.remove = function (item) {
        var index = this._items.indexOf(item);
        if (index === -1) {
            this._items = this._items.splice(index, 1);
        }
    };
    MyColletion.prototype.items = function () {
        return this._items;
    };
    return MyColletion;
}());
var myColletion = new MyColletion();
for (var i = 0; i < 10; i++) {
    myColletion.add(i);
}
console.log(myColletion.items());
myColletion.remove(5);
console.log(myColletion.items());
/********** GENERİCS CLASS KULLANIMI *********/
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.isFull()) {
            throw new Error('Stack is full');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error('Stack is empty');
        }
        this.elements.pop();
    };
    Stack.prototype.printStack = function () {
        this.elements.forEach(function (element) {
            console.log(element);
        });
    };
    return Stack;
}());
var numberRandom = function () {
    return Math.floor(Math.random() * 10);
};
var stack = new Stack(10);
while (!stack.isFull()) {
    var random = numberRandom();
    stack.push(random);
    console.log(random + " pushed to stack");
}
stack.printStack();
while (!stack.isEmpty()) {
    stack.pop();
}
//stack.pop();
stack.printStack();
