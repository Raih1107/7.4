
import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <UpdaterComponent />
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function UpdaterComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(()=>{
    setTimeout(()=> {
        updateTodo({
          id: "2",
          title: "new todo ",
          description: "new desc"
        })
    },3000)
  },[])

  return <div></div>
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
