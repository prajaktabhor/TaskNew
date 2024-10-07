import React from 'react';

const Task = () => {
  return (
    <div className='flex justify-between space-x-5 m-8'>
      <div className='flex-1'>
        <h1 className='text-2xl font-bold'>Task</h1>
        <p className='mt-2'>
          To develop the interface design for the administrator. The interface is meant to administer rights for different products (projects) of company users. The interface serves to create, delete, assign, and alter users' rights. The task is to develop 2 parts of the administration panel: a page with a user's list and transfer to the page of one of the users in the list.
        </p>
        <p className='mt-2'>Rights - user roles in the system</p>

        <h2 className='text-xl font-semibold mt-4'>Part 1 - A page with a list of users</h2>
        <p className='mt-2'>It includes the following information:</p>
        <ul className='list-disc list-inside mt-2'>
          <li>Full name of the user</li>
          <li>User login</li>
          <li>The number of projects the user is involved in</li>
        </ul>

        <h3 className='text-lg font-semibold mt-4'>Page Functionality</h3>
        <p className='mt-2'>Assignment of rights (roles in a specific project with the possibility to limit the validity of a given role), for both a user and several users from the list.</p>
      </div>

      <div className='flex-1 '>
        <h2 className='text-xl font-semibold mt-5'>Part 2 - User page from the list of project info</h2>
        <p className='mt-2'>
          It includes information about the projects the user is involved in, with a description of his rights (roles) in these projects namely.
        </p>
        <ul className='list-disc list-inside mt-2'>
          <li>Full name of the project</li>
          <li>Short name of the project</li>
          <li>Information about rights in the project</li>
          <li>Short name of the role</li>
          <li>The validity of the role</li>
        </ul>
        <a href='https://www.google.com' className='text-blue-500 underline'>Link to more information</a>

        <h2 className='text-xl text-sm font-semibold mt-4'>Page Functionality:</h2>
        <p className='mt-2'>-Assignment of rights (role/roles in a specific project, with the possibility to limit the validity of this role) for the user.</p>
        <p className='mt-2'>-Removal of rights (roles/roles in a specific project) of a given user in a specific project.</p>
        <p className='mt-2'>-Duplication/copying of rights (role/roles in a specific project/projects with the possibility to limit the validity of this role) to assign the same rights to another user/users from the list.</p>
        <p className='mt-2'>-Rights editing (roles/roles in a specific project) of a given user in a specific project.</p>
      </div>
    </div>
  );
};

export default Task;
