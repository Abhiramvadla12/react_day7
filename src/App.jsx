
import Cond from '../components/conditionalRendering'
import Table from '../components/table_conditional';
import './App.css'

function App() {
  // let input = prompt("enter true or false");
  // input = input.toUpperCase() == "TRUE" ? true : false;
  let input = true
  let isOnline = navigator.onLine;
  console.log(isOnline);
  return (
    <>
      {/* <Cond isLoggedIn = {input}/> */}
      {
        isOnline ? 
        <>
          {
          alert("you are online")
        }
        <Table isLoggedIn = {input}/>
        </>
        
        :
        <h1>You are offline</h1>
      }
      
    </>
  )
}

export default App
