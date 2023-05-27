import {
    Box,
    Button,
    Center,
    FormControl,
    Select,
    FormLabel,
    Heading,
    Input,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import AdminNavbar from "./AdminNavbar";
  
  const initial = {
    image: "",
    title: "",
    description: "",
    price: 0,
    color:"",
    mileage:""
  };
  const AdminAdd = () => {
    const [add, setAdd] = useState(initial);
    const [cate, setCate] = useState("");
  
    const getAdd = async (add, cate) => {
      let res = await fetch(`https://lime-combative-scorpion.cyclic.app/admin/addCar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(add),
      });
      let data = await res.json();
      setAdd(data);
    };
  
    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      if (name === "price" || name === "color") {
        setAdd({ ...add, [name]: +value });
      } else {
        setAdd({ ...add, [name]: value });
      }
    };
  
    const handleChanges = (e) => {
      e.preventDefault();
      setCate(e.target.value);
    };
  
    const addProduct = (e) => {
      e.preventDefault();
      getAdd(add, cate);
      setAdd(initial);
    };
  
    return (
      <div>
        <AdminNavbar />
        <Box width="80%" margin="auto" p={4} position="relative">
          <Heading marginTop="70px">
            <Center
              fontSize={{ base: "10px", sm: "18px", md: "20px", lg: "25px" }} marginBottom="20px">
              ADD CARS
            </Center>
          </Heading>
          <FormControl
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            width={{ base: "90%", sm: "80%", md: "80%", lg: "60%" }}
            margin="auto"
            p={10}
            marginBottom="20px">
            <FormLabel
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
              margin="-1px">
              Image
            </FormLabel>
            <Input
              type="url"
              marginBottom="10px"
              placeholder="Car Image"
              name="image"
              value={add.image}
              onChange={handleChange}
            />
            <FormLabel
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
              margin="-1px">
              Title
            </FormLabel>
            <Select
              value={cate}
              placeholder="select category"
              onChange={handleChanges}
              marginBottom="10px">
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="maruti">Maruti</option>
              <option value="hundai">Hundai</option>
              <option value="lamborgini">Lamborgini</option>
              <option value="toyota">Toyota</option>
              <option value="ford">Ford</option>
  
            </Select>
            <FormLabel
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
              margin="-1px">
              Description
            </FormLabel>
            <Input
              type="text"
              marginBottom="10px"
              placeholder="Product short_description"
              name="short_description"
              value={add.description}
              onChange={handleChange}
            />
           
            <FormLabel
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
              margin="-1px">
              Price
            </FormLabel>
            <Input
              marginBottom="10px"
              placeholder="Product Price"
              name="price"
              value={add.price}
              onChange={handleChange}
            />
            <FormLabel
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
              margin="-1px">
              Color
            </FormLabel>
            <Input
              marginBottom="10px"
              placeholder="Product reviews"
              name="reviews"
              value={add.color}
              onChange={handleChange}
            />
            <FormLabel
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
              margin="-1px">
              Mielage
            </FormLabel>
            <Input
              marginBottom="10px"
              placeholder="Product reviews"
              name="mileage"
              value={add.mileage}
              onChange={handleChange}
            />
            
          </FormControl>
          <Center>
            <Button colorScheme="blue" onClick={addProduct} marginBottom="20px">
              ADD Car
            </Button>
          </Center>
        </Box>
      </div>
    );
  };
  
  export default AdminAdd;
  