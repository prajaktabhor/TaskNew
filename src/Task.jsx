import React from "react";

const Task = () => {
  return (
    <div className="flex gap-12 m-10">
      <div className="flex-1">
        <h1 className="text-5xl font-bold">Task</h1>
        <p className="mt-5 text-sm">
          To develop the interface design for the administrator. The interface
          is meant to administer rights for different products (projects) of
          company users. The interface serves to create, delete, assign, and
          alter users' rights. The task is to develop 2 parts of the
          administration panel: a page with a user's list and transfer to the
          page of one of the users in the list.
        </p>
        <p className=" mb-5 text-gray-700 ">
          Rights* - user roles in the system
        </p>

        <h2 className="text-xl font-semibold">
          Part 1 - A page with a list of users
        </h2>
        <p className="mt-2 text-sm">It includes the following information:</p>

        <ul class="space-y-1 text-sm">
          <li className="before:content-['-'] before:mr-2">
            Full name of the user
          </li>
          <li className="before:content-['-'] before:mr-2">User login</li>
          <li className="before:content-['-'] before:mr-2">
            The number of projects the user is involved in
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-7">Page Functionality</h3>
        <p className="mt-2 text-sm">
          Assignment of rights (roles in a specific project with the possibility
          to limit the validity of a given role), for both a user and several
          users from the list.
        </p>
      </div>

      <div className="flex-1 mt-4">
        <h2 className="text-xl font-semibold mt-11 ">
          Part 2 - User page from the list of project info
        </h2>

        <p className="mt-2 text-sm">
          It includes information about the projects the user is involved in,
          with a description of his rights (roles) in these projects namely.
        </p>
        <ul class="space-y-1 text-sm">
          <li className="before:content-['-'] before:mr-2">
            {" "}
            Short name of the project
          </li>

          <li className="before:content-['-'] before:mr-2">
            Information about rights in the project{" "}
          </li>
          <li className="before:content-['-'] before:mr-2">
            Short name of the role{" "}
          </li>
          <li className="before:content-['-'] before:mr-2">
            The validity of the role
          </li>
        </ul>
        <a
          href="https://www.google.com"
          className="text-custom-pink underline mt-4"
        >
          Link to more information
        </a>

        <h2 className="text-xl  font-semibold mt-7">Page Functionality:</h2>
        <ul className="text-sm mt-3 space-y-1">
          <li className="before:content-['-'] before:mr-2">
            Assignment of rights (role/roles in a specific project, with the
            possibility to limit the validity of this role) for the user.
          </li>
          <li className="before:content-['-'] before:mr-2">
            Removal of rights (roles/roles in a specific project) of a given
            user in a specific project.
          </li>
          <li className="before:content-['-'] before:mr-2">
            Duplication/copying of rights (role/roles in a specific
            project/projects with the possibility to limit the validity of this
            role) to assign the same rights to another user/users from the list.
          </li>
          <li className="before:content-['-'] before:mr-2">
            Rights editing (roles/roles in a specific project) of a given user
            in a specific project.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task;
