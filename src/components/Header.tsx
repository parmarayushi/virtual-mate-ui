import { IconBell, IconSearch } from "@tabler/icons-react";
import ProfileImg from "../../public/images/profile.jpg";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <IconSearch stroke={1} color="gray" className="absolute top-1 left-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-2xs bg-white rounded-lg border-1 border-gray-400 pl-11 pr-4 py-1 "
        />
      </div>
      <div className="flex items-center gap-7">
        <IconBell />
        <div className="flex justify-center items-center gap-3">
          <img
            src={ProfileImg}
            alt="profile img"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Peter West</p>
            <p className="text-sm text-gray-500 font-medium">Superadmin</p>
          </div>
        </div>
      </div>
    </div>
  );
};
