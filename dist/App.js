import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'module-alias/register.js';
import './App.css';
import { SimpleComponent } from '@/simplecomponent';
function App() {
    return (_jsxs("div", { className: "App", children: [_jsx(SimpleComponent, {}), "hello"] }));
}
export default App;
