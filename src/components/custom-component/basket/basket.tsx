"use client";
import React, { useEffect, useState } from "react";
import { CartType } from "@/types/basket";
import { CourseOfferedType } from "@/types/courseOffered";
import Cookies from "universal-cookie";
import axios from "axios";
import { baseUrl } from "@/lib/utils";
import useCart from "@/hooks/use-cart-store";

export default function Basket({}: // basket,
// courseOffered,
{
  // basket: CartType;
  // courseOffered: CourseOfferedType[];
}) {
  const cookie = new Cookies();
  const loggedUser = cookie.get("USER");
  const token = cookie.get("TOKEN");
  // const [cart, setCart] = useState<CartType | null>(null);
  const { courses, removeCourse } = useCart();

  useEffect(() => {
    if (loggedUser && token) {
      axios
        .get(`${baseUrl}/basket`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // setCart(res.data);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, [loggedUser, token]);

  return (
    <div>
      <h1>Your Basket</h1>
      <h1>Welcome {loggedUser}</h1>
      <div>
        {/* Display cart details */}
        {courses.map((course) => (
          <div
            className="bg-red-400 my-20 cursor-pointer"
            onClick={() => removeCourse(course._id)}
            key={course._id}
          >
            <p>{course.name}</p>
            <p>$20</p>
          </div>
        ))}
      </div>
    </div>
  );
}
