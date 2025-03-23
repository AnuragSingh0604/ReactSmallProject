import Input from './components/Input.jsx';
import styles from './App.module.css';
import Container from './components/Container.jsx';
import { useState } from 'react';





function App() {
  let [calVal, setCalVal] = useState("");
  function onButtonClick(event) {
    let { innerText } = event.target;
    if (innerText === 'C') {
      setCalVal("");
    }
    else if (innerText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newValue = calVal + innerText;
      setCalVal(newValue);
    }


  }


  return (
    <div className={styles.calculator}>
      <Input calVal={calVal}></Input>
      <Container onButtonClick={onButtonClick}></Container>




    </div>


  )
}

export default App
