// // *File - preference - Setting - wheel 입력 - 체크
// // *실행 단축키 : Crtl + F5
// // 주석 : Crtl + /
// // 파일이나 폴더 위에 커서를 올린 후 F2 : 파일이나 폴더 리네임
// console.log("Hello World");
// console.log("호랑이");

// // ex3) File Preferences > User Snippets > javascript
// // 주석해제. ( 7 - 14 ) (Example 아래 코드 주석 해제)

// console(''); //문자열로 본다.

// //F1 명령 팔레트

// // ex4)
// // JS는 int, long 등이 없다.
// // 변수 선언 방식 3가지
// // var는 더 이상 사용 X
// var a = 10;
// console.log(a);

// //var가 확장되어 let
// let b = 20;
// console.log(b);

// //상수
// const c = 30;

// //ex5)
// let z = 10;
// console.log(a);

// let d = 'tiger';

// let e = true; 

// let f = 3.14;

// let g = [];

// let h = {};

// let i = function(){}; // 기본적인 함수 틀

// let j = undefined;

// console.log(typeof(a)); // number라고 뜬다.
// console.log(typeof(d)); // String
// console.log(typeof(e)); // Bool
// console.log(typeof(f)); // numbe
// console.log(typeof(g)); // 오브젝트 타입.
// console.log(typeof(h)); // 오브젝트 타입.
// console.log(typeof(i)); // function이라고 뜨며 함수 타입이다.
// console.log(typeof(j)); // undefined
// // number, string, boolean, object, function 의 타입들로 이루어져 있지만 전부 let 하나로 받는다.

// // ex6)

// // key : value >> Json
// let a = {
    
// }

// // 초창기에 문자 하나당 바이트로 던져주는 문자열 Tiger12와 34가 같이 통신 데이터로 넘어갈 때 우리는 문자열과 숫자를 구분하지 못해서 Space로 구분하자고 정하는 멍청한 짓을 했다.
// // name과 age와 salary 한 묶음과 name과 age 한 묶음 같은 것을 구분 할 때는 앞에 1을 붙이는 것 처럼 식별자를 받아서 클라이언트가 받았을 때 if(1)로 해서 파싱해서 space바 기준으로 구분해서 사용하는 방식을 오래동안 사용되었다.
// // 이런 포맷의 종류에 따라 수십개가 규칙이 수십개 생기니 쉬운 방식인 xml을 개발한다.
// // 이제는 이전의 멍청한 짓을 버리고 xml을 데이터 전송 방식으로 바뀌고 그 이후 json으로 바뀌었다. 콜론을 중심으로 키:값 의 형태들을 받는다.
// // JSON 직렬화. 우리가 객체를 넘겼을 때 그 객체를 이해할 수 없다. 우리는 자바에서 객체에 Serializable을 implement해서 보내면 json화 시키는 데 이것을 java 직렬화라는 것이다.
// // Serializable을 f2해서 보면 비어있지만 JAVA 가상머신에서 보고 알아서 내부 코드를 제작한다.
// // 객체를 저장할 때도 Serializable을 해서 저장하면.

// //자바 직렬화 예제
// // class Tiger implements Serializable{ // Serializable를 import 시키지 않으면 직렬화 되지 않아서 객체를 입출력할 때 error 발생한다.
// // 	String name = "호랑이";
// // 	int age = 1000;
// // }
// // public class Hello{
// // 	public static void main(String[] args) {
// // 		Tiger tiger = new Tiger();
// // 		try {
// // 		// save
// // 		FileOutputStream fos = new FileOutputStream("sample.txt");
// // 		ObjectOutputStream oos = new ObjectOutputStream(fos);
// // 		oos.writeObject(tiger);
// // 		fos.close();
// // 		oos.close();
		
// // 		// load
// // 		FileInputStream fis = new FileInputStream("sample.txt");
// // 		ObjectInputStream ois = new ObjectInputStream(fis);
// // 		Tiger t2 = (Tiger)ois.readObject();
// // 		System.out.println(t2.name+ "" +t2.age);
// // 		fis.close();
// // 		ois.close();
// // 		}
		
// // 		catch (Exception e) {
// // 			// TODO: handle exception
// // 			e.printStackTrace();
// // 		}
// // 	}
// // }

// //json안에 배열도 가능하며 json이 또 있는 형식이 가능하다. 자바스크립트에서 이것을 객체 형식이라고 말한다.
// // {
// //     "이름": "홍길동",
// //     "나이": 25,
// //     "성별": "여",
// //     "주소": "서울특별시 양천구 목동",
// //     "특기": ["농구", "도술"],
// //     "가족관계": {"#": 2, "아버지": "홍판서", "어머니": "춘섬"},
// //     "회사": "경기 수원시 팔달구 우만동"
// //  }

// // ex6)

// // key :value >> JSON
// let obj = {
//     a : 10,
//     b : 'tiger',
//     c : true,
//     d : [],
//     e : {},
//     f : function(){},
//     g : undefined
// }
// console.log(typeof(obj));
// console.log(typeof(obj.a));
// console.log(typeof(obj.b));
// console.log(typeof(obj.c));
// console.log(typeof(obj.d));
// console.log(typeof(obj.e));
// console.log(typeof(obj.f));
// console.log(typeof(obj.g));

// ex7)
// let obj = {
//     a: {
//         b:{
//             c:{
//                 d:10
//             }
//         }
//     }
// }
// //일반적으로 콤마를 넣고  끝내는 것이 편하다.
// let obj2 = {
//     a:1000,
//     b:'tiger',
// }

// console.log(typeof(obj.a.b.c.d));
// console.log(obj.a.b.c.d);

// // ex8)

// let apple = 10;
// console.log(apple, typeof(apple));

// // 메모리 생성
// // apple = new number();
// // 사용할 수 있다.
// // 메모리 해제
// // delete(apple);

// // number 타입의 메모리가 삭제된다.
// // String 타입의 메모리가 생성된다.
// // delete(apple);
// // apple = new string();

// apple = 'tiger';
// console.log(apple, typeof(apple));

// // 이렇게 숫자 넣어두면 별 문제가 없지만 문자를 넣거나 재할당 할 때 메모리 생성, 해제 등의 과정을 거친다.
// apple = 20;

// // 동적 타입 변경
// let b = 10;
// b = 'lion';
// b = function(){};
// b = {};

// ex9) 지역성의 유지 여부
// var, let
// var는 지역성을 유지하지 않는다.
// {
//     var a = 10;
// }

// console.log(a);

// // let은 지역성을 유지한다.
// {
//     let b = 10;
//     console.log(b);
// }

// //console.log(b); 애러뜬다.

// // 이러한 문제 때문에 let을 사용하지만 아주 가끔 스코프를 벗어나야할 경우가 있기 때문에 그 때 var를 사용한다.

// // ex10) const
// const a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// // ex11) und undefined, null
// // 타입이 정의 되지 않았다.
// // 하지만 A의 타입은 undefined
// let a = undefined; // => return undefined 같이 어떤 타입인지 알 수 없을 경우 등에만 쓰여진다.
// // 타입은 정해진다.(Object)
// // 참조하는 값이 없을 뿐이다.
// let b = null;

// console.log(typeof(a));
// console.log(typeof(b));

// c = {}; //=>b와 의미가 같다.

// console.log(typeof(c))

// a = 10;
// b = 20;

// // ex12) 문자열 연결

// let str = 'tiger';
// str += '코끼리';
// console.log(str);

// let s = '100';
// let n = 100;
// console.log(s+n); // 문자열 연결
// console.log(Number(s)+n); // 문자열 연결
// console.log(String(n)+200);

// console.log("-------------------------------------");

// // 문자열을 >> 숫자로 변환 >>
// // 1. Number
// // 2. parseInt()
// let s1 = '100원';
// let s2 = '200원';
// console.log(Number(s1)+1); // 붙어있는 문자를 처리 못해서 NaN.
// console.log(parseInt(s2)+1); //문자열을 빼주고 알아서 200만 숫자로 바꿈.

// // 슈가 코드
// let s3 = '10';
// let s4 = +'20'; // 숫자 타입으로 변환된다.
// let s5 = +s3;
// let s6 = 999+s3;
// let s7 = 999 + + s3;
// console.log(typeof(s3));
// console.log(typeof(s4));
// console.log(typeof(s5));
// console.log(typeof(s6));
// console.log(typeof(s7));

// // ex13)
// // 산술, 관계, 논리 연산
// // 증가, 감소 연산자 동일
// // +=, 복합대입연산자 동일
// // true, false
// // 4대 제어문 동일
// // 삼항연산 동일

// console.log(Math.pow(2, 3));
// console.log( 2 ** 3 );
// // 예측1) 2의 3승 결과를 2승한다. X
// // 예측2) 2의 3승의 2승 O
// console.log( 2 ** 3 ** 2);

// // ex14)
// console.log(result);

// let result = 10; // 호이스팅을 해야한다.(출력문 보다 더 위로 이 변수 정의 코드 라인을 올려야 한다)

// //가비지 컬렉션에 대하여는 혼자서

// // 같은 예약어
// // new == malloc();
// // delete == free();

// //알아야할 예약어
// //await
// //yield


// //$이 이름으로 가능
// let $app_le = 10;
// console.log($app_le);


// // 타입명 , 변수명 , 대입 연산 , 리터럴(우측 대입되어 지는 쪽)
// let a = 10+20;

// let a = 10;
// let b = 0x10;
// let c = 0o777; // 자바는 맨 앞에 0이 붙어있으면 8진수에 들어가버린다. 8진수라 8이 넘어가버리면..오류 걸린다.
// let d = 0077; // 자바도 00두개는 상관없다.
// let e = 0b010101;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// //ex15) 함수는 모든 타입이 let으로 통일되어 있기 때문에 리턴 타입 조차 쓰지 않는다.
// function apple(){
//     return 100;
// }

// for (let i = 0; i < 3; i++) {
//    console.log(i);
// }

// //코드 블록 뒤에는 ;를 붙이지 않는다. }가 자체적으로 종결성을 가지기 때문이다.
// //;를 붙이는 것이 좋은 이유는 밑의 예시를 보면 알듯이 가독성 문제가 생긴다. 다만 공식적으로는 ;를 붙이지 않는다.
// function foo(){
//     return ;
//     {}
// }
// function foo(){
//     return
//     {}
// }


// // ex16)
// // 값이 같은가?
// console.log(10==10);
// // 1. 값이 같은가?
// // 2. 타입이 같은가?
// console.log(10 === 10);

// console.log(10 == '10'); // 값이 같으냐? true
// console.log(10 === '10'); // 값과 타입이 같으냐 false
// console.log(10 === 10.0); // 같은 number 타입이라 true. 심지어 10이 나중에 컴파일 할 때 10.0이 된다.

// console.log(7/4); // 정확한 결과값이 나온다.
// console.log(7%4);
// // 몫은 div 함수로 구해라.
// // 나누기 0은 있을 수가 없다.

// console.log('한글');
// console.log("한글'과'컴퓨터"); //''를 문자로 표현하고 싶을 때 ""를 사용한다.
// //``도 문자열 취급이 된다.

// // ex17)
// // 문자열 안에 태그를 표현할 수 있다.
// let str = `<h3>호랑이</h3>`; // 리액트에서 아주 테크니컬하게 사용된다.

// //이스케이프 시퀀스
// // '\b', '\t'

// let first = 'tiger';
// let last = 'lion';

// console.log(`My name is ${first} and ${last}`);
// let a = 3;
// let b = 4;
// console.log(` ${ a + b } `);
// console.log(` ${ a } + ${ b } = ${ a + b } `);

// // ex18) 암묵적 타입 변환

// console.log(true + ''); // 이거 많이 사용될 듯 하다.
// false + '';
// null + ''; // 그냥 null이다.
// undefined + '';
// NaN + '';

// ({})+'';
// Math + '';
// [] + '';
// [10,20] + '';
// (function(){})+ '';
// Array + ''
// console.log(0 == '');
// console.log(0 == {});
// console.log('' == {});

// // ex17) SYMBOL
// //1)
// let obj = {
//     a : 10,
// };
// //실행 시간에 필요에 따라서 키 값을 추가할 수 있다.
// obj.b = 20;
// console.log(obj.a);
// console.log(obj.b);
// //2)
// let obj2 = {
//     a : 10,
// };
// //실행 시간에 필요에 따라서 키 값을 추가할 수 있다.
// obj2['b'] = 20;
// console.log(obj2['a']);
// console.log(obj2['b']);

// console.log("---------------------------")
// //3) 라이브러리로 제공된 객체일 때.
// let obj3 = {
//     a : 10,
//     b : 20
// };
// //기존의 속성을 업데이트 하려고 한 것인지 새로운 키 값을 만들려고 한 것인지 의도를 알 수 없으므로 심볼을 사용해야 한다.
// obj3['b'] = 30;
// console.log(obj3['b']);



// console.log("---------------------------")
// //4)
// // 오브젝트 객체 안에 함수를 작성할 때는 이름: function(){}으로 정의한다.
// let obj4 = {
//     a:10,
//     b:20, //b가 어느 라이브러리 안의 숨겨진 변수라고 치고
//     myfunc:function(){
//         return this.a + this.b;
//     }
// };

// //키를 새로 만들었다고 판단했으나..
// obj4['b'] = 30;
// console.log(obj4.myfunc());


// //5 결국 심볼을 이용한 유일 키 작성
// let obj5 = {
//     a: 10,
//     monkey: 20,
//     myfunc:function(){
//         return this.a + this.b;
//     }
// };
// let monkey = Symbol('monkey');
// obj5[monkey] = 999;
// console.log(obj5.myfunc());
// console.log(obj5['monkey']);
// console.log(obj5[monkey]);


// //6 결국 문제의 형태는...
// let obj6 = {
//     a: 20,
//     b :30

//     // 함수가 사용하게 되었을 때
//     // 실행시간으로 변경되는 결과에 대하여
//     // 어떻게 예측할 수 있는가 ?
// }
// obj6['b'] = 10;
// !(x || y) == !x && !y; // 드모르간 법칙

// let a = 1, b =2, c=3;

// // while(true){

// // }

// // 지금은 반복 회수를 모르지만 프로그램이 다 될 때 쯤에 알 수 있을 때 사용. 결론적으로는 조건문이 들어간다.
// // 또한 사수가 여기 for 문을 사용하라고 입력해둘 때
// // for(;;){
// //    break;
// // }

// //2, 3중 for문을 나올 때 goto, 함수 안에서 3중 for문은 return으로 벗어난다.

// //ex18)

// let str = 'apple';
// console.log(str.length);

// // ex19)Date()를 이용하여 1초동안 for문의 반복횟수를 얻는다.

// let n = new Date(); //Date는 function
// console.log(typeof(n));
// console.log(typeof(Date));
// console.log(typeof n);

// console.log(n.getFullYear(), '년');
// console.log(n.getMonth()+1, '월'); // 0월 부터 출발이라 +1 수동
// console.log(n.getDate(), '일');
// // 0이 일요일
// console.log(n.getDay(), '요일');
// console.log(n.getHours(),'시');
// console.log(n.getMinutes(),'분');
// console.log(n.getSeconds(), '초');

// let start = new Date().getTime();
// console.log(start);

// for(var i = 0; new Date().getTime() < start+1000; i++){
//     //1초 동안 i의 증가가 얼마냐를 알고 싶지만 let은 지역 변수라 i가 초기화 된다. 그러므로 var를 이용한다.
// }

// console.log(i);

// // ex20)

// //1)
// let start = new Date().getTime();
// while(new Date().getTime()< start + 1000){}
// console.log('end');
// //console.log(i);
// for(let i = 0; i <3; i++){
//   //세미 콜론이 생략이 되어있다.  
// };
// for(let i = 0; i <3; i++){};
// for(let i = 0; i <3; i++);
// while(new Date().getTime()< start + 1000);

// //2)
// function fu(num){ //디폴트는 let이라 타입선언은 의미가 없다.
//     console.log(num);
// }

// fu();

// //즉시 실행 함수 구조. 함수를 2번 사용하지 않는다.
// (function(num){ 
//     console.log(num);
// })(1000);


// //3
// (function(num){ 
//     console.log("시간 지연 시작", num/1000);
//     let start = new Date().getTime();
//     while(new Date().getTime() < start + num);
// })(3000);

// console.log('end');


// //ex21)

// //if문을 약식으로 적기
// if(true){
//     console.log('100');
// }
// true && console.log('100'); // 이런 식으로 자주 줄여쓴다. 가독성은 위에가 더 좋지만 알 수 없다.

// /*
// let num = 10;
// if( false && num++){
// }// 위험
// console.log(num)
// */
// let t = 5;
// t<10 && console.log('100');


// //if문을 약식으로 적기
// if(!false){ // if(! (num>20)){
//     console.log('20');
// }

// // (num > 20) || console.log('30');
// false || console.log('30');


// // ex22) 함수를 나타내는 다양한 형태
// // 1.
// f1(); // 함수를 hoisting 할 수 있다.
// function f1(){
//     console.log('1');
// }

// // 2.
// let f2 = function(){
//     console.log('2');
// }
// f2(); // 함수를 hoisting 할 수 없다.

// // 3. 람다 함수
// let f3 = ()=> {
//     console.log('3');
// }
// f3();

// // 4. 즉시 실행 함수(IIFE)(Immediately Invoked Function Expression)
// (function(){
//     console.log('4');
// })()
// // (function(){})();

// // 5. IIFE + 람다
// (()=>{
//     console.log('5');
// })();

// // 6. 람다 인수 전달
// ((num)=>{
//     console.log(num);
// })(6);

// // 7. 리턴 처리
// let result = ((num)=>{
//     return num * 10;
// })(7);
// console.log(result);

// // 8. 첫자가 대문자로 출발한다.
// // 생성자 함수( == 클래스 )
// function F4(){
//     this.name = '호랑이' // ,(콤마)가 들어가지 않는다.
//     this.age = 100;

//     this.f1 = function(){
//         console.log(this.name);        
//     }

//     this.f2 = () =>{
//         console.log(this.age);
//     }
// }

// let obj = new F4(); // let date = new Date(); 와 같은 형태였다는 것을 기억하면 Date()도 클래스라는 것을 알 수 있다.
// obj.f1();
// obj.f2();
// console.log(obj.name, obj.age);

// // ex23)
// function t1(){
//     console.log('t1');
// }
// t1();

// function t2(num){
//     console.log(num);
// }
// t2(10);
// function t3(){
//     return 100;
// }
// console(t3());

// function t4(num){
//     return num * 10;
// }
// console.log(t4(10));

// ex24)

//속성을 프로퍼티라고 한다.
//1)
// let count = {
//     num: 0,
//     increase: function(){
//         this.num++;
//         console.log(this.num);
//     }
// }
// console.log(count.num);
// count.increase();

// //2)
// let person = {
//     name:'tiger',
//     sayHello:function(){
//         console.log(` ${this.name} `);
//     }
// }
// // 실행 시키면 함수 프로퍼티는 f라고 뜬다.
// person.sayHello();
// console.log(person);

// // 브레이킹 포인트는 문제가 발생한 부분에 대해서 한 줄 씩 실행시키며 문제를 발결하기 위해 돌려보는 것이다. 라인 숫자 왼쪽에 클릭을 하면 빨간 점이 생긴다.
// // F5번 누르면 브레이킹 포인트 직전까지 실행을 시킨다.
// // 원하는 라인에 커서를 나두고 F9은 브레이킹 포인트
// // F10 스텝 실행
// // 디버깅 상태에서는 내림 버튼을 이용해 디버그 콘솔에서 내부의 프로퍼티를 확인할 수 있다.
// // *그냥 F5를 하면 브레이킹 포인트를 찾는 자원은 쓰지만 실시간으로 어디 함수를 몇 줄에서 실행했는 지 나오므로 문제를 바로 찾을 수 있다.

// //3)
// let empty = {

// };
// console.log('---------------------------------')

// //4)
// let obj01 = { // 특수문자를 넣기 위해 ''를 넣을 뿐 원래는 프로퍼티 명은 ''을 사용하지 않아도 된다.
//     //속성은 ''로 정의할 수 있다.
//     'na-me': 'tiger',
//     'ag-e': 10,
// }
// console.log(obj01.na-me, obj01.ag-e);

// // 5)
// let obj02 = {};
// let key = 'hello';
// obj02[key] = 'world';
// console.log(obj02.hello);
// console.log(obj02);

// // 6) 키 이름을 숫자로 정의하면 자동으로 문자열 처리한다.
// let obj03 = {
//     0 : 10,
//     1 : 20,
//     '2' : 30
// };
// //안된다.
// // console.log(obj03.0);
// // console.log(obj03.'0');
// //된다.
// console.log(obj[0]);
// console.log(obj03['0']);

// // 7)가장 나중에[ 정의된 속성으로 된다.
// //속성 사용 방법 2가지
// let obj04 = {
//     age:10,
//     age:20,
// }
// console.log(obj04);
// console.log(obj04.age, obj04['age']);

// // 익센셥 발생
// //console.log(obj04[age])

// // 8)
// let obj05 = { 
//     a:10,
// };
// //속성 갱신
// obj05.a = 20;
// //속성 갱신
// obj05.b = 30;

// // 9
// delete obj05.a;
// console.log(obj05);

// // *10

// let x=3, y=4;
// let obj06 = {
//     x:x, // 속성 : 값
//     y:y,
// }
// console.log(obj06);

// // 10-2 . 10-2로 작성하면 10으로 번역된다.
// let xx = 3, yy=4;
// let obj07 = {
//     xx, //속성 : 값
//     yy,
// }
// console.log(obj07);

// //11
// let xxx = 3, yyy=4;
// //속성 : 값
// let obj08 = {xxx, yyy,}
// console.log(obj08);

// //12
// let prefix = 'prop';
// let ct = 0;
// let obj09 = {};
// obj['prop-0'] = 0;
// obj[prefix+'-'+ ++ct] = 0;
// console.log(obj09);
// //실전에서 사용되는 예제
// for(let i = 2; i < 5; i++){
//     obj09[prefix + '-' + i]=0;
// }
// console.log(obj09);

// // 13(12번 연장 예제). 대충 버리는 문법
// let obj10 = {
//     [ `${prefix}-${ct}` ]: 99,
// };

// console.log(obj10);

// // 14)
// let obj11 = {
//     // 일반함수라고 한다. function은 외부에서 어디서 소속되지 않은 채 정의 된 것. Method는 내부의 함수를 Method라고 불렀지만 ES06에서 일반 함수라고 바뀌었다.
//     // 일반 함수로 정의된 함수는 new로 정의 하고 return이 가능하다.
//     // 생성자 함수로써의 역할을 할 수 있다.
//     // es5
//     f1:function(){
//         console.log('1');
//     },
//     // Method로 정의된 프로퍼티는 new를 이용해서 정의할 수 없다.
//     // 생성자로서의 역할을 할 수 없다.
//     // es6
//     f2(){
//         console.log('2');
//     }
// }
// let tt10 = new obj11.f1();
// let tt11 = new obj11.f2();

// // 15)


// // ex24) 가변 인수 함수, 가변 인자 신경 X. 그냥 함수 이름 있으면 바로 던진다.
// // 자바는 일반 함수를 만들 수 없다.
// function f1(){
//     console.log('1');
//     console.log(typeof arguments);
//     console.log(arguments.length);


//     //**
//     for(const key in arguments){
//         console.log(key, arguments[key]);
//         sum += arguments[key];
//     }
//     console.log(sum);
// }

// //f1(10);
// //f1(10,20);
// f1(77,88,99);

// // ex25) 내부 함수
// // 1)
// let f1 = function(){
//     console.log('1');
//     let f2 = function(){
//         console.log('2');
//     }
//     f2();
// }

// f1();
// // 2)
// let f3 = function(){
//     console.log('1');
//     return function(){
//         console.log('2');
//     }
// }
// f3()();

// // 3)
// let f4 = function(a, b){
//     console.log(a+b);
//     return function(c,d,e){
//         console.log(c+d+e);
//     }
// };
// f4(10, 20)(10, 20, 30);

// // 4)*
// let f5 = function(a){
//     a();
//     return function(c){
//         c();
//     }
// };
// f5(function(){
//     console.log(99);
// })(function(){
//     console.log(100);
// });

// //ex26) cf >> callback function
// let f1 = function(cf){
//     cf();
// }
// let f2 = function(){
//     console.log('f2 call');
// }

// // 1
// f1( f2 );

// // 2
// f1( function(){
//     console.log('ex2');
// } );

// // 3
// f1( ()=>{
//     console.log('ex3');
// } );

// // 4 const를 사용하자
// const f3 = function(){
//     const f4 = function(){

//     };
//     // *return f4(); //주의(함수 호출이 먼저 일어난다.)
//     return f4;
// };
// // f3 = function(){
// // const라서 불가능
// // };
// f3()();

// //5
// const f5 = function () {
//     console.log('1');
//     return function () {
//         console.log('2');
//     };
// };
// f5()();

// //ex27) 1
// (function () {
//     console.log('1');

//     return function () {
//         console.log('2');
//     };
// })()();

// //2 람다식 코드가 보통 선호됨.
// (() => {
//     console.log('1');

//     return() => {
//         console.log('2');
//     };
// })()();

// //3
// ((cf) => {
//     cf();
//     console.log('1');
//     return(cf1) => {
//         cf1();
//         console.log('2');
//     };
// })(() => {
//     console.log('tiger')
// })(() => {
//     console.log('lion')
// });

// //ex28)
// //1
// let c1 = function(a){ return a*10;}
// console.log( c1(2) );

// //2 람다 수정
// let c2 = (a)=>{return a*10;}
// console.log( c2(2) );

// //3 람다에서 인수 전달이 1개일 때 괄호 생략 가능
// let c3 = a => {return a*10;}
// console.log( c3(2) );

// //4 람다에서 return 단문장일 때 return 생략할 수 있다.
// // 단 {}도 같이 생략해야 한다.
// let c4 = a => a*10;
// console.log( c4(2) );

// let c5 =function(){
//     // return 숫자, 문자열, 함수, 객체;
//     //return 100;
//     //return 'tiger';
//     //return ()=>{};
//     return { a:10, b:20 };
// }
// let obj01 = c5();
// console.log(obj01.a, obj01.b);

// let c6 =()=>{
//     return { a:10, b:20 };
// }

// // return과 {}를 빼고 나니까.
// // 남아 있는 스코프가 함수의 {}인지
// // 객체의 스코프 인지 모호한 상황이 발생한다.
// //

// let c7 =()=> ({ a:10, b:20 });

// let obj02 = c7();
// console.log(obj02.a, obj02.b);

// // ex29)
// //1) 기본 함수 정의
// (a) => {};

// //2) 실제 실행 가능 코드
// ((a) => {})();

// //3)
// ((a)=>{
//     console.log('1');
//     ((b) => { 
//         console.log('2');
//     })();
// })();

// //4)
// ((a)=>{((b) => {})(); })();

// //5) 
// ((a)=>{((b) => { console.log(a+b);})(10); })(20);

// //6) 즉시 실행을 안한다면?
// let c1 = (a) =>{(b) => { console.log(a+b);}};

// //7)
// let c2 = (a) =>{(b) => {}};

// //8)
// let c8 = a => { b => { } };

// //9)
// //let c4 = a => b => a+b;
// //let c4 = (a) => (b) => a+b;
// //let c4 = (a) => (b) => {return a+b;};
// //let c4 = (a) => {return (b) => {return a+b;}};
// // let c4 = (a) => {
// //     return (b) => {
// //         return a+b;
// //     }}
// // ;
// let c4 = a => b => a + b;

// console.log(c4(10)(20));

// //ex30)
// let c1 = (a) => {
//     return (b) => {
//         return a+b;
//     }}
// ;
// console.log(c1(1)(2));

// let c2 = (a) => {
//     return (b)=> a+b;
// }
// console.log(c1(1)(2));

// let c3 = (a) => (b) => a+b;
// console.log(c3(1)(2));

// //실전 코드에서 사용된다.
// let c4 = a => b => a + b;
// console.log(c4(1)(2));

//ex31
// f(function(){})('호랑이');
// 생성자

// //ex32 클로즈 함수 :
//  const f1 = function(){
//     let a = 100;//지역 변수. 하지만 f1()()를 통해서 계속 외부에서 사용되는 걸로 판명되면 생명 연장을 시킨다. 이 생면 연장 시키는 함수를 클로저 함수라고 한다.
//     return function(){
//         console.log(a);
//     }
//  }

//  f1()();
// //그냥 내부 변수를 리턴을 통해 다른 함수안에 포함해 리턴 시키면 그게 클로져인 듯.

//  // ex33 *setTimeout
//  // -비동기 함수: 코드의 실행 순서를 지키지 않는 함수

//  //setTimeout( 함수, 정수 );

//  console.log('1'); //우동

//  //비동기 함수가 없으면 함수가 블로킹이 된다.
//  setTimeout(
//     function(){
//         console.log('2'); //탕수육
//     },
//     2000 );

// console.log('3'); // 짜장

// //비동기 함수를 다시 순서를 지키는 함수로 바꾸는 것을 '동기화 시킨다'라고 말한다. {}로 막아두면 알아서 블로킹(동기화)이 된다.
// { //동기화
//     setTimeout(function () {
//         if () {
//             loging = true;
//         }
//         console.log('2');
//     }, 2000);
// }
// if (login === true) {}
// console.log('3');


// // 33) setInterval

// console.log('1');

// setInterval(
//     function () {
//         console.log('2');
//     }, 1000);

// // setTimeout(
// //     function(){
// //         clearInterval(id);
// //     },
// //     5600
// // );
// // console.log('3');

// //람다로 바꿀 수 있다.
// setTimeout(
//     ()=>{
//         // 버튼이 클릭되었을 때로 하지 굳이 setTimeout 같은 것으로 멈추지는 않는다.
//         clearInterval(id);
//     },
//     5600
// );
// console.log('3');

// 34)
// console.log('test');
// // 0, 1, 2를 출력하고 싶은 의도지만...3이 3번나왔다.
// for(var i = 0; i<3; i++){
//     setTimeout(
//         ()=>{
//             console.log(i);   
//         },
//         1000
//     );
// }

//let으로 바꾼다면 0 ,1, 2가 출력이 된다.
// for(let i = 0; i<3; i++){
//     setTimeout(
//         ()=>{
//             console.log(i);   
//         },
//         1000
//     );
// }

// let이 나오기 전 시절은?
// for (var i = 0; i < 3; i++) {
//     (num => {
//         setTimeout(() => {
//             console.log(num);
//         }, 1000);
//     })(i);
// }

// for (var i = 0; i < 3; i++) {
//     (function (num) {
//         setTimeout(function () {
//             console.log(num);
//         }, 1000);
//     })(i);
// }

//*
// for(let i = 0; i<5; i ++){
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);
// }


// // 35) eval() : 문자열을 코드로 해석해서 실행해주는 함수
// let str = '';
// str += 'let a = 10;';
// str += 'console,log(a)'

// eval(str);

// // client >> 문자열을 만든다.(js 코드를 만든다.) ->> 서버에 날린다.
// // 문자열을 받았다. >> eval을 이용해서 실행 결과를 만들 수 있다.client
// // 실행결과를 >> 클라이언트에 전송.
// // 1. 우리가 인터넷 코딩 사이트를 만들 때는 컴파일, 파싱 과정이 필요. 즉 eval만으로 충분하지 않다.

// //35 (tiger),[1.2.3.4.],{mmmm}
// // 배열 겍체(자스에서는 배열 처럼 생긴 객체일 뿐이다.)
// // 구분 기준        객체
// // 1. []           2. {}
// // 2. index사용     속성
// // 3. forEach가능   불가능
// // 4. length가능    length불가

// //36)
// let obj = {
//     s:'tiger',
//     n: 10,
//     b: true,
// }
// console.log(obj);
// console.log(obj.s,obj.n, obj.b);
// console.log(obj[s],obj[n], obj[b]);
// //출력 순서 보장 x
// for(const key in obj){
//     console.log(key,obj[key])
// }


// // *with 키워드(obj를 생략하겠다.)
// with(obj){
//     console.log(s, n, b);
// }

// //37)
// const obj = {
//     //obj = this를 등록하고 + a, b ,f1()라는 속성이 있다라고 바인딩 시킨다. 그러나 람다는 바인딩을 시키지 않기 때문에...this를 사용할 수 없다.
//     a : 10,
//     b : 20,
//     f1 : function(){
//         console.log(this.a,this.b);
//     },
//     // 람다에서 this를 사용할 수 없다.
//     f2:()=>{
//         console.log(this.a, this.b);
//     },
//     f3:function(){
//         for(const key in this){
//             console.log(key,this[key]);
//         }
//     }
// };

// //obj.f1();
// //obj.f2();
// obj.f3();

// let c = 'dd';//* 외부에서 속성 이름 변경하기.
// let apple = {
//     a : 10,
//     b : 'tiger',
//     [c] : 30
// }

// console.log(apple);



// const obj01 = {
//     a:10
// }

// obj01.b = 20;
// obj01['c'] = 30; //?

// for(let i=0;i<3;i++){
//     obj['lion'+i] = i*10;
// }

// console.log(obj01);

// console.log('end');//*F9 후에 F5를 하면 내용물 까지 보기 가능, SHIFT+F5는 디버깅 멈추기. 그냥 F5는 좀 더 에러를 자세히 볼 수 있고 crtl+f5는 그냥 실행이다

// // 38)
// const obj = {
//     a:10,
//     b:20,
// };
// console.log(obj);// 객체로 리턴
// console.log(Object.keys(obj));// 배열로 리턴

// // 키 값만 얻는다.
// let a = Object.keys(obj);
// console.log(typeof a);// 생각해보니 배열도 객체
// console.log(Array.isArray(a));// 그러므로 객체인지 판단보다 배열인지 판단하기 위해..

// // 값만 얻을 수 있다.
// console.log(Object.values(obj));


// //39) 객체 병합
// const obj01 ={
//     a:10,
//     b:20,
// };

// const obj02 = {
//     c:30,
//     d:40,
// };

// // 방법1)
// const obj03 = Object.assign(obj01,obj02);
// console.log(obj03);

// // 방법2) 90%. 위와 다르다.
// const obj04 = {obj01, obj02};
// console.log(obj04);

// // 해결. 전개 연산자...를 사용 ...은 풀어라는 이야기 이다. 어마무시하게 사용된다. 정말 많이 사용된다.
// const obj05 = {...obj01, ...obj02};
// console.log(obj05);

// console.log('end');

// let apple = (banana) => {
//     console.log(banana);
// }

// apple({...obj01,...obj02}); //*이런 식으로 객체 병합을 실시간으로.


// // 1.
// let ar = [10,20,30];
// console.log(ar);
// console.log(ar.length);
// console.log(typeof ar);
// console.log(Array.isArray(ar));

// // 2. 비어있는 배열을 만들 때 사용한다.
// let br = Array();
// console.log(br.length);

// //3.
// let cr = Array(5); //길이 . 하나를 넣는 것이 아니다. 하나 넣을거면 그냥 변수에 넣으면 되니깐?
// console.log(cr);

// //4.
// let dr = Array(5);
// console.log(dr.length);

// //5.
// let er = Array(40,50,60);
// console.log(er)

// //6. 모든 타입을 적용할 수 있다.
// let fr = [10,'tiger',true, [],{},function(){}, undefined]

// // 40) 배열 반복
// let ar = [10, 20, 30];
// console.log(ar);

// //for in
// for(const index in ar){
//     console.log(index, ar[index]);
// }

// //for of( value, item, v)
// for(const value of ar){
//     console.log(value);
// }

// //forEach 함수(forEach제어문 말고)를 사용할 수 있다.
// //ar.forEach( 함수 );
// // 이 방식은 데이터를 가공하려고 할 때 사용한다.
// console.log('');
// ar.forEach( (v, i)=>{
//     console.log(v,i);
// } );

// console.log('');

// // *기존에 가지고 있는 데이타를 가공해서 새로운 데이터를 생산한다.
// // 인수가 1개면 value 값만 가져온다.
// let br = ar.map((value)=>{ // 마우스를 대보면 값과 상관없이 배열이 리턴된다는 뜻으로 void[]가 적혀있다.
//     console.log(value);
//     return value*10;
// });
// console.log(br);
// console.log(ar);

// let cr = ar.map(value=>value * 10); // 최종적으로 줄여버리기.

// //ex41)
// let ar = [10, 11, 12,14];
// let br = ar.map((v) => {
//     // if(v%2 === 0){
//     //     return "Even";
//     // }else{
//     // return 'odd';
//     // }
    
//     return v%2 === 0? 'Even' : 'Odd' ;

// });
// ar.map(v=> v%2 ===0? 'Even' : 'Odd');
// ar.map(v=> v%2? 'Even' : 'Odd');
// console.log(br)


// //ex42)
// let ar = [{n:'tiger', a: 10,}, {n:'lion', a: 20,}, {n:'cat', a: 30,}];

// console.log(ar);
// for(const index in ar){
//     console.log(ar[index].n, ar[index].a);
    
// }

// for(const v of ar){
//     console.log(v.n, v.a);
// }

// ar.forEach((v,i)=>{
//     console.log(v);
// });

// let br = ar.map((v,i) => {
//     return v.n; //*배열로 리턴한다는 거 잊지말자
// });

// console.log(br);


//???????
// //?객체 const는 객체 그 자체를 안바꾸기 때문? 즉
// //? 값만 넘겨줘야하는 상황이 필수적으로 있는 것 처럼 보이기 때문에 callbyvalue와 callbyreference의 차이가 보이는 구나.
// ? 이혼 이론
//?????????????


// // 43)배열 함수(*func : 스스로 갱신 )
// // 1. toString
// let ar = [80 , 40, 20, 10];
// let str = ar.toString();
// console.log(str, typeof str);

// // 2.
// let date = new Date();
// console.log(date);
// console.log(date.toLocaleString());

// // 3. pop()*: 맨 마지막 요소가 삭제된다.(스택)
// ar.pop();
// console.log(ar);

// // 4. push()*
// ar.push(20);
// console.log(4, ar);

// let num= ar.push(20);
// console.log(4, ar, num);

// let br = [ 77,88,99];
// ar.push(br);
// console.log(5,ar);
// console(ar[4]);

// // 5. 
// let cr =  [10.20.30];
// let dr = [40,50]
// let er = cr.concat(40); //.리턴 값이 있어 받아야줘야한다.
// console.log(cr);
// console.log(er)


// let fr = cr.concat(dr);
// console.log(fr)

// fr = cr.concat([88,99])
// console.log(fr)

// // 6. join은 구분자를 삽입하면서 문자열을 연결한다. 
// let gr = ['tiger', 'lion', 'cat','dog'];
// console.log(gr.join());
// console.log(gr.join(''));
// console.log(gr.join('+'));

// //7. reverse()*
// console.log(gr.reverse());

// //8. shift(ubshift도 반대상황에 사용)
//             //1234
// let = gr.shift();
// console.log(t1)
// console.log(gr)

// gr.unshift('rose')
// console.log(gr);

// // 배열 정렬

// // 주의 : 우연히 정렬된다.
// let ar = [80,20,10,15];   
// console.log(ar);
// ar.sort(ar);
// console.log(ar)


// let br = [52,273,103,32];
// console.log(br);
// br.sort(br);
// console.log(br)

// let cr = [99,52,13,52,66,21]


// //cr.sort( 정렬 시키는 기준을 함수로 작성);
// //내가 함수안에서 직접 정렬하는 것이 아니다.
// //정렬 기준을 코드로 작성하면 sort가 참고한다.
// //순차 정렬로 해석한다.
// cr.sort((a,b)=>{ if(a>b){ return +1; }else{ return-1; }});
// cr.sort( (a,b) =>{
//     return (a>b)?+1:-1;
// });
// // 순차 정렬 코드
// cr.sort((a,b) => (a-b) );

// //역순 정렬
// cr.sort((a,b) => (b-a) );

// cr.sort(false); //이렇게 해도 되지만 함수를 사용하면 응용해서 가능하다.

// console.log(cr);

// cr.sort((a,b)=>{a});

// //
// let dr = [
//     {
//         n:10,
//         s:'월',
//     },
//     {
//         n:20,
//         s:'화',
//     },
//     {
//         n:30,
//         s:'수',
//     }
// ]

// //기준을 만들어 정렬시킬 수 있다. 함수를 이용하면.
// dr.sort((a,b)=>{ //순차정렬, 객체 단위
//     return a.n - b.n;
// });

// console.log(dr);

// console.log('end');




// //////////여기서 부터 다시 제대로//////////


// // 44) 배열 : slice
// let ar = [1,2,3,4,5,6,7,8];
// // 2 ~ 4-1
// let br = ar.slice(2, 4);
// console.log(br);



// //splice(시작위치, 삭제수, 추가항목, 추가항목, ...)
// let cr = [1,2,3,99,88,77];
// //cr.splice(1, 0, 4, 5, 6, 7);
// cr.splice(1, 1, 4, 5, 6, 7);
// cr.splice(2, 2, 4, 5, 6, 7);
// console.log(cr);

// // indexOf
// let dr = ["lion","tiger","dog","cat","tiger"];
// console.log(dr.indexOf('tiger'));
// console.log(dr.indexOf('ti')); //못찾으면 -1 이 리턴된다.
// console.log(dr.indexOf('tiger',2)); // 두번째 tiger
// console.log('');
// console.log(dr.lastIndexOf('tiger')); // 끝에서 부터


// let er = [1, 30, 39, 29, 10, 13];
// function f1(data){
//     return data < 40; //모두 만족되면 true 아니면 false.
// }

// function f2(data){
//     return data < 0; 
// }
// console.log( er.every(f1) );

// console.log( er.some(f2) ); // 한개라도 만족하면

// console.log('');
// let fr = [1,3,5,7];
// console.log(fr.some((value)=>{
//     return value % 2 === 0;
// }));


// // 배열에서 제공되는 map() >>

// // 45) filter
// let ar = [1, 30, 39, 29, 10, 13];

// console.log(ar.filter((v)=>{
//     return v <30;
// }));


// let br = ar.filter((v)=>{
//     return v<30;
// })

// console.log(br);

// // * 객체 이용방식. 우리는 객체를 이용할 때 헷갈리는 부분들을 완벽히 파악해야한다.
// let cr = [
//     'tiger',
//     'lion',
//     'dog',
//     'cat',
//     'rose',
// ];
// console.log(cr.filter((v) => {
//     return v.length >= 4;
// }));

// // 46)filter
// //          문자열  배열    객체
// //  length  o       o       x
// //  forEach x       o       x
// //  forIn   o       o       o
// //  forof   o       o       x
// //  map     x       o       x

// // ex47) reduce

// // 1)
// // let sum = [0, 1, 2, 3, 4].reduce(function(a,c) {
// //     console.log(a,c);
// //     return accumulator + currentValue;
// //   },0);

// // console.log(sum);

// // console.log([0,1,2,3].reduce((a,c)=>a+c,0)
// // );

// // 2)
// var initialValue = 0;
// var sum = [{x: 1}, {x:2}, {x:3}].reduce(
//     (accumulator, currentValue) => accumulator + currentValue.x
//     ,initialValue
// );

// console.log(sum)

// // 3)
// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(a, c) {
//         console.log(a,c);
//       return a.concat(c);
//     },
//     []
//   );

// console.log(flattened)
// // 펼친 결과: [0, 1, 2, 3, 4, 5]

// //4)
// console.log( 10 in [10,20,30,40] );
// console.log( 3 in [10,20,30,40] );
// console.log( 'c' in {a:10, b:20} );
// console.log( 'a' in {a:10, b:20} ); //key가 있는 지 물어본다.
// // 5-1) 
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) {
//     console.log(allNames,name);
//   if (name in allNames) {
//     allNames[name]++; // ++단항
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// console.log(countedNames);

// // 5-2)
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) {
//     console.log(allNames,name);
//     //add, mov
//     allNames[name] = (name in allNames)? allNames[name]+1:1; // 산술 연산자
//     return allNames;
// },{})

// //*단항 연산자와 산술 연산자의 속도차가  2.5배 나기 때문에 5-1번이 더 빠르고 디버깅 코드를 넣기도 쉽다.
// //테라급 이상의 데이터를 다룰 때 최종적으로 속도차가 많이난다. 다만 데이터가 작으면 심플한 5-2가 나을 지도
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// console.log(countedNames);

// //5-3
// // friends - an array of objects
// // where object field "books" - list of favorite books
// var friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
//   }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
//   }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
//   }];
  
//   // allbooks - list which will contain all friends' books +
//   // additional list contained in initialValue
//   var allbooks = friends.reduce(function(accumulator, currentValue) {
//     return [...accumulator, ...currentValue.books];//*
//   }, ['Alphabet']);
  
//   // allbooks = [
//   //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   //   'Romeo and Juliet', 'The Lord of the Rings',
//   //   'The Shining'
//   // ]

// // 48)
// let obj01 = {
//     n: 10,
//     f1: function () {
//         console.log(this.n);
//     },
//     f2: () => {
//         console.log(this.n);
//     }
// }
// obj01.f1();
// obj01.f2();

// //생성자 함수
// function Func() {
//     this.n = 10;
//     this.obj = {
//         n: 20,
//         f1: function () {
//             console.log(1, this.n);
//         },
//         f2: () => {
//             // //람다 함수는 객체 안의 this를 보지 않고 한단계 상위에 있는 놈을 객체로 본다.(바인딩을 하지 않기 때문에 자기 포함 객체로 보지 않는다?)
//             console.log(2, this.n);
//         }
//     };
// }

// let ins = new Func();
// ins.obj.f1();
// ins.obj.f2();

// // 48) 생성자 함수
// // 자바에서도 클래스의 원형은 컴파일 때 풀면 이 형태이다.
// // 일반적으로 생성자 함수 안에서는 함수를 잘 만들지 않는다. 필드 선언만 해서 사용하는 것이 일반적이다.
// // 함수가 필요하면 다른 방식을 이용한다.
// function Func(name, age){
//     //this.name = 'tiger';
//     //this.age = 10;
//     this.name = name;
//     this.age = age;
//     this.f1 = function(){
//         console.log(this.name, this.age);
//     };
// }

// let ins = new Func('lion', 20);
// ins.f1();























// //ex 49) 일반 함수와 생성자 함수의 차이점

// // 일반 함수:
// function f1(){
//     return {
//         a : 10,
//         b : function(){}// 새 객체를 만들더라도 function()은 only이고 변수들만 새로 만들어지는 데 여기서는 계속 새로 만들어서 그만큼 자원소모가 된다.
//     }
// }

// let obj1 = f1();
// let obj2 = f1();
// console.log(obj1.b === obj2.b);// 다름
// //console.log(obj1.f === obj2.f);//이런 f가 존재하지도 않는데 에러가 안뜨다니...
// console.log(obj1);

// //ex2)생성자 함수. 
// function F1(){
//     this.a = 10;
//     this.f = function(){}
// }
// let ins1 = new F1();
// let ins2 = new F1();
// console.log(obj1.f === obj2.f);//다름


// // ex3) 생성자 함수
// function F2(){
//     this.a = 10;
// }
// F2.prototype.f = function(){};
// let ins3 = new F2();
// let ins4 = new F2();
// console.log(ins3.f === ins4.f);// 같음

// //ex50)
// let obj = {
   
// }
// obj.f1 = function(){
//     console.log(1);
// }
// obj.f1();

// //2)
// function F1(){

// }
// F1.prototype.f1 = function(){
//     console.log(2);
// }
// let ins = new F1();
// ins.f1();


// //ex51_

// //1)
// let obj0 = {name:'tiger0',n1:10, n2:60};
// let obj1 = {name:'tiger1',n1:20, n2:70};
// let obj2 = {name:'tiger2',n1:30, n2:80};
// let obj3 = {name:'tiger3',n1:40, n2:90};
// let obj4 = {name:'tiger4',n1:50, n2:10};

// let ar = [];
// ar.push(obj0);
// ar.push(obj1);
// ar.push(obj2);
// ar.push(obj3);
// ar.push(obj4);

// ar.forEach((v,i) => {
//     console.log(v.name, v.n1, v.n2);
// });

// //2)

// let ar = [];
// ar.push({name:'tiger0',n1:10, n2:60});
// ar.push({name:'tiger1',n1:20, n2:70});
// ar.push({name:'tiger2',n1:30, n2:80});
// ar.push({name:'tiger3',n1:40, n2:90});
// ar.push({name:'tiger4',n1:50, n2:10});

// ar.forEach((v,i) => {
//     console.log(v.name, v.n1, v.n2);
// });


// //3)
// function makeInfo(name, n1, n2){
//     return {
//         name: name,
//         n1:n1,
//         n2:n2,
//     }
    
// }

// let ar = [];
// ar.push(makeInfo(tiger0,10, 60));
// ar.push(makeInfo(tiger0,20, 70));
// ar.push(makeInfo(tiger0,30, 80));
// ar.push(makeInfo(tiger0,40, 90));
// ar.push(makeInfo(tiger0,50, 10));

// ar.forEach((v,i) => {
//     console.log(v.name, v.n1, v.n2);
// });

// //4)
// function MakeInfo(name, n1, n2){
//     this.name = name;
//     this.n1 = n1;
//     this.n2 = n2;
// }

// let ar = [];
// ar.push(new MakeInfo('tiger0',10, 60));
// ar.push(new MakeInfo('tiger1',20, 70));
// ar.push(new MakeInfo('tiger2',30, 80));
// ar.push(new MakeInfo('tiger3',40, 90));
// ar.push(new MakeInfo('tiger4',50, 10));

// ar.forEach((v,i) => {
//     console.log(v.name, v.n1, v.n2);
// });

//5

// function MakeInfo(name, n1, n2){
//     this.name = name;
//     this.n1 = n1;
//     this.n2 = n2;
// }

// let ar = [];
// ar.push(new MakeInfo(tiger0,10, 60));
// ar.push(new MakeInfo(tiger1,20, 70));
// ar.push(new MakeInfo(tiger2,30, 80));
// ar.push(new MakeInfo(tiger3,40, 90));
// ar.push(new MakeInfo(tiger4,50, 10));

// ar.forEach((v,i) => {
//     //console.log(v.name, v.n1, v.n2);
//      ar[i].sum = v.n1+v.n2;
// });

// ar.forEach((v,i) => {
//     console.log(v.name, v.n1, v.n2,v.sum);
//      
// });




// function MakeInfo(name, n1, n2){
//     this.name = name;
//     this.n1 = n1;
//     this.n2 = n2;
   
    
// }

// let ar = [];
// ar.push(new MakeInfo(tiger0,10, 60));
// ar.push(new MakeInfo(tiger1,20, 70));
// ar.push(new MakeInfo(tiger2,30, 80));
// ar.push(new MakeInfo(tiger3,40, 90));
// ar.push(new MakeInfo(tiger4,50, 10));

// ar.forEach((v,i) => {
//     //console.log(v.name, v.n1, v.n2);
//      ar[i].sum = v.n1+v.n2;
// });

// ar.forEach((v,i) => {
//     console.log(v.name, v.n1, v.n2,v.sum);
     
// });

// MakeInfo.prototype.output = function(){ //*
//         console.log(this.name, this.n1, this.n2, this,sum);// 이렇게 만들면 forEach 와 같은 효과를 낸다. 프로토 타입으로 만들어져 표본으로 등록되어 각 객체마다 존재하기 때문. 변수는 this로 등록한다.
// }

// for(const key in ar){
//     console.log(ar[key]);
//     ar[key].output();
// }


// // 52) 상속()
// //1)
// function Apple(){
//     this.a = 10;
// }

// function Banana(){
//     this.b = 20;
// }

// Banana.prototype = new Apple();
// Banana.prototype.constructor = Banana; //상속 문법. 프로토 타입(표본)으로 등록해두자. 그러나 이렇게는 잘 사용하지 않는다.

// const obj = new Banana();
// console.log(obj.a, obj.b);


// //2)
// function Apple(){
//     this.query = {
//         name: 'tiger',
//         age:10,
//     }
// }

// function Banana(){
//     this.request = {
//         x:10,
//         y:20,
//     }
// }

// Banana.prototype = new Apple();
// Banana.prototype.constructor = Banana; //상속 문법. 프로토 타입(표본)으로 등록해두자. 그러나 이렇게는 잘 사용하지 않는다.

// const ctx = new Banana();
// console.log(ctx);




// console.log(ctx.request);
// console.log(ctx.query.name);//부모가 숨겨져 있으므로 프로토타입으로 등록된 query가 어디서 나오는 지 알 수 없지만 유추는 할 수 있다.
// console.log(ctx.query);
// console.log('');


// // 53)
// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.ceil(3.14));
// console.log(Math.ceil(-3.14));

// console.log(Math.floor(3.14));
// console.log(Math.floor(-3.14));
// //사사오입
// console.log(99, Math.round(3.4999));
// console.log(99, Math.round(-3.5));

// console.log(Math.max(3,5,6,7,8,9));
// console.log(Math.min(3,5,6,7,8,9));

// console.log(Math.pow(3,5)); /* */

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(3));
// console.log(Math.sqrt(3)*Math.sqrt(3));

// console.log(Math.sin(Math.PI*30/180)); // 30도 구하는 과정, 수학: 각도 (X) 존재 하지 않는 거 설명 ,Radian 설명, 180도 = 파이 라디안. 직접적인 각도로 증명하는 것이 없는 이유. 
// // 최종 결과: 2:3 = 4:x를 구하는 과정과 마찬가지 방식으로 구한다. ex) 180도: 3.14 = 30도: x

// function degreeToRadian(degree){
//     return Math.PI*degree / 180.0;
// }
// console.log(Math.sin(degreeToRadian(30)));

// console.log(Math.sin(degreeToRadian(30)));

// for(let i = 0; i<10; i++){
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// }

// // 54) JSON >> 객체, 객체 >> JSON

// let obj1 = {
//     a: 10,
//     b: 'tiger'
// };

// let str = JSON.stringify(obj1);
// console.log(typeof str, str);

// // 보낸다.
// // str은 네트워크 데이터 전송으로 사용된다.

// //받았다.(역직렬화)
// let obj2 = JSON.parse(str);
// console.log(typeof obj2, obj2)

// //ex56)
// //  1)
// const obj = {
//     name: 'tiger',
//     age:10,
// }
// //* 비구조화 할당
// let {name, age} = obj;
// console.log(name, age);

// let {name9, age9} = obj;
// console.log({name, age});

// //  2)
// function f1({name, age}) {
//     console.log(name, age);
// }

// f1(obj);

// //  ex3)
// const ar = [10,20,30];
// let [dog, cat, tiger] = ar;
// console.log(dog, cat, tiger);

// //  4)
// const obj2 = {
//     aa: 'tiger',
//     bb:10,
// }

// //aa:cc >> rename이 일어난다.
// let {aa:cc, bb:dd} = obj2;
// //console.log(aa,bb);//에러
// console.log(cc, dd);

// console.log('---------------------------------------------')
// //5)
// function f2({aa:cc, bb:dd}){
//     console.log(cc, dd);
// }

// f2(obj2);



// const obj = {
//     nam: 'tiger',
//     age:10,
//     c:3
// }
// //* 비구조화 할당
// let {nam, age} = obj;
// console.log(name1, age);


// // ex6)*
// const initialState = {
//     post:{

//     }
// }

// const payload = {
//     data:{
//         name: 'tiger',
//     }
// }

// const {data: post} = payload;
// console.log(post);
// console.log(post.name);

// // 57)* 향상된 객체 리터럴 ( 이 이름을 알아둬야한다.)
// const a = 10;
// const c = 30;
// const obj = {
//     a,
//     b:20,
//     c
// }

// console.log(obj);

// // 58) 함수의 디폴트 파라미터

// function f1(a, b= 1000, c = 'tiger'){
//     console.log(a,b,c);
// };
// f1(10);
// f1(10,2000);// 새로 대입하는 값이 대입.
// f1(10,2000,'lion');

// // 모던 자바 스크립트 Deep Dive 469P
// // ES5의 클래스의 역할을 하는 생성자 함수와 ES6의 클래스의 정확한 차이 알기
// // ES6에서는 처음 정의할 때 Prototype 대신 static으로 정의하지만 모든 인스턴스 객체들에게 똑같이 추가하기 위해 Prototype을 이용한다.(이름 의미 자체가 Prototype)

// //* function a(){} 방식의 선언 후 new로 인스턴스를 만드는 것이 아닌 let a = ~ 식의 대입으로 생성자 함수를 만들어주기 때문에 return으로 생성자를 직접 리턴 시키고 리턴을 실행하기 위해 ()를 붙였다. 그 후 리턴 값을 받은 Person을 new시켜서 만든다.
// //* 일반 함수는 리턴 값을 주는 계산 모듈일 뿐이고 클래스는 정의문일 뿐이라는 것을 기억하자.
// // new 처럼 만들기 위해 하나의 새로운 주소를 가진 Person을 만들어 return해서 던져준 것이다. new 또한 하나의 새로운 것을 만들어 대입하는 것인 것 처럼.

// let Person = (function(){
//     this.age;
//     function Person(name){
//         this.name = name;
//     }

//     Person.prototype.sayHi = function(){
//         console.log('Hi! My name is ' + this.name);
//     };

//     Person.sayHello = function(){
//         console.log('Hello');
//     };
//     return Person;
// }());

// class Person{
    
//     constructor(name){
//         this.name
//     }

//     sayHi(){
//         console.log(`Hi! My Name is ${this.name}`);
//     }

//     static sayHello(){
//        console.log('Hello') 
//     }

// }

// //*우리는 리턴 값이 함수인 함수를 즉시 실행 시킬 때 왜 a()(); 식인지 잘 생각해봐야한다. 이미 a()를 했을 때 리턴을 시켰고 리턴해서 튀어나온 함수를 한번 더 () 한것이라 볼 수 있다. 즉 ()는 실행 문이라 보면된다.


// //*그리고 헷갈릴만한 코드. 자바스크립트의 클래스 역할을 하는 생성자 함수는 실행문을 넣는 것이 가능하다.
// ar=[];
// ar.push(new Make('orange',10,20));
// ar.push(new Make('apple',30,40));
// ar.push(new Make('grape',50,60));


// function Make(name,n1,n2){
    
//     this.name=name;
//     this.n1=n1;
//     this.n2=n2;

//     ar.forEach((v,i) => {
//         console.log(v,i);
//     });
    
// }

// console.log('---------------------');
// ar.forEach((v,i) => {
//     console.log(v,i);
    
// });



// //-----------------------------------------------------------------------------

// ar=[];
// ar.push(new Make('orange',10,20));
// ar.push(new Make('apple',30,40));
// ar.push(new Make('grape',50,60));


// function Make(name,n1,n2){
    
//     this.name=name;
//     this.n1=n1;
//     this.n2=n2;

//     ar.forEach((v,i) => {
//         console.log(v,i);
//     });
    
// }

// console.log('---------------------');
// ar.forEach((v,i) => {
//     console.log(v,i);
    
// });


// //---프로토타입의 오류---------------------------------------------------------------

// function Make(name,n1,n2){
    
//     this.name=name;
//     this.n1=n1;
//     this.n2=n2;
// }

// ar=[];


// //Make.prototype.sum = 0; 정의를 바로 해주면 된다.

// //함수 동적으로 만들기
// Make.prototype.output=function(){
//     // console.log(this.name,this.n1,this.n2,this.sum);
//     // this.sum하면 저절로 생길까?
//     // this.sum =10;

    
// console.log(this.name,this.n1,this.n2,this.sum);
// this.sum=10;
// }

// ar.push(new Make('orange',10,20));
// ar.push(new Make('apple',30,40));
// ar.push(new Make('grape',50,60));
 

// for(const key in ar){

//     console.log(key);// 여기서 key는 인덱스이다.
    
//     // ar[0].output();// 이렇게 지정해줘야지만 값이 들어간다. 이렇게 지정안해주면 안들어감. 
//     // ar[1].output();              
//     // ar[2].output();
//     ar[key].output();//배열안에 들어있는게 객체니까 객체 안에 있는 output함수 사용함.
// }
// console.log('---------');



// ar[0].output();// 이렇게 지정해줘야지만 값이 들어간다. 이렇게 지정안해주면 안들어감. 
// ar[1].output();              
// ar[2].output();

// console.log('---------');





// //---------전역변수, 지역변수 일때의 비동기함수-----------------------------

// for (var i =0; i < 3; i++) { //var은 전역변수-> 3 3 3 이 출력된다.
    
//     setTimeout(()=>{
//         console.log(i);
//     },0); 
// }


// //for문 돌면 이런식으로 세팅이된다.

// // setTimeout(()=>{
// //     console.log(i);
// // },1000);

// // setTimeout(()=>{
// //     console.log(i);
// // },1000);

// // setTimeout(()=>{
// //     console.log(i);
// // },1000);



// // 지역변수일때의 경우 -> 0,1,2가 출력된다.
// {
//     i=0

//     for(let i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },
//         1000
//         );
//     }
// }


// {   
//     i=1

//     for(let i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },
//         1000
//         );
//     }
// }


// {
//     i=2

//     for(let i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },
//         1000
//         );
//     }
// }


// //let안쓰는 옛날코드(즉시실행함수로 해결)
// //즉시 실행함수 쓰면 for문 돌떄마다 즉시즉시 함수 실행된다.
// // 즉시 실행함수 안쓰면 for문 다 돌고 실행이됨
// for (var i = 0; i < 3; i++) {

//     (function(num){
//       setTimeout(()=>{
//           console.log(num);      
//       },1000);
//     })(i);
//   }

// //----------------------------------------------------------------------------












// 강사님 버젼 클래스 코드

// // ex1)
// // 생성자 함수 : 클래스로도 가능하다.

// function Person(name){
//     this.name = name;

// }
// Person.prototype.f1 = function(){
//     console.log(this.name);
// }

// let p = new Person('tiger');
// p.f1();




// // ex2)
// // 생성자 함수 : 클래스로도 가능하다.

// function Person(name){
//     this.name = name;

//     Person.prototype.f1 = function(){
//         console.log(this.name); // 안으로 집어넣어도 결과는 같다.
//     }
// }


// let p = new Person('tiger');
// p.f1();


// // ex3)
// let Person2 = (function(){
//     function Person(name){
//         this.name = name;
    
//         Person.prototype.f1 = function(){
//             console.log(this.name); // 안으로 집어넣어도 결과는 같다.
//         }
//     }
//     return Person;
// })();



// let p = new Person2('tiger');
// p.f1();



// // ex4)*

// class Person{
//     constructor(){
//         console.log(1);
//     }
// }

// let p = new Person();



// //ex5)

// class Person{
//     // 2.
    
//     n3 = 30; //생성자 안에서 필드를 선언하는 방법 1
//     constructor(n2){
//         console.log(1);
//         //생성자 안에서 필드를 선언하는 방법 2
//         this.n1 = 10;
//          //생성자 안에서 필드를 선언하는 방법 3
//         this.n2 = n2;
//     }
// }

// let p = new Person(20);
// console.log(p.n1, p.n2, p.n3);


// //ex6)

// class Person{
//     n3 = 30; //생성자 안에서 필드를 선언하는 방법 1
//     constructor(n2){
//         console.log(1);
//         this.n1 = 10;
//         this.n2 = n2;
//     }
//     // 프로토 타입.함수 이름 (Person.prototype.f1) >> 이 문법과 완전 동격
//     f1(){
//         // this를 생략할 수 없다.
//         console.log(this.n1, this.n2, this.n3);

//     }
// }

// let p = new Person(20);
// console.log(p.n1, p.n2, p.n3);
// p.f1()



// //ex7)

// class Person{
//     n3 = 30; //생성자 안에서 필드를 선언하는 방법 1
//     static n4 = 40;
//     constructor(n2){
//         console.log(1);
//         this.n1 = 10;
//         this.n2 = n2;
//     }
//     // 프로토 타입.함수 이름 (Person.prototype.f1) >> 이 문법과 완전 동격
//     f1(){
//         // this를 생략할 수 없다.
//         console.log(this.n1, this.n2, this.n3, this.n4); // this.n4 가  undefined라고 뜬다.

//     }
//     static f2(){
//         // 필드 사용 못함.
//         console.log('static f2 call',this.n4);
//     }
// }

// let p = new Person(20);
// //console.log(p.n1, p.n2, p.n3);
// p.f1();
// Person.f2(); //static은 이렇게만 접근이 가능하다.

// // 7-1
// function Person(){

// }
// Person.prototype.f1 = function(){
//     console.log('1');

//     Person.f3 = function(){
//         console.log('3');
//     }; // static 함수
// };
// Person.f2 = function(){
//     console.log('2');
// }; // static 함수

// let p = new Person();
// p.f1();
// Person.f2();



// // ex8) 클래스 이름이 리네임이 일어난다.
// let Person2 = class Person{} // 리네임

// //let p1 =  new Person(); error 발생
// let p2 = new Person2(); // 정상작동

// //생성자는 한번만 사용하다.(오버로드)

// //ex9)
// class Person{
//     constructor(){
//         //default 값
//         //return this; 나를 리턴해서 인스턴스를 만든다고 보면 되나? 사실 모든 클래스를 말한다고 보면 될 듯 하다.
//         //return {};
//         //return 100; //>>숫자는 return this로 걍 바뀐다;
//         return {a:10, b:20}; //위의 return Person을 이용한 클래스 만드는 예제와 같다 보면 될 듯 한데?
//     }
// }

// let p = new Person();
// console.log(p);

// // ex10-1)
// class Square{
//     static area(w,h){
//         return w*h;
//     }
// }
// console(Square.area(3,4));


// // ex10-2)
// class Square{
//     constructor(w,h){
//         this.w=w;
//         this.h=h;
//     }
//     area(){
//         return this.w*this.h;
//     }
// }
// let p = new Square(3,4); //Math 같은 부분들은 전부 스태틱으로 되어있기 때문에 인스턴스가 아닌 클래스 자체를 쓴 것이고 그래서 대문자인 것이다.
// console(p.area(3,4));

// // ex11)
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName; //이렇게만 해도 생성이 된다고?
//         this.lastName = lastName;
//     }

//     get fullName(){
//         console.log('full Name');
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(name){
//         [] = name.split(' '); // 스페이스바를 기준으로 나누어 저장
//     }
//     set fullName1(name){
//         [this.firstName, thos.lastName] = name.split(' '); // 스페이스바를 기준으로 나누어 저장. 전개하는 방식을 사용해서 각각 저장.
//     }
// }

// const p = new Person('while','tiger');
// console.log(p.firstName, p.lastName);
// console.log(`${p.firstName} ${p.lastName}`)
// console.log(p.fullName); // get type을 사용하면 속성 사용하듯이 ()를 안붙이고 사용

// p.fullName = 'red lion';
// console.log(p.fullName);


// //ex12
// class Person{
//     name = ''; //2021년 1월 부터 가능하게 바뀌었다.
    
// }

// class Person2{
//     this.name = ''; // this에 클래스 필드 바인딩 불가능.
    
// }

// class Person3{
//     name = 'lee';
//     constructor(){
//         console.log(this.name); // this를 빼면 안된다.
//     }
// }


// ex13)
// class Person{
//     // #을 붙이면 private
//     #name = 'tiger';
//     constructor(name){
//         this.#name = name;
//     }
// }
// let p = new Person('lion');
// console.log(p.name);
// //console.log(p.#name);


// // ex13-2)
// class Person{
//     // #을 붙이면 private
    
//     constructor(name){
//         this.#name = name;
//     }

//     //모순 코드. # 임에도  name으로 그냥 받아 바로 사용이 가능하다.
//     #name = 'tiger';// 프로퍼티 대상을 바로 위에 올려두는 것이 국룰.
//     get name(){
//            //모순 코드. # 임에도  name으로 그냥 받아 바로 사용이 가능하다.
//            //가변적인 코드가 추가 될 수 있다. name이라는 이름을 가공할 수 있다.
//         return this.#name.trim();
//     }
//     //set

//     #age= 10;
//     get age(){
//         return this.#age;
//     }
// }
// let p = new Person('lion');
// console.log(p.name);
// //console.log(p.#name);

// // ex14)
// class Animal{
//     f1(){
//         return 'f1';
//     }
//     f3(){
//         return 'Animal f3';
//     }
// }

// class Bird extends Animal{
//     f2(){
//         return 'f2';
//     }
//     f3(){
//         return 'Bird f3'
//     }
// }

// let b = new Bird();
// console.log(b.f1());
// console.log(b.f2());
// console.log(b.f3());

// //451p에 생성자 함수 방식의 상속이 있다.

// //ex15-1)
// class Base{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
// }

// class Derived extends Base{
//     //디폴트 코드이다.
//     constructor(...args){ //적으나 안적으나 이 부분이 생략되어 있다.
//          super(...args);
//      }
// }

// new Derived();
// new Derived(3);
// new Derived(3,4);

// //ex15-2)
// class Base{
//     constructor(a,b){
//         console.log(a,b);
//         this.a = a;
//         this.b = b;
//     }
// }

// class Derived extends Base{
//     //디폴트 코드이다.
//     constructor(a, b, c){ // 생성자를 만들 것이면 super를 무조건 붙여야 한다.
//          super(a, b + c);
//      }
// }

// new Derived(3);
// new Derived(3, 4);
// new Derived(3, 4, 5);

// // 461p에 toString은 디폴트 메소드를 오버라이딩이 된 것 같다.

// // 466p 에 쓸만한 상속 코드가 있다. 그리고 여기서 부터 표준 빌트인 함수들이 존재한다.
// //( 빌트인 함수(Built-in function) 은 언어 설계 과정에서 미리 만들어진 함수를 말합니다. )

// ex16
class MyArray extends Array{
    uniq(){
        return this.filter(
            (v,i,self)=> {
                console.log(v,i,self);
                self.indexOf(v) === i;
            }
        );
    }

    average(){
        //console.log(this.length);
       // return this.reduce((p,c) => {return p+c},0)/ this.length;
       return this.reduce((p,c) =>p+c,0)/ this.length;
        // return this.reduce((p,c)=>{
        //     return p+c,
        //      0
        // });
    }
}

const ar = new MyArray(1, 1, 2, 2, 3, 3, 3);
console.log(ar.uniq());
console.log(ar.average());

//Array 생성자 함수를 상속받아 확장한 MyArray 클래스가 생성한 인스턴스는 Array.prototype과 MyArray.Prototype의 모든 메소드를 사용할 수 있다.