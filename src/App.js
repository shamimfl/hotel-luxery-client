import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFoods from './Components/AddFoods/AddFoods';
import AddReview from './Components/AddReview/AddReview';
import AddGallery from './Components/Admin/AddGallery';
import Charts from './Components/Admin/Charts';
import Dashboard from './Components/Admin/Dashboard';
import CheckOut from './Components/checkOut/CheckOut';
import Details from './Components/Details/Details';
import FoodsGallery from './Components/FoodsGallery/FoodsGallery';
import FoodsRequest from './Components/FoodsRequest/FoodsRequest';
import AllGallery from './Components/Gallery/AllGallery';
import AddRooms from './Components/Home/AddRooms/AddRooms';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageRoom from './Components/ManageRoom/ManageRoom';
import Restaurant from './Components/Restaurant/Restaurant';
import SingUp from './Components/SingUp/Singup';
import Update from './Components/Update/Update';
import Navbar from './Navbar/Navbar';
import RequireAuth from './RequireAuth';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/rooms' element={<AddRooms />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/all_gallery' element={<AllGallery></AllGallery>}></Route>
        <Route path='/sing_up' element={<SingUp></SingUp>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='/add_gallery' element={<AddGallery></AddGallery>}></Route>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='/book/:_id' element={<RequireAuth>
          <Details></Details>
        </RequireAuth>}></Route>
        <Route path='/checkOut' element={<CheckOut></CheckOut>}></Route>
        <Route path='/foodGallery/:food_' element={<FoodsGallery></FoodsGallery>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/' element={<Charts></Charts>}></Route>
          <Route path='/dashboard/gallery' element={<AddGallery></AddGallery>}></Route>
          <Route path='/dashboard/add_rooms' element={<AddRooms></AddRooms>}></Route>
          <Route path='/dashboard/add_foods' element={<AddFoods></AddFoods>}></Route>
          <Route path='/dashboard/manage_room' element={<ManageRoom></ManageRoom>}></Route>
          <Route path='/dashboard/add_review' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/foods' element={<FoodsRequest></FoodsRequest>}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
