import PropTypes from "prop-types";

const Links = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className="hover:bg-gray-300 px-5 hover:rounded-sm">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

Links.propTypes = {
  route: PropTypes.object,
};

export default Links;
