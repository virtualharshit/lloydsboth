import React, { useEffect, useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import ProfileImg from "../assets/profile.png";

const Profile = () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data);
    setuser(user);
  }, []);

  return (
    <div className="p-4">
      <div className="border-b-2 border-black text-2xl font-bold mb-4">
        Profile
      </div>
      {user && (
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2 w-[300px] shadow-[1px_3px_5px_#00000050] rounded-xl p-3">
            <img src={ProfileImg} className="h-[100px]" alt="" />
            <div className="font-bold text-lg">{user?.name}</div>
            <div>{user.role}</div>
            <div className="text-sm w-full flex flex-col gap-2">
              <div className="grid grid-cols-2">
                <div className=" text-slate-600 ">Current working</div>
                <div className="font-semibold">{user.working}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className=" text-slate-600 ">Experience</div>
                <div className="font-semibold">{user.experience}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className=" text-slate-600 ">Location</div>
                <div className="font-semibold">{user.location}</div>
              </div>
            </div>
          </div>
          <div className="shadow-0_0_5px_00000070 rounded-lg p-4 w-[500px]">
            <div className="text-xl font-bold mb-6 flex items-center gap-2">
              <LuClipboardList /> Skill Set
            </div>
            <div className=" flex flex-col gap-3">
              {user.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center gap-4"
                >
                  <div className="w-max">{skill.name}</div>
                  <div className="w-[300px] bg-slate-200 p-1 rounded-full relative overflow-hidden">
                    <div
                      style={{ width: `${skill.value}0%` }}
                      className={`bg-orange-500 p-1 absolute top-0 left-0`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
