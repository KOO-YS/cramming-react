# Apis
React 컴포넌트 정의에 유용한 몇 가지 내장 API를 제공

- createContext: 컨텍스트를 생성하여 하위 컴포넌트들에게 공유. useContext와 함께 사용됨
- forwardRef: 자식 컴포넌트의 DOM 노드를 부모 컴포넌트에서 ref를 통해 접근, useRef와 함께 사용
- lazy: 컴포넌트의 코드를 처음 렌더링될 때까지 로딩을 미룸. 코드 분할에 유용
- memo: 컴포넌트의 props가 변경되지 않았으면 리렌더링을 건너뜀. useMemo, useCallback과 함께 사용하여 성능을 최적화
- startTransition: 상태 업데이트를 급하지 않은 업데이트로 표시. useTransition과 비슷하게 사용
- act: 테스트 환경에서 렌더링과 사용자 인터랙션을 act()로 감싸서, 업데이트가 완료된 후 assertion을 실행하도록 함


## 리소스 API:

컴포넌트는 state로 관리하지 않고도 리소스에 접근할 수 있다
예를 들어 Promise로부터 메시지를 읽거나 context로부터 스타일 정보를 읽음 

use를 사용하여 리소스의 값을 읽음
- 예를 들어, use(promise)는 promise가 resolve될 때까지 기다렸다가 값을 반환