import {
  IconBrandLinkedinFilled,
  IconDotsVertical,
  IconHome2,
  IconMail,
  IconPencil,
  IconPhone,
} from "@tabler/icons-react";
import ProfileImg from "../../public/images/profile.jpg";

export const Details = () => {
  return (
    <div>
      {/* profile details */}
      <div className="flex gap-3 bg-white border-1 border-gray-300 p-5 rounded-lg">
        <img
          src={ProfileImg}
          alt="Profile Image"
          className="h-44 w-36 rounded-lg object-cover"
        />

        <div>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-semibold">Jerome Bell</p>
            <p className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-2xl">
              Active
            </p>
            <IconPencil />
          </div>
          <p className="text-sm font-semibold text-indigo-600">
            Senior Software Developer
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500 font-semibold my-2">
            <IconBrandLinkedinFilled size={"20px"} />
            https://www.linkedin.com/in/jerome.bell
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500 font-semibold my-2">
            <IconMail size={"20px"} />
            jerome.bell@invision.com
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500 font-semibold my-2">
            <IconPhone size={"20px"} />
            629.555.0129
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500 font-semibold my-2">
            <IconHome2 size={"20px"} />
            232, 4th Street, Melbourne, Australia
          </p>
        </div>
      </div>

      <div>
        {/* links */}
        <ul className="flex gap-9 my-4">
          <li className="link active">
            <a href="" className="font-semibold">
              Details
            </a>
          </li>
          <li className="link">
            <a href="" className="font-semibold">
              Documents
            </a>
          </li>
          <li className="link">
            <a href="" className="font-semibold">
              Attendence
            </a>
          </li>
          <li className="link">
            <a href="" className="font-semibold">
              Payslips
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-3 gap-5">
          {/* details sections */}
          <div className="grid col-span-2 gap-5">
            {/* employment details */}
            <div className="bg-white border-1 border-gray-300 rounded-lg p-5">
              <p className="text-lg font-bold mb-2">Employment Details</p>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-sm text-gray-400 font-semibold">Client</p>
                  <p className="font-semibold">Invision Pvt. Ltd</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Location
                  </p>
                  <p className="font-semibold">Melbourne, Australia</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Employment Type
                  </p>
                  <p className="font-semibold">Contract</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">Mode</p>
                  <p className="font-semibold">Hybrid</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Reporting to
                  </p>
                  <p className="font-semibold">Mary Houstan - COO </p>
                </div>
              </div>
            </div>

            {/* contract details */}
            <div className="bg-white border-1 border-gray-300 rounded-lg p-5">
              <p className="text-lg font-bold mb-2">Contract Details</p>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Started Working on{" "}
                  </p>
                  <p className="font-semibold">12/05/2023</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Contract Starting Date
                  </p>
                  <p className="font-semibold">12/05/2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Contract End Date
                  </p>
                  <p className="font-semibold">12/05/2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Increment Date
                  </p>
                  <p className="font-semibold">12/05/2025</p>
                </div>
              </div>
            </div>

            {/* payment details */}
            <div className="bg-white border-1 border-gray-300 rounded-lg p-5">
              <p className="text-lg font-bold mb-2">Payment Details</p>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Salary (per month)
                  </p>
                  <p className="font-semibold">$5500</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Monthly Payment Date
                  </p>
                  <p className="font-semibold">7th</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Invoice Cycle End
                  </p>
                  <p className="font-semibold">Last Day of Month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">
                    Last Increment
                  </p>
                  <p className="font-semibold">15%</p>
                </div>
              </div>
            </div>
          </div>

          {/* notes  */}
          <div className="bg-white border-1 border-gray-300 rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-lg font-bold">Notes</p>
              <IconDotsVertical />
            </div>

            <div className="flex flex-col gap-5">
              <div className="p-5 bg-emerald-100 rounded-lg">
                <p className="text-sm font-semibold">
                  Jerome has been working and leading on PV-21 project and has
                  been recommended Lead Position for next increment by Mary
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  15/04/2025
                </p>
              </div>
              <div className="p-5 bg-red-100 rounded-lg">
                <p className="text-sm font-semibold">
                  Jerome has been caught smoking in the premises, complaint has
                  been raised
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  05/01/2025
                </p>
              </div>
              <div className="p-5 bg-emerald-100 rounded-lg">
                <p className="text-sm font-semibold">Performance appreciated</p>
                <p className="text-sm text-gray-500 font-semibold">
                  05/01/2025
                </p>
              </div>
              <div className="p-5 bg-red-100 rounded-lg">
                <p className="text-sm font-semibold">
                  Jerome has been away for 3 days without informing either
                  client or agency
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  05/01/2025
                </p>
              </div>

              <button className="border-2 border-black rounded-lg p-1.5 font-semibold text-sm">
                + Add notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
