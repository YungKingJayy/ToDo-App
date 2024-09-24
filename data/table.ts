type Lists ={
  _id: { $oid: string };
  title: string;
  description: string;
  isDone: boolean;
  createdAt: { $date: { $numberLong: string } };
  updatedAt: { $date: { $numberLong: string } };
  __v: { $numberInt: string };
};

const lists: Lists[] = [
  {
    _id: { $oid: "66f1fe76f969e9aeacfe8098" },
    title: "HTML",
    description: "A markup language for websites",
    isDone: false,
    createdAt: { $date: { $numberLong: "1727135350522" } },
    updatedAt: { $date: { $numberLong: "1727135406586" } },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "66f1ffdbf969e9aeacfe809e" },
    title: "CSS",
    description: "A stylesheet",
    isDone: false,
    createdAt: { $date: { $numberLong: "1727135707758" } },
    updatedAt: { $date: { $numberLong: "1727135707758" } },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "66f1fff3f969e9aeacfe80a0" },
    title: "Javascript",
    description: "A terrible language",
    isDone: false,
    createdAt: { $date: { $numberLong: "1727135731437" } },
    updatedAt: { $date: { $numberLong: "1727135731437" } },
    __v: { $numberInt: "0" },
  },
  {
    _id: { $oid: "66f20202f969e9aeacfe80a6" },
    title: "test",
    description: "A terrible test",
    isDone: false,
    createdAt: { $date: { $numberLong: "1727136258035" } },
    updatedAt: { $date: { $numberLong: "1727136258035" } },
    __v: { $numberInt: "0" },
  },
];

export default lists;