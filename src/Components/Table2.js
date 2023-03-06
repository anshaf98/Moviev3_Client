import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DateFormat, shortUppercaseId } from "./DateNDUppercase";

const Rows = ({ data, users, onEditFunction, onDeleteFunction }) => {
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

  return (
    <tr>
      {/* USER */}
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                src={
                  data?.image
                    ? data?.image
                    : "https://www.computerhope.com/jargon/g/guest-user.png"
                }
                alt={data?.fullName}
                className=" h-full w-full object-cover"
              />
            </div>
          </td>
          <td className={`${Text} `}>
            {data._id ? shortUppercaseId(data._id) : "mhd123"}
          </td>
          <td className={`${Text}`}>
            {data.createdAt && DateFormat(data.createdAt)}
          </td>
          <td className={`${Text}`}>{data?.fullName}</td>
          <td className={`${Text} `}>{data?.email}</td>
          <td className={`${Text} `}>{data?.isAdmin ? "Admin" : "User"}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            {!data.isAdmin && (
              <button
                onClick={() => onDeleteFunction(data?._id)}
                className=" bg-red-800 rounded flex-colo w-7 h-7"
              >
                <MdDelete />
              </button>
            )}
          </td>
        </>
      ) : (
        // ! CATEGORIES
        <>
          <td className={`${Text} font-bold`}>
            {data._id ? shortUppercaseId(data._id) : "mhd123"}
          </td>
          <td className={`${Text}`}>
            {data.createdAt && DateFormat(data.createdAt)}
          </td>
          <td className={`${Text}`}>{data?.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button
              onClick={() => onEditFunction(data)}
              className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
            >
              Edit <FaEdit className=" text-green-500" />
            </button>
            <button
              onClick={() => onDeleteFunction(data?._id)}
              className=" bg-red-800 rounded flex-colo w-7 h-7"
            >
              <MdDelete />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

const Table2 = ({ data, users, onEditFunction, onDeleteFunction }) => {
  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";

  return (
    <div className=" overflow-x-scroll overflow-hidden relative w-full">
      <table className=" w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className=" bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
                <th scope="col" className={`${Head}`}>
                  Role
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
              </>
            )}

            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody className=" bg-main divide-y divide-gray-800">
          {data.map((data, i) => (
            <Rows
              key={i}
              data={data}
              users={users}
              onEditFunction={onEditFunction}
              onDeleteFunction={onDeleteFunction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
