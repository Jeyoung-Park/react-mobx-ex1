<h1>react-mobx-ex1</h1>
react로 mobx를 구현한 예제 소드 코드입니다.

<h3>React Mobx 개념 메모</h3>
<li>observer HoC가 react 컴포넌트를 subscribe해 observerable한 변수가 바뀌는 경우 -> 컴포넌트 render</li>
<li>oberservable한 data를 늘 observer 컴포넌트 안에서 조회 (컴포넌트를 observer로 대부분 감싸야 함 -> 비효율 x / 많은 oberserver -> 렌더링 효율 증가)</li>
<li>observe할 수 없는 oberservable을 컴포넌트에 넘기지 말 것</li>
<li>콜백 함수를 이용할 떄 Observer 태그 사용하기 </li>

##3번 개념 예제
```javascript
class Todo {
    title = "test"
    done = true

    constructor() {
        makeAutoObservable(this)
    }
}

const TodoView = observer(({ todo }: { todo: Todo }) =>
   // WRONG: GridRow won't pick up changes in todo.title / todo.done
   //        since it isn't an observer.
   return <GridRow data={todo} />

   // CORRECT: let `TodoView` detect relevant changes in `todo`,
   //          and pass plain data down.
   return <GridRow data={{
       title: todo.title,
       done: todo.done
   }} />

   // CORRECT: using `toJS` works as well, but being explicit is typically better.
   return <GridRow data={toJS(todo)} />
)
```
출처: https://mobx.js.org/react-integration.html

<h3>참고</h3>
https://mobx.js.org/README.html
