import logo from './logo.svg';
import myImage from './jonny-gios-trVJHsxObUw-unsplash.jpg'
import './App.css';

function App() {
  return (
    <>
    <div className="relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${myImage})`}}>
      <div className="w-full absolute top-2/4 flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 flex justify-center px-8">
            <p className="text-lg text-white">Hello world!</p>
        </div>
        <div className="md:w-1/4 flex justify-center px-8">
            <p className="text-lg text-white">Hello world!</p>
        </div>
        <div className="md:w-1/4 flex justify-center px-8">
            <p className="text-lg text-white">Hello world!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
