type BasketCourseType = {
  courseOfferedId: string;
  name: string;
  quantity: number;
  price: number;
};

export type BasketType = {
  id: string;
  owner: string;
  courses: BasketCourseType[];
  operations: {
    add: (id: string) => void;
    remove: (id: string) => void;
    clear: () => void;
    totalNumberOfItems: () => number;
    totalPrice: () => number;
  };
};
