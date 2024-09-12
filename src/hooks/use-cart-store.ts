import { CourseOfferedType } from "@/types/courseOffered";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


interface CartStore {
    courses: CourseOfferedType[];
    addCourse: (data: CourseOfferedType) => void;
    removeCourse: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(persist<CartStore>((set, get) => ({
    courses: [],
    addCourse: (data: CourseOfferedType) => {
        const currentCourses = get().courses;
        const existingCourse = currentCourses.find((course) => course._id === data._id);
        if (existingCourse) {
            return alert("Item already in cart");
        }
        set({ courses: [...get().courses, data] })
        return alert("Item added to cart");
    },
    removeCourse: (id: string) => {
        set({ courses: [...get().courses.filter((course) => course._id !== id)] })
        return alert("Item removed from cart");
    },
    removeAll: () => set({ courses: [] }),
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))


export default useCart

