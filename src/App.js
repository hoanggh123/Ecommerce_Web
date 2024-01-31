
import CustomerRoutes from './Routers/CustomerRoutes.jsx';
import './App.css';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes />}>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
