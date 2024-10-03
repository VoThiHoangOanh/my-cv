import * as React from 'react';

const projects = [
  {
    title: <div>Microservice-manager-user</div>,
    description: <div>Student management</div>,
    details: (
      <div>
        Use Spring Boot to build CRUD-based functionalities, create tests and designing RESTful
        APIs.
      </div>
    ),
  },
  {
    title: <div>PHP Laravel Programming</div>,
    description: <div>Design one online sale site</div>,
    details: (
      <div>
        Website create for the purpose of selling online with full functions for users and
        administrators
      </div>
    ),
  },
  {
    title: <div>Testing Project</div>,
    description: <div>Software testing</div>,
    details: (
      <div>
        Learn about the software testing process. Write test cases test plans and perform simulated
        tests using Selenium IDE.
      </div>
    ),
  },
];
export default function ContentProject() {
  return (
    <div className="mx-auto  h-screen px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg border bg-white p-5 shadow-lg duration-300">
            <div className="mb-4">
              <div className="text-px font-bold text-gray-800">{project.title}</div>
              <div className="mt-1 text-sm text-gray-600">{project.description}</div>
            </div>
            <div>
              <div className="text-sm text-gray-700">{project.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
