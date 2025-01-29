
// Following Page : https://react.dev/learn/typescript

// inline 문법 사용 : 필드 개수가 몇 없을 때 사용
function TypeScriptButton({txt}: {txt : string}) {
    return (
        <button>{txt}</button>
    );
}

// interface, type 문법 사용 : component의 props 를 묘사할 수 있다 // TODO : what is component's props?
interface ButtonProps {
    title: string;
    disabled: boolean;
}

function TypeScriptButton2({title, disabled}: ButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}
/*
    TypeScript 가 객체를 표현하는 방법
    - [Object](https://www.typescriptlang.org/docs/handbook/2/objects.html)
        - 속성과 유형을 나열
    - [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
        - 유형에 두 개 이상의 후보를 둔다 (ex. id 값의 유형은 문자나 숫자가 될 수 있다)
    - [Creating Type from Type](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
        - 추가 고급 사례
*/

// Object with JavaScript
// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// }

// Object with TypeScript

// interface Person {
//     name: string;
//     age: number
// }
type Person = {     // TODO : what is difference between interface and type?
    name: string;
    age: number;
};

function greet(person: Person) {
    return "Hello " + person.name;
}

// Union with TypeScript
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");

function printTextOrNumberOrBool(
    textOrNumberOrBool:
        | string
        | number
        | boolean
) {
    console.log(textOrNumberOrBool);
}

printTextOrNumberOrBool("Test");

// 여러 컴포넌트를 내보내기 위해서는 export default 가 아니라 named export 사용해야 한다
export { TypeScriptButton, TypeScriptButton2, greet}

