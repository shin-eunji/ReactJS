# Hook

## 개요
Hook가 React 버전 16.8에 새로 추가되었습니다.
Hook은 Class를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.
 
### UseState (State Hook)
```
import React, { useState } from 'ract';

function CountNumber() {
    const [count, setCount] = useState(0);

    return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => {setCount(count + 1)}}>Click Me</button>
    </div>
    );
}
```

Hook을 호출해 함수 컴포넌트 안에 state를 추가.
이 state는 컴포넌트가 다시 렌더링 되어도 그대로 유지.
useState는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공.

**찾아보기: useState와 this.state를 비교**

### useEffect (Effect Hook)

React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업.
다른 컴포넌트에 영향을 줄 수 있고, 렌더링 과정에서는 구현할 수 없는 작업.

useEffect는 함수 컴포넌트 내에서 side effects를 수행.
componentDidMount, componentDidUpdate, componentWillUnmount

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
리액트는 우리가 넘긴 함수를 기억(Effect)했다가 DOM 업데이트를 수행한 이후에 불러냅니다.

### Hook의 규칙

#### 최상위에서만 Hook을 호출한다.
반복문, 조건문, 중첩된 함수 내에서 Hook을 호출하면 안된다.

#### 오직 React 함수 내에서 Hook을 호출한다.
Hook을 일반적인 Javascript 함수에서 호출하면 안된다.
