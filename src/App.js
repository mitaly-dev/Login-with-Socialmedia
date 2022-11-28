import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './components/Main';
import Infopage from './components/Infopage';


function App() {
 const router = createBrowserRouter([
      {path:"/",
      element:<Main></Main>,
      children:[
      {path:'/',element:<Login></Login>},
      {path:'/google',element:<Infopage></Infopage>},
      {path:'/github',element:<Infopage></Infopage>},
      {path:'/facebook',element:<Infopage></Infopage>}
      ]
      }
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
