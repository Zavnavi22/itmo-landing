import About from './components/About';
import Header from './components/Header';
import Lab1 from './components/Lab1';
import Lab2 from './components/Lab2';

function App() {
  return (
    <>
      <Header />
      <div className='w-3/4 mx-auto'>
        <About />
        <div className='grid grid-cols-2 gap-5'>
          <Lab1 />
          <div className='row-span-2'>
            <Lab2 />
          </div>
        </div>
      </div>
    </>
  )
}

export default App