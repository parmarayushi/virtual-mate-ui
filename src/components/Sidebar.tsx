import {
  IconBuilding,
  IconCashBanknote,
  IconHome,
  IconLogout,
  IconNotes,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed logo/header part */}
      <div className="text-center py-5  font-bold text-lg">
        My Virtual Mate Logo
      </div>

      {/* Scrollable menu section */}
      <div className="flex-1 overflow-y-auto">
        <ul className="m-4 mt-20">
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <IconHome size={20} />
              Home
            </a>
          </li>
          <li className="nav-items active p-3 my-3">
            <a href="#" className="flex gap-2 text-sm font-semibold">
              <IconUsers size={20} />
              Employee Management
            </a>
          </li>
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <IconBuilding size={20} />
              Client Management
            </a>
          </li>
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <IconLogout size={20} />
              Leave Management
            </a>
          </li>
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <IconCashBanknote size={20} />
              Payroll and Payslip
            </a>
          </li>
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <IconUserPlus size={20} />
              Ticketing System Module
            </a>
          </li>
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <IconNotes size={20} />
              Invoicing and Billing Module
            </a>
          </li>
          <li className="nav-items p-3 my-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold ms-7"
            >
              Access and Permission
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
