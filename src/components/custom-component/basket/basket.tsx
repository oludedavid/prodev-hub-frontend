"use client";
import React, { useEffect, useState } from "react";
import { CartType } from "@/types/basket";
import { CourseOfferedType } from "@/types/courseOffered";
import Cookies from "universal-cookie";
import axios from "axios";

export default function Basket({}: // basket,
// courseOffered,
{
  // basket: CartType;
  // courseOffered: CourseOfferedType[];
}) {
  const cookie = new Cookies();
  const loggedUser = cookie.get("USER");
  const token = cookie.get("TOKEN");
  const baseUrl = `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_ROOT_URL}`;
  const [cart, setCart] = useState<CartType | null>(null);

  useEffect(() => {
    if (loggedUser && token) {
      axios
        .get(`${baseUrl}/basket`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCart(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log("Error fetching cart data:", error);
        });
    }
  }, [loggedUser, token]);

  return (
    <div>
      <h1>Your Basket</h1>
      <h1>Welcome {loggedUser}</h1>
      {cart ? (
        <div>
          {/* Display cart details */}
          {cart.courses.map((course) => (
            <div key={course.courseOfferedId}>
              <p>{course.name}</p>
              <p>
                {course.quantity} x ${course.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your basket is empty or loading...</p>
      )}
    </div>
  );
}
