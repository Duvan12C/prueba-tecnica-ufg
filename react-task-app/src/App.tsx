import Layout from "./components/Layout";
import AboutSystem from "./view/AboutSystem";
import CompletedTask from "./view/CompletedTask";
import Tasks from "./view/Tasks";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 return (
   <Router>
     <div className="h-screen">
       <Layout>
         <Routes>
           <Route path="/" element={<Tasks />} />
           <Route path="/Completed" element={<CompletedTask/>} />
           <Route path="/About" element={<AboutSystem />} />
         </Routes>
       </Layout>
     </div>
   </Router>
 );
}

export default App;
