import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Stars({ difficulty }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className={i < difficulty ? "text-yellow-500" : "text-gray-300"} />
      ))}
    </div>
  );
}

export default Stars;
