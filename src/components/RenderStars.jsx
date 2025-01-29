import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function RenderStars({ difficulty }) {
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className={i < difficulty ? "text-yellow-500" : "text-gray-300"} />
      ))}
    </span>
  );
}

export default RenderStars;
