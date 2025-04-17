
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
  hi there
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={3} />
  </RecoilRoot>
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>Loading...</div>;
  }

  if (todo.state === "hasError") {
    console.error("Backend error:", todo.contents); // optional for debugging
    return <div>Error while getting data from the backend</div>;
  }

  if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );
  }

  return null; // fallback
}

export default App
