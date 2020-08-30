# React

## 리액트의 개요

React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.  
처음부터 점진적으로 적용할 수 있도록 설계되었으며 필요한 만큼 React를 사용할 수 있습니다.

## JSX

```
const element = <h1>Hello, World!</h1>
```

JSX라 하며 JavaScript를 확장한 문법입니다.  
React Element(엘리먼트)를 생성합니다.

### JSX란?

React에서는 이벤트가 처리되는 방식, 시간에 따라 state(상태)가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등 렌더링 로직이 본질적으로 다른 UI 로직과 연결됩니다.

별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 Component(컴포넌트) 부르는 느슨하게 연결된 유닛으로 분리합니다.

```
function formatName(user) {
    return user.firstNmae + '' + user.lastName;
}

const user = {
    firstName: 'Shin',
    lastName: 'Eunji'
};

const element = {
    <h1>Hello, {formatName(user))!</h1>
};
```

(user.firstNmae) 또는 (formatName(user))등은 모두 유효한 JavaScript 표현식입니다.

### JSX 속성

속성에 따옴표를 이용해 문자열 리터럴을 정의하며, 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 정의합니다.

```
const element = <div tabIndex="0"></div>
const Image = <img src={user.avatarUrl} alt="photo"/>
```

### JSX는 객체를 표현

Babel은 JSX를 React.crateElement() 호출로 컴파일합니다.  
이러한 객체를 React Element 라고 하며, 화면에 표시하려는 항목에 대한 설명입니다.

```
const element = (
    <h1 className="greeting">Hello, World!</h1>
)

const element = React.createElement(
    'h1',
    {className="greeting"},
    'Hello, World!'
);
```

```
// 단순화됨.
const element = {
    type="h1",
    props={
        className="greeting",
        children: 'Hello, World!"
    }
};
```

### Components와 Props

Component: 자신의 출력에 다른 컴포넌트를 참조  
Props: 속성을 나타내는 데이터.

#### Components

##### 함수 컴포넌트와 클래스 컴포넌트

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조합니다.

```
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

welcome 함수는 데이터를 가진 하나의 props 객체 인자를 받은 후 React 일리먼트를 반환하므로 유효한 React 컴포넌트입니다.  
\=> 함수 컴포넌트

> `컴포넌트의 이름은 항상 대문자로 시작합니다.`

### State와 Lifecycle

#### setState()

1.  직접 State를 수정하지 말아라.
2.  State 업데이트는 비동기적알 수도 있다.
3.  State 업데이트는 병합된다.

##### 직접 State를 수정하지 말아라.

this.state를 지정할 수 있는 유일한 공간은 바로 constructor.

```
this.state.comment = 'Hello';

this.setState({comment: 'Hello'});
```

##### State 업데이트는 비동기적알 수도 있다.

성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있다.  
this.props와 this.state가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안 된다.

객체보다 함수를 인자로 사용하는 다른 형태의 setState()를 사용한다.  
함수는 이전 state를 첫 번째 인자로 받아들일 것이고, 업데이트가 적용된 시점의 props를 두 번째 인자로 받아들일 것이다.

```
this.setState((state, props) => ({
    counter: state.counter + props.increment
}))
```

##### State 업데이트는 병합된다.

setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합한다.  
별도의 setState() 호출로 이러한 변수를 독립적으로 업데이트할 수 있다.  
병합은 얕게 이루어지기 때문에 this.setState({comments})는 this.state.posts에 영향을 주지 않지만 this.state.comments는 완전히 대체됩니다.

### event (이벤트)

-   이벤트는 `camelCase`를 사용합니다.
-   JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달합니다.

`onClick={}`

React에서는 false를 반환해도 기본 동작을 방지할 수 없습니다.  
preventDefault를 명시적으로 호출해야 합니다.

```
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('Clicked');
    }

    return (
        <a href="#" onClick={handleClick}>Click!!!</a>
    );
}
```

`e`: 합성 이벤트

> `React는 명세 [W3C 명세](https://www.w3.org/TR/DOM-Level-3-Events/)에 따라 합성 이벤트를 정의하기 때문에 브라우저 호환성에 대해 걱정할 필요가 없다.`

React를 사용할 때 DOM엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없다. Elemnet가 처음 렌더링 될 때 리스너를 제공하면 된다.

### 리스트와 key

map() 함수를 사용하여 배열을 반복 실행합니다.  
key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. Element에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에지정해야 합니다. 고유하게 식별할 수 있는 문자열을 사용하는 것이며 대부분의 경우 데이터의 ID를 key로 사용합니다.

```
const todoItems = todos.map((todo) => {
    <li key={todo.id}>
        {todo.text}
    </li>
})
```

```
const todoItems = todos.map((todo, index) => {
    <li key={index}>
        {todo.text}
    </li>
})
```

index를 두 번째 인자 값으로 넘기며 index를 key로 사용합니다.

#### key로 컴포넌트 추출

키는 주변 배열의 context에서만 의미가 있다.