# Start

```shell
brew install node

node -v
#v23.6.1

npm -v
#10.9.2

npm create vite@latest react-playground
# SELECT > React > typescript

#  cd react-playground
#  npm install
#  npm run dev

```
## React Docs

https://react.dev/learn

### npx
- npm@5.2.0 버전부터 새롭게 추가
- npm 레지스트리에 있는 패키지를 더 쉽게 설치, 관리
- node, npm 이 설치되어 있다면 이미 npx 를 사용할 수 있는 상태이다
- 주요 기능
  - 로컬 설치 없이 패키지 실행
  - 글로벌 설치된 패키지의 충돌 방지 (각 프로젝트마다 )
  - 일회성 실행 (패키지 실행 후 자동 삭제하여 불필요한 공간 차지를 방지)


### Vite
https://vite.dev/guide/
- frontend 개발 서버 및 빌드 도구
- webpack과 비교하여 속도 향상
- Hot Module Replacement 기능을 통해 변경된 코드 빠르게 반영
- ES modules을 기본으로 지원하여 최신 JavaScript 표준 활용
- [참고 블로그](https://deku.posstree.com/ko/react/vite/react-typescript/start/)

---


```shell
[21:26:51] [~/Documents/workspace-git/cramming-react/react-playground] [main ✖] ❱❱❱ tree -I node_modules 
.
├── eslint.config.js    # 코드 스타일 가이드
├── index.html          # 
├── package-lock.json   # 정확한 버전 기록
├── package.json        # 메타데이터와 의존성 관리, 스크립트 명령 정의
├── public              # 정적 파일 보관
│   └── vite.svg
├── src
│   ├── App.css         # 메인 컴포넌트의 스타일
│   ├── App.tsx         # 메인 컴포넌트의 로직. 다른 컴포넌트를 import하여 구성하고 상태 관리
│   ├── assets          # 이미지, 폰트 등 정적 자원 저장
│   │   └── react.svg
│   ├── index.css       # 전역 스타일 시트
│   ├── main.tsx        # 애플리케이션 진입점.  React DOM을 사용하여 root 요소에 앱을 렌더링
                            # src 폴더의 최상위에 위치하여 App.tsx 포함 앱 전체 구조를 정의
│   └── vite-env.d.ts       # TypeScript에서 사용할 전역 변수나 타입을 선언하는 파일
├── tsconfig.json           # 각 환경에 맞는 별도의 설정파일
├── tsconfig.app.json       # 브라우저 환경에서 실행되는 코드에 대한 설정
├── tsconfig.node.json      # node.js 환경에서 실행되는 코드에 대한 설정
└── vite.config.ts          # vite 설정 파일. 서버 설정, 빌드 설정, 플러그인 설정


```