import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UsernameMenu = () => {
  const {user} = useAuth0();
  return(
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500"/>
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link 
          to="/user-profile">
          clasName="font-bold hover:text-orange-500"
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;