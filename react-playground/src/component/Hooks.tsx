import { useState, createContext, useContext, useRef, useEffect, useMemo, useId } from "react";

/**
 * State Hooks
 * - state : 컴포넌트가 기억해야 하는 정보 저장할 때 사용
 */
function ImageGallery() {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    const [index, setIndex] = useState(0); // 0으로 초기화
    // useState(0)를 이용하여 index 값을 저장하고 setIndex를 통해 값 변경

    return (
        <div>
            <img src={images[index]} alt={images[index]} />
            {/* 클릭 이벤트 발생 시 setIndex로 index값 변경 */}
            <button onClick={() => setIndex((prev) => (prev + 1) % images.length)}>
                Next Image
            </button>
        </div>
    );
}

/**
 * Context Hooks
 * - context : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때, props 없이 전달 가능
 */
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");        // default 값 : light

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(theme === "light" ? "dark" : "light") }}>
            {children}
        </ThemeContext.Provider>
    );
}

function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext);        // 부모인 쏘두
    return (
        <button onClick={toggleTheme} style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            Toggle Theme
        </button>
    );
}


/**
 * Ref Hooks
 * - 컴포넌트가 직접 화면요소 DOM 노드를 참조할 있도록 함
 * - 값을 유지하되, 값이 변경되어도 렌더링을 트리거하지 않음
 */
function Form() {
    const inputRef = useRef(null);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="type here"/>
            {/* input에 직접 접근하여 focus를 호출할 수 있다 */}
            <button onClick={() => inputRef.current.focus()}> Focus InputRef </button>
        </div>
    );
}

/**
 * Effect Hooks
 * - 컴포넌트가 외부 시스템과 동기화할 때 사용
 * - API 호출, DOM 조작, 이벤트 리스너 설정에 활용
 */
function ChatRoom({ roomId }) {
    // useEffect : roomId 가 변경될 때 실행
    useEffect(() => {
        console.log(`Entering room : ${roomId}`);

        return () => {
            console.log(`Leaving room : ${roomId}`);
        }
    }, [roomId]);

    return <h1>Welcome To ChatRoom ID : {roomId}</h1>
}

/**
 * Performance Hooks
 * - 렌더링 성능 최적화를 위한 Hooks
 */
function ExpensiveComponent({num}) {
    const result = useMemo(() => {
        console.log("오랜 연산");
        return num * 2;
    }, [num]);

    return <p>Expensive Component Calculate... Caching Reult ... : {result}</p>
}

/**
 * Id Hooks
 * - 접근성을 고려한 고유 ID 생성
 */
function UniqueIdForm() {
    const id = useId(); // 고유 id 생성되어 중복 방지
    useEffect(() => {
        console.log(`Generated ID : ${id}`);
    }, [id]);
    return (
        <div>
            <label htmlFor={id}>Username</label>
            <input id={id} type="text" />
            <p>Generated ID: {id}</p>
            {/* 화면에 ID 값 표시
                :r: 와 같은 값이 나오는데, UUID처럼 완전한 고유 문자열을 생성하는 것이 아닌, React 내부에서 컴포넌트 간 일관성을 유지하기 위한 고유 식별자를 생성하는 것
                실제 DOM의 id 속성으로 사용될 때 변환됨
            */}
        </div>
    );
}

export {ImageGallery, ThemeProvider, Button, Form, ChatRoom, ExpensiveComponent, UniqueIdForm}