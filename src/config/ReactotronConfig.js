import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure().use(reactotronRedux()).connect();

console.tron = tron;

export default tron;
