import './App.css'
import './styles/index.scss';
import SsButton from './components/SsButton/SsButton'
import SsPage from './components/SsPage/SsPage';
import SsHeader from './components/SsHeader/SsHeader';
import SsBody from './components/SsBody';

function App() {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='lable'>Sushi Bootstrap Test</span>
      </SsHeader>
      <SsBody>
        <h1>Sushi Bootstrap Test</h1>
        <SsButton variant="primary">Test Button</SsButton>
      </SsBody>
    </SsPage>
  )
}

export default App
