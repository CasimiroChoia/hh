// import { useNavigate } from 'react-router-dom';
import InitialScreen from './components/InitialScreen';
import style from "./App.module.css"   ;

function App() {
  // const isFirstPage =()=>{
  //   return window.performance && window.performance.getEntriesByType('navigation')[0]?.type === "navigate";
  // }
  // console.log(isFirstPage()+'')
  return (
    <div className={style.body}>
      <InitialScreen/>
    </div>
  );
}

export default App;
