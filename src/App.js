import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Homepage from "./Pages/Homepage";
import MobileRecharge from "./Pages/Market Place/MobileRecharge";
import ErrorPage from "./Pages/ErrorPage";
import BillPayment from "./Pages/Market Place/BillPayment";
import CreditCardBill from "./Pages/Market Place/CreditCardBill";
import MiniWebsite from "./Pages/Market Place/MiniWebsite";
import Shopping from "./Pages/Market Place/Shopping";
import Resources from "./Pages/My Account/Resources";
import Reports from "./Pages/Reports";
import Profile from "./Pages/My Account/Profile";
import DomesticMoneyTransfer from "./Pages/Neo Bank/DomesticMoneyTransfer";
import AEPSService from "./Pages/Neo Bank/AEPSService";

function App() {

  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user?._id === undefined){
      //dispatch(logout(navigate));
    } 
  },[]);

  return (
    <div className="w-screen h-screen flex overflow-hidden">

      <Routes>
        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login/>}/>
        <Route path="/signup" element={user ? <Navigate to={"/"}/> : <Signup/>}/>
        <Route path="/" element={!user ? <Dashboard/> : <Navigate to={"/login"}/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/market-place/mobile-recharge" element={<MobileRecharge/>}/>
          <Route path="/market-place/bill-payment" element={<BillPayment/>}/>
          <Route path="/market-place/credit-card-bill" element={<CreditCardBill/>}/>
          <Route path="/market-place/mini-website" element={<MiniWebsite/>}/>
          <Route path="/market-place/shopping" element={<Shopping/>}/>
          <Route path="/my-account/resources" element={<Resources/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/my-account/profile" element={<Profile/>}/>
          <Route path="/neo-bank/domestic-money-transfer" element={<DomesticMoneyTransfer/>}/>
          <Route path="/neo-bank/aeps-services" element={<AEPSService/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
