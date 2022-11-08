import ReactDOM from 'react-dom/client';
import { Game } from "./Game";
// import { CssModules } from "./CssModules";
import './index.css';

// React17までの書き方
// ReactDOM.render(<Game />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)