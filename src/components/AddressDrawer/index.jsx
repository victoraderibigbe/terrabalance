"use client";

import { toggleDrawer } from "@/store/drawerSlice";
import { Drawer } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeliveryDining, MdShoppingBag } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const MyDrawer = () => {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);

  const handleClose = () => dispatch(toggleDrawer());

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={handleClose}
        position="right"
        className="w-96"
      >
        <Drawer.Header
          title="Delivery Options"
          titleIcon={HiOutlineLocationMarker}
        />
        <Drawer.Items>
          <div className="flex items-center justify-between gap-2">
            <button className="border border-foreground text-foreground transparent rounded-full px-10 py-2 flex items-center gap-2">
              <MdDeliveryDining size={20} />
              Delivery
            </button>
            <button className="border border-gray-300 text-gray-600 transparent rounded-full px-10 py-2 flex items-center gap-2">
              <MdShoppingBag size={20} />
              Pickup
            </button>
          </div>

          <button className="flex items-center gap-2 text-red-foreground mt-3">
            Add Delivery Address <FaPlus />
          </button>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MyDrawer;
