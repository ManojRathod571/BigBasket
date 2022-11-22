  import { Box } from '@chakra-ui/react';
  import { useEffect } from 'react';
  import Navbar from './organisam/Navbar';
  import { useDispatch } from "react-redux";
  import { getProductForSearch } from "./Redux/SearchReducer/action";
  import AllRoutes from './Pages/AllRoutes';
  import Footer from './organisam/Footer';
  function App() {

    return (
      <Box>
        <Navbar />
        <AllRoutes />
        <Footer />
      </Box>
    );
  }

  export default App;
