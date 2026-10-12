import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import Sidebar from './components/layout/Sidebar';
import Overview from './pages/Overview';
import Topbar from './components/layout/Topbar';
import Layout from './components/layout/Layout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Providers from './pages/Providers';
import Modelcatalog from './pages/Modelcatalog';
import Modelcatdetail from './pages/Modelcatdetail';
import Datasources from './pages/Datasources';
import Modeltraining from './pages/Modeltraining';
import Login from './pages/Login';
import Signup from './pages/Signup ';
import SignUpPage from './pages/SignUpPage';
import Loginnew from './pages/Loginnew';
import SignUpNew from './pages/SignUpNew';
import Modeltrainingdetails from './pages/Modeltrainingdetails';
import AIScreen from './pages/AIScreen';
import Login1 from './pages/Login1';
import LoginPage from './pages/LoginPage';
import Product from './components/Product';
import Chat from './pages/Chat';
import Chatnew from './pages/Chatnew';
import Retset from './pages/Retset';
import Newlogin from './pages/Newlogin';
import Loginscreen from './pages/Loginscreen';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>

          {/* Auth Pages (NO Layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/newlogin" element={<Newlogin />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/login2" element={<LoginPage />} />
          <Route path="/loginnew" element={<Loginnew />} />
          <Route path="/loginscreen" element={<Loginscreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/signupnew" element={<SignUpNew />} />

          {/* Pages WITH Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Overview />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chatnew" element={<Chatnew />} />
            <Route path="/aiscreen" element={<AIScreen />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/modelcatdetail" element={<Modelcatdetail />} />
            <Route path="/modelcatalog" element={<Modelcatalog />} />
            <Route path="/datasources" element={<Datasources />} />
            <Route path="/modeltraining" element={<Modeltraining />} />
            <Route path="/reset" element={<Retset />} />
            <Route path="/modeltrainingdetails" element={<Modeltrainingdetails />} />
            <Route path="/product" element={<Product />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;