import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";

const people = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 29,
    email: "alice.johnson@example.com",
    hobbies: ["Painting", "Reading", "Traveling"], // Multiple hobbies
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 34,
    email: "bob.smith@example.com",
    hobbies: ["Cycling", "Hiking"], // Multiple hobbies
  },
  {
    id: 3,
    name: "Carol Davis",
    age: 27,
    email: "carol.davis@example.com",
    hobbies: ["Photography", "Cooking", "Writing"], // Multiple hobbies
  },
  {
    id: 4,
    name: "David Wilson",
    age: 45,
    email: "david.wilson@example.com",
    hobbies: ["Gardening", "Fishing"], // Multiple hobbies
  },
  {
    id: 5,
    name: "Eva Martinez",
    age: 38,
    email: "eva.martinez@example.com",
    hobbies: ["Cooking", "Yoga", "Dancing"], // Multiple hobbies
  },
];

const ListLayout = () => {
  return (
    <div>
      <RegularList
        items={people}
        resourceName="Person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="Person"
        itemComponent={LargePersonListItem}
      />
    </div>
  );
};

export default ListLayout;
