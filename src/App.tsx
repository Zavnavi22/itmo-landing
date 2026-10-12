import About from './components/About';
import Header from './components/Header';
import Lab1 from './components/Lab1';
import Lab2 from './components/Lab2';
import ArticleAnalysis from './components/ArticleAnalysis';
import Lab3 from './components/Lab3';

function App() {
  return (
    <>
      <Header />
      <div className='w-3/4 mx-auto'>
        <About />
        <div className='grid grid-cols-2 gap-5 mt-10'>
          <Lab1 />
          <div className='row-span-2'>
            <Lab2 />
          </div>
          <ArticleAnalysis />
          <Lab3 />
        </div>
      </div>
    </>
  )
}

export default App