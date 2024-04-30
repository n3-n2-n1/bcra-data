import { SidebarItem } from "../SidebarItem/sidebarItem";
import { Icons } from "../../icons/icons";
export function SidebarLeft() {
    return (
      <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
        {/* <ul className="space-y-8">
          {[
            'market',
            'dashboard',
            'favourites',
            'trending',
            'collection',
            'wallet',
            'settings',
          ].map((key, index) => (
            <SidebarItem key={key} text={key} index={index} />
          ))}
        </ul>
        <div className="pb-5  px-4">
          <hr className="mb-5 text-zinc-700" />
          <a href="#" className="py-2 flex items-center  text-zinc-500">
            <span className="bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {Icons.logout()}
              </svg>
            </span>
            Logout
          </a>
        </div> */}
      </div>
    );
  }
  