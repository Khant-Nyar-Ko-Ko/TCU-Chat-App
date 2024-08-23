import { useNavigate } from "react-router-dom";
import chats from "assets/Chats.png";
import findFriends from "assert/Find Frineds.png";
import groupChats from "assert/Group Chats.png";
import profile from "assert/Profile.png";
import setting from "assert/Setting.png";
import relationship from "assert/Relationship.png";
const HomePages = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:h-screen bg-blue-500">
      <h1 className="md:text-white text-white text-center md:text-start text-2xl md:text-4xl font-bold">
        TCU
      </h1>

      <div className="justify-around flex">
        <p className="flex justify-around items-center text-start border p-4 w-3/5 h-2/5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum sed ducimus minus deleniti beatae quia suscipit adipisci,
          voluptatibus quaerat culpa odit, accusamus et labore perferendis
          minima provident iure dolore.
          {/* Add soe title object coming from api */}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 h-2/3">
        <div className="w-full md:w-3/5 md:flex-1 flex-6 s flex items-center justify-center">
          <div className="flex flex-wrap w-full">
            <div className="flex flex-row flex-wrap w-full">
              <div className="flex flex-col flex-1 w-1/4 m-2 gap-2">
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src={chats}
                  alt=""
                  className="object-cover transition-transform duration-300 transform hover:scale-105 ease-in-out ease-in-out hover:grayscale-50"
                />
              </div>

              <div className="flex flex-col flex-1 h-24 w-1/4 gap-2 m-2">
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src={findFriends}
                  alt=""
                  className="object-cover transition-transform duration-300 transform hover:scale-105 ease-in-out ease-in-out hover:grayscale-50"
                />
              </div>

              <div className="flex flex-col flex-1 h-24 w-1/4 gap-2 m-2">
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src={groupChats}
                  alt=""
                  className="object-cover transition-transform duration-300 transform hover:scale-105 ease-in-out ease-in-out hover:grayscale-50"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap w-full">
              <div className="flex flex-col flex-1 gap-2 w-1/3 m-2">
                <img
                  onClick={() => {
                    navigate("");
                  }}
                  src={profile}
                  alt=""
                  className="object-cover transition-transform duration-300 transform hover:scale-105 ease-in-out ease-in-out hover:grayscale-50"
                />
              </div>

              <div className="flex flex-col flex-1 h-24 gap-2 w-1/3 m-2">
                <img
                  onClick={() => {
                    navigate("");
                  }}
                  src={setting}
                  alt=""
                  className="object-cover transition-transform duration-300 transform hover:scale-105 ease-in-out ease-in-out hover:grayscale-50"
                />
              </div>

              <div className="flex flex-col flex-1 h-24 w-1/3 gap-2 m-2">
                <img
                  onClick={() => {
                    navigate("");
                  }}
                  src={relationship}
                  alt=""
                  className="object-cover transition-transform duration-300 transform hover:scale-105 ease-in-out ease-in-out hover:grayscale-50"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 md:flex-3 flex-6  h-full">
          <div className="s p-6 h-full border">
            <h2 className="text-center border border-radius text-white">
              Friends
            </h2>
            <ul className="mt-4 border p-1 ">
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>

              <li className="border mt-2">
                <img
                  src="assets/Chats.png"
                  alt=""
                  className="w-8 h-8"
                  onClick={() => {
                    useNavigate();
                  }}
                />
                <p className="pl-2 text-white">Boo Bai</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
