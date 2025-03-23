import styles from '../App.module.css'
function Display({ calVal }) {
  return (<input readOnly className={styles.display} value={calVal} type="text" />);
}
export default Display;