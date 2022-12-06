import './App.scss';
import Sidebar from './components/SidebarSection/Sidebar';
import Body from './components/BodySection/Body';

function App() {
  return (
    <div className="container">
        <Sidebar/>
        <Body />
    </div>
  );
}

export default App;
