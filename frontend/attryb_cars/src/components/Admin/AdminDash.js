import { useState } from "react";
import {
  Box,
  Text,
  Image,
  Grid,
  Button,
  Select,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
// import Navbar from "../Navbar";

const AdminDash = () => {
  const [dash, setDash] = useState([]);
  const [cate, setCate] = useState("");
  const [total, setTotal] = useState(0);

  const getdata = async (cate) => {
    let res = await fetch(`https://lime-combative-scorpion.cyclic.app/admin/`);
    let data = await res.json();
    setDash(data);
  };

  useEffect(() => {
    getdata(cate);
    setTotal(dash.reduce((acc, el) => acc + el.price, 0));
  }, [dash, cate]);

  return (
    <div>
      <AdminNavbar />
      <Box
        position={"relative"}
        zIndex={-1}
        display="flex"
        flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-evenly"
        marginTop="90px">
        <Button
          disabled
          colorScheme="teal"
          variant="solid"
          margin="5px"
          fontSize={{ base: "10px", sm: "18px" }}>
          Total Product : {dash.length}
        </Button>
        <Button
          disabled
          colorScheme="teal"
          variant="solid"
          margin="5px"
          fontSize={{ base: "10px", sm: "18px" }}>
          Total Inventory : ₹ {total}
        </Button>
      </Box>
      
      <Grid
        gap="30px"
        width="90%"
        margin="auto"
        cursor="pointer"
        marginBottom="20px"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}>
        {dash.map((e) => (
          <Box shadow="md" p={5} key={e.id} fontWeight="bold">
            <Box position="relative" zIndex="-1" >
              <Image src={e.image} alt="image 1 starting" />
              {/* <Box
                _hover={{ display: "none" }}
                position={"absolute"}
                top="0px"
                left="0px">
                <Image src={e.image2} alt="image 2 starting" />
              </Box> */}
            </Box>
            {/* <Link to={`/book/${book.id}`}> */}
            {/* <img src={e.images} alt='Error' width={"100%"}/> */}
            {/* </Link> */}
            <h3>{e.title}</h3>
            <p>{e.discription}</p>
            <div>
            <p className="price">₹{e.price}</p>
            <p className="original_price">₹{e.color}</p>
            <p className="mens_discount">({e.mileage}</p>
            </div>
            {/* <Link to={`/book/${book.id}/edit`}>
            <button>Edit</button>
            </Link> */}
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminDash;
