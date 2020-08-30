[##_Image|kage@lRc47/btqG9AsVkcF/7BD69iY9NiGhL7i2hHOCnK/img.png|alignCenter|data-filename="react.png" data-origin-width="650" data-origin-height="300" data-ke-mobilestyle="widthContent"|||_##]

# Hook

Hook은 React 버전 16.8에 새로 추가되었습니다. Hook을 이용하여 Class를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.

> 이미 작성된 코드에 필요한 변화사항은 없습니다.

-   선택적 사용: 기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook를 사용할 수 있습니다. Hook이 필요 없다면 사용할 필요는 없습니다.
-   100% 이전 버전과의 호환성: Hook은 호환성을 깨뜨리는 변화가 없습니다.
-   현재 사용 가능: Hook는 배포 v16.8.0에서 사용할 수 이ㅣㅣㅆ습니다.

Hook은 props, state, context, refs, lifecycle와 같은 React 개념에 좀 더 직관적인 API를 제공합니다.

## 동기

Hook은 5년 동안 React에서 컴포넌트들을 유지하고 작성하는데 만났던 표면상 연결되지 않습니다.

-   컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵습니다.
-   복잡한 컴포넌트들은 이해하기 어렵습니다.
-   class은 사람과 기계를 혼동시킵니다.

### 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵습니다.

Hook을 사용하면 컴포넌트로부터 상태 관련 로직을 추상화할 수 있으며, 독립적인 테스트와 재사용이 가능합니다.  
Hook는 계층 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줍니다.

### 복잡한 컴포넌트들은 이해하기 어렵습니다.

컴포넌트들은 `componentDidMount`, `componentDidUpdate`로 데이터를 가져오는 것을 수행할 수 있습니다.  
`componentDidMount` 메서드라도 이벤트 리스너를 설정하는 것과 같은 관계없는 일부 로직이 포함될 수 있습니다.  
`comoinentWillUnmount`에서 cleanup을 수행하기도 합니다.

### class은 사람과 기계를 혼동시킵니다.

class가 코드의 재사용성과 코드 구성을 어렵게 만들며, 큰 진입장벽이라는 것을 알게 되었고, this가 작동하는지 ㅇ라아야만 했고, 대부분의 다른 언어와 다르게 동작합니다.

> Hook은 Class없이 React 기능들을 사용하는 방법을 알려줍니다.

## State Hook

useState가 바로 Hook입니다.  
Hook을 호출해 함수 컴포넌트 안에 state를 추가했습니다. state는 컴포넌트가 다시 렌더링 되어도 그대로 유지될 것입니다. useState는 현재의 state값과 이 값을 업데이트하는 함수를 쌍으로 제공합니다. 함수를 이벤트 핸들러나 다른 곳에서 호출할 수 있습니다.

`Class의 this.setState`와 다른 점.

-   이전 state와 새로운 state를 합치지 않는다는 차이점이 있다.

### 여러 state 변수 선언하기

하나의 컴포넌트 내에서 State Hook을 여러 개 사용할 수 있다.

```
function Example() {
    const [value, setValue] = useState({});
    const [age, setAge] = useState(20);
    const [todos, setTodos] = useState([{text: 'Hook'}]);
}
```

[배열 구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 문법은 useState로 호출괸 state 변수들을 다른 변수명으로 할당할 수 있게 해줍니다.  
React는 매번 렌더링할 때 useState가 사용된 순서대로 실행될 것입니다.

> Hook  
> 함수 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수.  
> Hook은 class 안에서는 동작하지 않고, class 없이 React를 사용할 수 있게 해주는 것입니다.

## Effect Hook

React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작합니다.  
\=> side effects / 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업이기 때문.

useEffect는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해주면 componentDidMount나 componentDidUpdate, componentWillUnmount와 같은 목적으로 제공되지만, 하나의 API로 통합된 것입니다.

컴포넌트 내에서 여러 개의 effect를 사용할 수 있습니다.

> Hook 사용규칙 :v:

-   최상위에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서Hook을 실행하지 마세요.
-   React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. (custom Hook 내에서 호출 가능)

## 또 다른 내장 Hook

### useContaxt

컴포넌트를 중첩하지 않고도 React context를 구독할 수 있게 해줍니다.

### useReducer

복잡한 컴포넌트들의 state를 reducer로 관리할 수 있게 해줍니다.