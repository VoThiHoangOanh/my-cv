import React from 'react';

export const ContentResume = () => {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8">
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-teal-600">Profile</h2>
        <p className="text-gray-700">
          I am a lifelong learner, constantly honing my skills by tackling personal and client
          projects, ensuring clean, efficient code that solves real-world problems. I am always
          eager to explore new technologies and expand my skills. I look forward to working with
          experienced professionals and contributing my skills to the team.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <section className="mb-6">
            <h3 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-600">
              PLAN
            </h3>
            <ul className="list-inside list-disc">
              <li>Learn skills and get used to the company environment.</li>
              <li>After 5 years: I want to become Senior Developer.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-600">
              Education
            </h3>
            <div className="mb-6">
              <h3 className="font-semibold"> Ho Chi Minh City College of Industry and Trade</h3>
              <p className="text-gray-600">Information Technology: 2020 - 2023</p>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-600">
              Personal project
            </h3>
            <h4 className="text-lg font-semibold">Microservice-manager-user</h4>
            <p className="mb-2">
              Description: I designed a school service manager, handling basic logic for students
              and teachers, add the function of creating tests for students (multiple choice
              format), and handle statistics.
            </p>
            <a
              href="https://github.com/889Anonymous/microservice-manager-user"
              className="hover:text-blue-700"
              target="_blank"
            >
              Git: https://github.com/889Anonymous/microservice-manager-user
            </a>

            <h5 className="mt-2 font-semibold">Tech stack :</h5>
            <ul className="ml-4 list-inside list-disc">
              <li>Programming Language: Java</li>
              <li>Frameworks: Spring Boot</li>
              <li>DataBase: MongoDB.</li>
            </ul>
            <h5 className="mt-2 font-semibold">Extend:</h5>
            <ul className="ml-4 list-inside list-disc">
              <li>Custum Exeption.</li>
              <li>Use OOP, MapStruct, Predicatebuilder(QClass).</li>
            </ul>
          </section>
        </div>

        <div>
          <section className="mb-3">
            <h3 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-600">
              Skills
            </h3>
            <ul className="list-inside list-disc">
              <li>Java(Spring Boot, MongoDB).</li>
              <li>Reactjs, HTML, CSS, Javascript,...</li>
              <li>Database: MongoDB.</li>
              <li>Tools: Intellij IDEA, Postman.</li>
              <li>Source: Git.</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-600">
              Certificates
            </h3>
            <p>ENGLISH Aptis B1</p>
          </section>
        </div>
      </div>
    </div>
  );
};
