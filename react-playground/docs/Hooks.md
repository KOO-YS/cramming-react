# Hooks 
[react docs : Hooks](https://ko.react.dev/reference/react/hooks)

함수 컴포넌트에서 React **상태**(state)와 **생명주기 기능**(lifecycle features)를 연동할 수 있게 해주는 함수
- Hooks 이전에는 state, lifecycle 메소드를 사용하기 위해서 함수형 컴포넌트를 클래스 컴포넌트로 변환해야 했었음

## Hooks 장점
- 상태 로직 단순화 : 함수형 컴포넌트에 상태를 추가하여 전반적인 로직을 단순화하고 가독성있게 생성
- 코드 재사용성과 관심사 분리 : 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간 상태로직을 제사용할 수 있음
- 사이드 이펙트 감소 : 함수형 컴포넌트에 생명주기 메소드와 유사한 기능을 제공하여 사이드이펙트 효율적 처리

## 주요 Hooks 종류
- useState: 컴포넌트의 상태를 관리
- useEffect: 사이드 이펙트(데이터 fetching, DOM 조작 등)를 처리
- useContext: 컴포넌트 트리 전체에 값을 전달하는 글로벌 상태를 관리
- useReducer: 복잡한 상태 로직을 관리하기 위한 상태 관리 패턴
- useMemo: 값이 변하지 않으면 다시 계산하지 않도록 메모이제이션
- useCallback: 함수를 메모이제이션하여 불필요한 렌더링을 방지
- useRef: DOM 요소에 대한 참조를 유지하거나, 변경되지 않는 값을 저장
- useImperativeHandle: 부모 컴포넌트에서 자식 컴포넌트의 메서드에 접근 가능
- useLayoutEffect: 브라우저가 모든 DOM 변경 사항을 반영한 후에 실행
- useTransition: 큰 업데이트를 부드럽게 처리하기 위한 훅


---

### Ref 
- https://wikidocs.net/197627