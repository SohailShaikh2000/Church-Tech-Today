import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Test from './pages/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SliderValueProvider } from './components/SliderValue';

function App() {
  return (
    <BrowserRouter>
    <SliderValueProvider>
      <header className="App-header">
        <Header />
        <Routes>
          <Route exact path='/' element={<Introduction />} />
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </header>
    </SliderValueProvider>
    </BrowserRouter>
  );
}

export default App;
