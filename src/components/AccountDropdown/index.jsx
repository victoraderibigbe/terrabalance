"use client";

import { logout } from "@/store/authSlice";
import { Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { HiLogout, HiUser, HiShoppingBag, HiInboxIn } from "react-icons/hi";
import { useDispatch } from "react-redux";

export function AccountDropdown({ isAuthenticated, user }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dropdown
      label={isAuthenticated ? user.firstName : "Account"}
      dismissOnClick={false}
      renderTrigger={() =>
        isAuthenticated ? (
          <FiUserCheck className="text-2xl cursor-pointer" />
        ) : (
          <FiUser className="text-2xl cursor-pointer" />
        )
      }
      className="max-w-44 w-full"
    >
      <Dropdown.Header>
        {isAuthenticated ? (
          <div>
            <span className="block text-sm">
              {user.firstName} {user.lastName}
            </span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </div>
        ) : (
          <button
            className="px-2 h-12 rounded-lg bg-primaryBrown text-neutralLight w-full border-primaryBrown dark:bg-secondaryBrown dark:border-secondaryBrown"
            onClick={() => router.push("/login")}
          >
            SIGN IN
          </button>
        )}
      </Dropdown.Header>
      {isAuthenticated && (
        <div>
          <Dropdown.Item icon={HiUser}>My Account</Dropdown.Item>
          <Dropdown.Item icon={HiShoppingBag}>Orders</Dropdown.Item>
          <Dropdown.Item icon={HiInboxIn}>Inbox</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout} icon={HiLogout}>
            Logout
          </Dropdown.Item>
        </div>
      )}
    </Dropdown>
  );
}
