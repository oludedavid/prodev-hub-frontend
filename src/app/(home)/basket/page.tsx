import React, { useEffect, useState } from "react";
import { CartType } from "@/types/basket";
import Cookies from "universal-cookie";
const cookie = new Cookies();
//1.get the user cart from the basket with the id of the logged user
const loggedUser = cookie.get("USER");

const baseUrl = `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_ROOT_URL}/courses`;
export default function BasketPage() {
  //2. get the courses from the backend
  useEffect(() => {}, [loggedUser]);

  //then update the items in the basket with the items selected by the user
  //then create the logic of deleting, updating and adding items in the basket

  return <div>welcome to your basket</div>;
}
