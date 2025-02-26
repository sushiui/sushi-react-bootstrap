import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import './App.css'
import './styles/index.scss';
import Layout from './Layout';
import HomePage from './pages/Homepage';

function App() {
  
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={ <Layout
          currentPath={location.pathname} /> } >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
    // <SsPage>
    //   <SsHeader className='-nobreadcrumbs'>
    //     <span className='lable'>Sushi Bootstrap Test</span>
    //   </SsHeader>
    //   <SsBody>
    //     <h1>Sushi Bootstrap Test</h1>
    //     <SsButton variant="primary">Test Button</SsButton>
    //   </SsBody>
    // </SsPage>
  )
}

// export default App

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
