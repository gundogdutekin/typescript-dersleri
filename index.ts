// Data Type: String
let helloWorld:string = 'Hello World';

console.log(helloWorld)
//Data Type: Array
let cars:Array<string> = ['BMW', 'Audi', 'Mercedes'];

console.log(cars);
//Data Type: Tuple
let user:[string, number,boolean,string] = ['John', 25,true,'Admin'];

console.log(user);
//Data Type: object
let bus:{
    name: string,
    model: number,
    mensei: string
};

bus = {name: 'BMW', model: 2019,mensei: 'M3'};

console.log(bus);
console.log(bus.name);
//Data Type: enum
enum Color {Red='Kırmzı', Green='Yeşil', Blue='Mavi'};
/*enum Color {Red, Green, Blue};
console.log(Color.Green);
output: 1 (default olarak 0 dan başlar)*/
console.log(Color.Green);

//Data Type: union
let myUnion: string | number;
myUnion = 'Hello';
console.log(myUnion);
myUnion = 25;
console.log(myUnion);

//Data Type: any
let myAny: any;
myAny = 'Hello';
console.log(myAny);
myAny = 25;
console.log(myAny);
myAny = true;
console.log(myAny);
myAny = {name: 'John', age: 25};
console.log(myAny);
let arr:any[] = ['John',2,true];
console.log(arr);



interface Person{
    name: string,
    age: number,
    isMarried: boolean,
    sayHello: () => void
}

/*let person={}
person.name = 'John'; //error*/
let person=<Person>{}
person.name = 'John';//ok
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
function namePrint(name:string,surname:string):void{
    console.log(`${name} ${surname}`);
 
}
namePrint('John','Doe');

function sayHello(): void{
    console.log('Hello, My name is void function');
}
sayHello();

const sayHello2 = (): void => {
    console.log('Hello, My name is void arrow  function');
}
sayHello2();

//Optional Parameters
function sum (x:number, y:number,z?:number):number {
  return typeof z !== 'undefined' ? x+y+z : x+y;
    
}

console.log(sum(1,2));
console.log(sum(1,2,3));
//Optional Parameters--->Arrow Function
const sum2 = (x:number, y:number,z?:number):number=> {
  return typeof z !== 'undefined' ? x+y+z : x+y;
}
console.log(sum2(1,3));
console.log(sum2(1,3,3));

//Function Overloading
function add(x:number, y:number):number;
function add(x:string, y:string):string;
function add(x:any, y:any):any{
    return x+y;
}
console.log(add(1,2));
console.log(add('Hello','World'));
//Rest Parameters
function add2(a:string,...nums:number[]):number{
    console.log(a);
    let sum:number = 0;
    nums.forEach(num => {
        sum += num;
    });
    return sum;
    
}    
console.log(add2('Tekin\'in Yaşı : ',20,30));
//Rest Parameters--->Arrow Function
const add3 = (a:string,...nums:number[]):number=>{
    console.log('Arrow function --->',a);
    let sum:number = 0;
    nums.forEach(num => {
        sum += num;
    });
    return sum;
    
}
console.log(add3('Tekin\'in Yaşı : ',20,30));

const addMessage=(message:string,...name:string[]):string=>{
    return `${message} ${name.join(' ve ')}`;
}
console.log(addMessage('Merhaba arkadaşlarım nasılsınız? ','Abdullah','Cuma'));

const calculate=(message:string,...nums:number[]):number=>{
    console.log(message)
    let sum:number = 0;
    nums.forEach(num => {
        sum += num;
    });
    return sum;
}
let birim:string='TL'
console.log(calculate('1kg Domates ve 1kg Elmanın Toplam Maliyeti =',30,40),birim)
//*********TYPESCRİPTTE CLASSLAR  ***********/
class Person{
    id: number;//Bunlar public olarak tanımlanmıştır.Aslında şöyle yazılabilir: public id:number;
    name: string;
    lastname: string;
    age: number;

    constructor(id: number, name: string, lastname: string, age: number){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    //Private methodlara sadece kendi classı içinde erişilebilir.
    private fullname(): string{
        return `${this.name} ${this.lastname} `
    }

    //Protected methodlara sadece kendi classı içinde ve extend edilen classlarda erişilebilir.
    protected getFullname(): string{
        let fullname = this.fullname();
        return `${fullname} ${this.age} yaşındadır`
    }


}



class Employee extends Person{
  
    constructor(id: number, name: string, lastname: string, age: number){
        super(id, name, lastname, age);
    }
    setNewFullName(newName:string,newLastName:string):string{
        let name= this.getFullname();//Protected olan methodu çağırdık.Protected olan methodu sadece kendi classı içinde ve extend edilen classlarda kullanabiliriz.
        return `${name} ve ${newName} ${newLastName}  selam söylemektedir`

    }
}

const printEmployee=new Employee(1, 'Tekin', 'Gündoğdu', 49);
console.log(printEmployee.setNewFullName('Pınar','Ünal\'a'));
/*console.log(printEmployee.getFullname());//Error...getFullname() methodu protected olduğu için bu şekilde çağrılamaz
console.log(printEmployee.fullname());//Error...fullname() methodu private olduğu için bu şekilde çağrılamaz.*/

//*********STATİC  METHOD KULLANIMI  ***********/
class Circle{
    static PI: number = 3.14;
    PI: number = 3;
    constructor(){
        Circle.PI ++;
        this.PI++;
    }
    static calculateArea(radius: number): number{
        return this.PI * radius * radius;//Static metod içinden this anahtar kelimesi ile sadece static olan değişkene erişebiliriz.
    }
    static calculateCircumference(radius: number): number{
        return 2 * this.PI * radius;
    }
    piDisplay(): string{
        return `Static olmayan pi değeri:${this.PI} Static pi değeri :${Circle.PI} `;
       
        //this anahtar kelimesi ile static olmayan metod içinden  static  olmayan değişkene erişebiliriz.Static olmayan metod içinden static olan değişkene this anahtar kelimesi ile erişilmez.Onun için sınıf ismi yani Circle.PI şeklinde erişebiliriz.
    }
    calculateArea(radius: number): number{
        return Circle.PI * radius * radius;//Static metod içinden this anahtar kelimesi ile sadece static olan değişkene erişebiliriz.
    }
}

console.log(`Dairenin alanı : ${Circle.calculateArea(5)} cm2`);
console.log(`Dairenin çevresi : ${Circle.calculateCircumference(5)} cm`);
const circle = new Circle();
const circle2 = new Circle();
console.log(`Dairenin alanı : ${circle.calculateArea(5)} cm2`);
console.log(`Pi değeri -> ${circle.piDisplay()}`);

//*********ABSTRACT CLASS KULLANIMI  ***********/
abstract class Departmant{
    constructor(public name:string,public person:number){}
    //Abstract method tanımlamak için abstract anahtar kelimesini kullanırız.Burada abstract method tanımladık.Abstract metodlar tanımlanmazlar.Ama bu methodu kullanmak için base class'tan inherit edilmesi gerekiyor.
    abstract task():string;
   /* jobDescription():string{
        return `${this.name} departmanında ${this.person} kişi çalışmakta olup ${this.task()} görevleri vardır.`;
    }*/
    abstract jobDescription():string;
}

class ITDepartmant extends Departmant{
    constructor(){
        super('IT',3);
    }
    //Burada abstract class'taki task() metodunu muhakkak kullanmamız gerekiyor, bu yüzden override etmek zorundayız.
    task():string{
        return 'sunucu bakımı, yazılım geliştirme, veri tabanı yönetimi';
    }

    //Burada base class'taki jobdescription() metodunu override ettik.Ama bu metod base class'ta abstract değil, bu yüzden aslında kullanmak zorunda değiliz.Ancak override ettiğimizde base class'taki metodun içeriğini değiştirebiliriz.Abstract base class daki aynı adlı metoda "super" anahtar kelimesi ulaşabiliriz. "this" anahtar kelimesi ile ulaşamayız.
    /*jobDescription():string{
        return super.jobDescription()+`Bu ${this.person} arkadaşa görevlerini başarıyla yaptıkları için teşekkür ederim.`;
    }*/
    jobDescription():string{
        let task=this.task();
        return `${this.name} departmanında ${task} işinde görevli ${this.person} arkadaşa   görevlerini başarıyla yaptıkları için teşekkür ederim.`;
    }
    helloPerson():string{
        return `Merhaba ${this.person} görevli arkadaşım`
    }

    
}
//Burada base class'tan inherit edilen class'ın instance'ını oluşturduk.Burada aşağıda  basılan metodları kullanabiliriz.Çünkü type olarak base calss'ı tanımlamadık
/*let printTask=new ITDepartmant();
console.log(printTask.jobDescription());
console.log(printTask.helloPerson());*/

//Peki  printTask classının type'ını Departmant olarak tanımlarsak ne olur
const printTask:Departmant=new ITDepartmant();//Burada sadece base class'taki metodları kullanabiliriz.Yani ondan extend edilen class'ın metodlarını kullanamayız.Ama base class'ta abstract olan tanımlanan metodlar extend edilen class içinde kullanılmış ise onları kullanabiliriz
console.log(printTask.jobDescription());
/*console.log(printTask.helloPerson());//Error .. helloPerson() metodunu kullanamayız.Çünkü base class'ta abstract olarak tanımlanmamış.*/

//*********INTEFACE KULLANIMI  ***********/
//İnterface kullanmadan dışardan parametre alan bir fonksiyon yazalım
let getFullName=(persons: { name: string, lastname: string }) =>{
    return `${persons.name} ${persons.lastname}`;
}
let persons={
    name:'Tekin',
    lastname:'Gündoğdu'
}
console.log(getFullName(persons));
//Şimdi ise aynı fonksiyonu interface kullanarak yazalım

interface IPersons{
    readonly name:string;//readonly anahtar kelimesi ile bu property'nin sadece okunabilir olduğunu belirtiyoruz.Dışardan değiştirilemez.
    lastname:string;
    age?:number;//? işareti ile bu property'nin zorunlu olmadığını belirtiyoruz.Optional property olduğunu belirtiyoruz.
}
let getFullName2=(persons: IPersons) =>{
   
   return persons.age ? `${persons.name} ${persons.lastname} ${persons.age} `:`${persons.name} ${persons.lastname}`;
}
let persons2:IPersons={//Burada  persons2 objesini IPersons interface'ini referans göstererek oluşturduk
    name:'Tekin',
    lastname:'Gündoğdu',
    age:49
}
//persons2.name="Emin"//Error...name property'si readonly olduğu için bu şekilde değiştiremiyoruz
persons2.lastname="Pirveli"//lastname property'si readonly olmadığı için bu şekilde değiştirebiliyoruz
console.log(getFullName2(persons2));
//Görüldüğü gibi interface ile yazılan fonksyonun okunabilirliği ve propertylerin kontrolü daha kolaydır.Biz istersek interface içindeki propertylerin tipini değiştirebiliriz.Böylece fonksiyonun içindeki propertylerin tipini değiştirmek zorunda kalmayız.Diyelim ki backend tarafından gelen bir json objesi var ve bu objenin içindeki propertylerin tipini Backendçi değiştirdi.Eğer interface kullanmaz ve bu tip tanımlarını fonksiyon içinde yaparsak gidip bu parametreleri kullanan tüm fonsksiyonlarda bu tip değişikliğini yapmak zorunda kalırız, bu zaman olarak çok maliyetli ve gereksiz bir iş yükü oluşturacaktır.Interface kullanırsak interface için propertylerin tipini değiştirmemiz yeterli olacaktır.

//Fonsiyon için bir interface oluşturalım
interface IPersonFunction{
    (name:string,isUpper:boolean):string;
}


let formatPerson:IPersonFunction=(name,isUpper)=>{
    return isUpper ? name.toUpperCase():name.toLowerCase();
}

console.log(formatPerson('Tekin',true));
/*console.log(formatPerson('Tekin',4));//Error...isUpper parametresi boolean tipinde olmalıdır*/

//İnterfaceleri extend etme.Burada yukarıda tanımladığımız IPersons interface'ini extend ederek bir interface daha oluşturduk
interface IWorker extends IPersons{
    salary:number;
}
//Burada IEmployee interface'ini referans göstererek bir obje oluşturduk.Ancak burada IPersons interface'ini extend ettiğimiz için IPersons interface'indeki propertyleride kullanabiliriz ve ayrıca IEmployee interface'indeki propertyleri de kullanabiliriz.Eğer IEmployee interface'indeki propertyleri kullanmaz isek hata verir.
/*let Workers:IWorker={
    name:'Tekin',
    lastname:'Gündoğdu'
}//Error...salary property'si zorunlu olduğu için bu şekilde oluşturamayız.Muhakkak salary propertysini de tanımlamamız lazım*/
let Workers:IWorker={
    name:'Tekin',
    lastname:'Gündoğdu',
    salary:1000
}
console.log(Workers);


//Yeni bir interface oluşturalım ve bu interface'i IWorker interface'inden extend edelim.Burada employeeDepartmant interface'ini extend ederek IWorker interface'indeki propertyleride kullanabiliriz ve ayrıca IEmployee interface'indeki propertyleri de kullanabiliriz.Eğer tüm extend edilen base interfacelerdeki ve mevcut interface'indeki propertyleri kullanmaz isek hata alırız.
interface employeeDepartmant extends IWorker{
    departmant:string;
}
/*let employee:employeeDepartmant={
    lastname:'Gündoğdu',
    salary:2000,
    departmant:'IT'
}*///Error ...Burada IPersons interface indeki name property'si kullanmadığımız için hata alırız.

let employee:employeeDepartmant={
    name:'Tekin',
    lastname:'Gündoğdu',
    salary:1000,
    departmant:'IT'
}
console.log(employee)


//Class'lar için interface oluşturalım.Bir class'a interface implemente etme.
interface IWorker2{
    name:string;
    lastname:string;
    age?:number;
}
class Worker4 implements IWorker2{
    name:string;
    lastname:string;

    constructor(name:string,lastname:string){
        this.name=name;
        this.lastname=lastname;
        
    }
    getFullName():string{
        return `Classa implements ettiğimiz interface den sonra çalışan metod : ${this.name} ${this.lastname}`
    }
}

const workerProperties=new Worker4('Tekin','Gündoğdu');
console.log(workerProperties.getFullName());



/******* TYPE INTERSECTION(KESİŞME) ********/
interface BusunessPartner{
    name:string;
    lastname:string;
    salary:number;
}

interface Identity{
    id:number;
    age:number;
}

interface Contact{
    phone:string;
    email?:string;//Optional property
}

type Customer=BusunessPartner & Identity & Contact;//Burada 3 interface'i birleştirdik ve Customer tipinde bir değişken oluşturduk.Burada 3 interface'in de propertylerini kullanabiliriz.Tabi burada önemli olan tüm propertylerin muhakkak kullanılmasıdır.(Optional propertyler hariç)
let customer:Customer={
    name:'Tekin',
    lastname:'Gündoğdu',
    salary:1000,
    id:1,
    age:49,
    phone:'123456789',
    
}
console.log(customer);
/*********TYPE GUARD ********/

type tip=string|number;

const addTipFunc=(a:tip,b:tip)=>{
    if(typeof a==='string' && typeof b==='string'){
        return `${a} ${b}`;
    }else if(typeof a==='number' && typeof b==='number'){
        return a+b;
    }
   throw new Error("Parametreler string veya number tipinde olmalıdır"); 
}
console.log(addTipFunc('Tekin','Gündoğdu'));
console.log(addTipFunc(5,6));
//console.log(addTipFunc(5,'Gündoğdu'));//Error...Parametreler string veya number tipinde olmalıdır
//İnstanceof ile type guard yapmak  (instanceof ile sadece class'larda kullanılabilir)  
class Customer2 {
   isCreditAllowed():boolean{
         return true;
   }
}
class Supplier {
    isShortList():boolean{
        return false;
    }
}

type CustomerSupplier=Customer2|Supplier;

const customerSupplierFunc=(partner:CustomerSupplier):string =>{
    let message:string='';
    if(partner instanceof Customer2){
       message= partner.isCreditAllowed() ? 'Kredi kullanabilir':'Kredi kullanamaz';
    }
    if(partner instanceof Supplier){
        message=  partner.isShortList() ? 'Kısa listeye alındı':'Kısa listeye alınmadı';
    }
    return message;  
}
let customer2=new Customer2();
console.log(customer2.isCreditAllowed());
let supplier=new Supplier();
console.log(supplier.isShortList());

console.log(customerSupplierFunc(supplier));
console.log(customerSupplierFunc(customer2));

/************ GENERİCS KULLANIMI ************/
const getRandomNumber=(numbers:number[]):number=>{
    let randomNumber=Math.floor(Math.random()*numbers.length);
    return numbers[randomNumber];
}
const getRandomString=(strings:string[]):string=>{
    let randomString=Math.floor(Math.random()*strings.length);
    return strings[randomString];
}

let names=['Tekin','Gündoğdu','İstanbul'];
let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(getRandomNumber(numbers));
console.log(getRandomString(names));

//Yukarıdaki fonksiyonları tek bir fonksiyonla yazalım.Bunun için "any" olarak tanımlayalım tipleri.
const getRandomValue=(values:any[]):any=>{
    let randomValue=Math.floor(Math.random()*values.length);
    return values[randomValue];
}
console.log(getRandomValue(numbers));
console.log(getRandomValue(names));
//Tipleri "any" olarak tanımlamak aslında istenen bir durum değildir.Çünkü yazdığımız fonksiyon safe type olmaktan çıkıyor.
//Yukarıdaki fonksiyonu bir de generics olarak yazalım.
const getRandomGenericValue=<T>(values:T[]):T=>{
    let randomValue=Math.floor(Math.random()*values.length);
    return values[randomValue];
}
//Buradaki <> işaretleri generics tanımlamak için kullanılır.Arasına hangi harfi yazarsak o harfi kullanırız.Mesela <T> değilde <A> olarak da yazabilirdik.Burada <T> fonsiyona gönderilen değerlerin tipini belirtir.Fonsiyonu tipi tanımlamadan çağralım yani Type inference olarak çalıştıralım.Yani fonksiyona gönderilen değerlerin tipini Typescript otomatik olarak algılar. 
console.log(getRandomGenericValue(numbers));
console.log(getRandomGenericValue(names));
//Burada fonksiyona gönderilen değerlerin tipini belirtmek için <number> veya <string> gibi yazabiliriz.Ve burada type inference çalışmaz.
console.log(getRandomGenericValue<number>(numbers));
console.log(getRandomGenericValue<string>(names));

const booleanValues=[true,false,true,false,true];
console.log(getRandomGenericValue<boolean>(booleanValues));

/*******GENERİCS CONSTRAINTS *******/

const Merge=<U,V>(obj1:U,obj2:V)=>{//Burada U&V ile obj1 ve obj2'nin birleşimi olacak.
    return {...obj1,...obj2};
}
const mergeObj=Merge(
        {name:'Tekin Gündoğdu'},
        49//Burada 49 değerini number olarak algılar.Ve hata vermez ama console 49 değerini yazdırmaz.Burada zorunlu olarak obje göndermesini istersek o zaman fonksiyonun parametre kısmına extends keyword'ü ile obje tipini belirtiriz.Aşağıda tekrar yazalım.
    );
console.log(mergeObj);

const Merge2=<U extends object,V extends object>(obj1:U,obj2:V):U&V=>{
    return {...obj1,...obj2};
}  

const mergeObj2=Merge2(
    {name:'Tekin Gündoğdu'},
    /*49//Bakın burada hata verdi.Çünkü Number olarak göndedik.Biz bunu obje olarak göndermek zorundayız.Çünkü yukarda extends object olarak belirttik.*/
    {age:49}
);
console.log(mergeObj2);

/********** INRETFACELERDE GENERİC KULLANIMI *********/
interface Colletion<T>{
    add(item:T):void;
    remove(item:T):void;
    
}

class MyColletion<T> implements Colletion<T>{
    private _items:T[]=[];
    add(item:T):void{
        this._items.push(item);
    }
    remove(item:T):void{
        let index=this._items.indexOf(item);
        if(index===-1){
        this._items=this._items.splice(index,1);
        }
    }
    items():T[]{
        return this._items;
    }
}

let myColletion=new MyColletion<number>();
for(let i=0;i<10;i++){
    myColletion.add(i);
}
console.log(myColletion.items());
myColletion.remove(5);
console.log(myColletion.items());

/********** GENERİCS CLASS KULLANIMI *********/

class Stack<T>{
    private elements:T[]=[];
    constructor(private size:number){}
    isEmpty():boolean{
        return this.elements.length===0;
    }
    isFull():boolean{
        return this.elements.length===this.size;
    }
    push(element:T):void{
        if(this.isFull()){
            throw new Error('Stack is full');
        }
        this.elements.push(element);
    }
    pop(): void {
        if(this.elements.length===0){
            throw new Error('Stack is empty');
        }
        this.elements.pop();
    }
    printStack():void{
        this.elements.forEach(element => {
            console.log(element);
        });
    }
}

const numberRandom=():number=>{
    return Math.floor(Math.random()*10);
}

let stack=new Stack<number>(10);
while(!stack.isFull()){
    let random:number=numberRandom();
      stack.push(random);
      console.log(`${random} pushed to stack`)
} 
stack.printStack();
while(!stack.isEmpty()){
        stack.pop(); 
}


//stack.pop();
stack.printStack();