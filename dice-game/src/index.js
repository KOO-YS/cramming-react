import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const contraction = ReactDOM.createRoot(document.getElementById('contraction'));

root.render(
  <Fragment>
    <h1>실행 테스트</h1>
    <h3>두 줄 이상의 테스트 코드</h3>
  </Fragment>
);

contraction.render(
  <>
    <h1>contraction - 실행 테스트</h1>
    <h3>contraction - 두 줄 이상의 테스트 코드</h3>
  </>
);