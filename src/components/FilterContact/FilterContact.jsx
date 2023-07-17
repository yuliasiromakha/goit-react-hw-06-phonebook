import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { setFilter } from 'redux/actions'

const FilterContact = ({ filter }) => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};

FilterContact.propTypes = {
  filter: PropTypes.string, 
};

export default FilterContact;
