import axios from "axios";
import { Settings2 } from "lucide-react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [content, setContent] = useState();

  const handleFetchData = (contentType) => {
    axios
      .get(`http://localhost:8090/api/test/${contentType}`)
      .then((res) => setContent(res.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/test/all")
      .then((res) => setContent(res.data));
  }, []);

  return (
    <div className="w-full h-screen flex flex-row">
      <section className="flex flex-col w-80 bg-purple-600">
        <div className="flex flex-row items-center mt-4 pl-2 py-4 bg-white">
          <p className="font-medium text-2xl">Control Panel</p>
          <Settings2 className="ml-2 w-7 h-7" />
        </div>

        <ul className="flex flex-col pl-2 mt-4">
          <il>
            <span
              onClick={handleFetchData("admin")}
              className="cursor-pointer text-lg transition-[font-size] text-white hover:text-xl hover:underline"
            >
              Admin content
            </span>
          </il>
          <il>
            <span
              onClick={handleFetchData("moderator")}
              className="cursor-pointer text-lg transition-[font-size] text-white hover:text-xl hover:underline"
            >
              Moderator content
            </span>
          </il>
          <il>
            <span
              onClick={handleFetchData("user")}
              className="cursor-pointer text-lg transition-[font-size] text-white hover:text-xl hover:underline"
            >
              User content
            </span>
          </il>
          <il>
            <span
              onClick={handleFetchData("all")}
              className="cursor-pointer text-lg transition-[font-size] text-white hover:text-xl hover:underline"
            >
              Public content
            </span>
          </il>
        </ul>
      </section>
      <section className="flex flex-1 justify-center items-center bg-slate-400">
        <div>{content}</div>
      </section>
    </div>
  );
};

export default HomePage;
