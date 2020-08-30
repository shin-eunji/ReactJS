# Redux

## MVC
M(Model): 어플리케이션의 데이터를 관리
V(View): 사용자에게 어떻게 보여주는지에 대해 관리
C(Controller): Model의 자료와 View의 인터랙션을 총괄하는 로직 관

=> MVC가 대규모 어플리케이션 개발에는 관리하기 어렵다고 느꼈음.

## Flux 새로운 패턴을 만듬

Action -> Dispatch -> Store -> View

Action이 발생하면 dispatch에 의해 store에 변경사항이 저장되고 저장된 사항에 의해 퍋ㅈ가 변경되는 단방향 패턴

**장점: 개발의 방향이 단 방향으로 흐르기 때문에 파악하기 쉽고, 코드의 흐름 예측이 가능함.

## Reducer

두 가지 인자를 받습니다.
State, Action

Action 발생 => Action함수 실행 => Action 객체를 반환하고 dispatch() => reducer() => state를 업데이트 => view에 render함