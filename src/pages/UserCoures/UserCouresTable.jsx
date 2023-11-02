import React from "react";

const UserCouresTable = ({ course }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={course.thumbnail_url}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div className="font-bold">{course.title}</div>
        </div>
      </td>
      <td>
        <div>
          <div className="text-xl text-black">{course.name}</div>
          <div className="text-sm text-gray-600">{course.email}</div>
        </div>
      </td>
      <td>
        <div className="text-sm text-black">Price ${course.price}</div>
      </td>
      <td>{course.date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default UserCouresTable;
