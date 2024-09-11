export type CartCourseType = {
  courseOfferedId: string;
  name: string;
  quantity: number;
  price: number;
};

export type CartTypeWithOperations = {
  id: string;
  owner: string;
  courses: CartCourseType[];
  operations: {
    add: (id: string) => void;
    remove: (id: string) => void;
    clear: () => void;
    totalNumberOfItems: () => number;
    totalPrice: () => number;
  };
};
export type CartType = {
  id: string;
  owner: string;
  courses: CartCourseType[];
  bill: number;
};
