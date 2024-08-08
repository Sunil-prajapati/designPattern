import PropTypes from "prop-types";
const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items?.map((item, index) => {
        return <ItemComponent key={index} {...{ [resourceName]: item }} />;
      })}
    </>
  );
};

export default RegularList;

RegularList.propsTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.string,
  itemComponent: PropTypes.any,
};
