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
      <div className='w-full px-3 sm:px-5 md:w-11/12 lg:w-5/6 2xl:w-3/4 mx-auto'>
        <About />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-6 sm:mt-10'>
          <div className='sm:col-span-2'>
            <Lab1 />
          </div>
          <Lab2 />
          <Lab3 />
          <div className='sm:col-span-2'>
            <ArticleAnalysis />
          </div>
        </div>
      </div>
    </>
  )
}

export default App