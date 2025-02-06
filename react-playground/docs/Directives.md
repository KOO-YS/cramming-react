# Directives
[React Server Components와 호환되는 번들러 (ex. Next.js App Router)](https://react.dev/learn/start-a-new-react-project#bleeding-edge-react-frameworks)에 대한 지침을 제공

## 소스코드 지시문
- `use client` : 클라이언트에서 어떤 코드가 실행되는지 표시
  -  특정 모듈과 전이적 종속성을 클라이언트 코드로 표시하기 위해 jsx 파일 맨 위에 추가
  - 이 표시가 설정된 파일은 Server Component로 가져오기 되어 서버실행 & 클라이언트실행 코드의 경계 모듈로 처리된다
- `use server` : 클라이언트 측 코드에서 호출할 수 있는 서버 측 함수 표시
  - 비동기 함수 본문의 맨 위에 추가하여 클라이언트가 함수를 호출할 수 있도록 표시