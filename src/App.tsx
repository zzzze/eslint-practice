import { FC } from 'react'

interface A {
  name: string
}

const App: FC = () => {
  const a: A = { name: 'xxx' }
  console.log(a)
  return (
    <div>app</div>
  )
}

export default App
