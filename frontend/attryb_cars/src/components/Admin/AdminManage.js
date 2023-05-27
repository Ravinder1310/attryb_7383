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
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";

const AdminManage = () => {
  const [cars, setCars] = useState([]);
  const [total, setTotal] = useState(0);

  const getdata = async (cate) => {
    let res = await fetch(`https://lime-combative-scorpion.cyclic.app/admin/`);
    let data = await res.json();
    setCars(data);
  };

  const AdminDelete = async (id, cate) => {
    await fetch(`https://lime-combative-scorpion.cyclic.app/admin/deleteCar/${id}`, {
      method: "DELETE",
    });
  };

  const AdminUpdate = async (id, cate) => {
    let updatePrice = window.prompt("Enter new price");
    let newPrice = {
      price: +updatePrice,
    };
    console.log(newPrice);
    await fetch(`https://lime-combative-scorpion.cyclic.app/admin/updateCar/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrice),
    });
  };

  const handleChange = (e) => {
    setCate(e.target.value);
  };

  useEffect(() => {
    getdata();
    setTotal(+cars.reduce((acc, el) => acc + el.price, 0));
  }, [cars]);

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
          Total Product : {cars.length}
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
        gap="25px"
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
        {cars.map((e) => (
          <Box shadow="md" p={4} key={e.id} fontWeight="bold" zIndex={-1} textAlign="center">
            <Image width="80%" src={e.image} alt="" />
            <Text>{e.title}</Text>
            <Text>{e.discription}</Text>
            <Text>{e.price}</Text>
            <p className="mens_discount">{e.color}</p>
            <p className="offer_price">{e.mileage}</p>
            <Button
              fontSize={{ base: "18px", sm: "12px", md: "15px", lg: "14px" }}
              colorScheme="blue"
              onClick={() => AdminDelete(e._id, cate)}>
              Delete
            </Button>
            <Button
              fontSize={{ base: "18px", sm: "12px", md: "15px", lg: "14px" }}
              colorScheme="blue"
              onClick={() => AdminUpdate(e._id, cate)}
              margin="10px">
              Update
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminManage;
