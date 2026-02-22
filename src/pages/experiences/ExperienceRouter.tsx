import { useParams } from "react-router-dom";
import Rail from "./Rail";
import Wild from "./Wild";
import Winter from "./Winter";
import Voyage from "./Voyage";
import Sea from "./Sea";

const ExperienceRouter = () => {
  const { slug } = useParams();

  switch (slug) {
    case "rail":
      return <Rail />;

    case "wild":
      return <Wild />;
      
    case "winter":
    return <Winter />

     case "voyage":
    return <Voyage />

      case "sea":
    return <Sea />

    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl">Experience Not Found</h1>
        </div>
      );
  }
};

export default ExperienceRouter;
