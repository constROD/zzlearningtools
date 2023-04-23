/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="flex justify-center gap-12 py-10">
      <div className="container flex flex-col gap-10">
        <h1 className="text-4xl font-bold">
          Learning Tools for Kids: The Ultimate Resource for Your Child's Growth and Development
        </h1>
        <p className="indent-10">
          Welcome to our one-stop-shop for learning tools specifically designed to engage, educate,
          and empower children of all ages. We offer a diverse range of resources from educational
          games to interactive workbooks, ensuring that every child finds the perfect tool to
          develop their cognitive abilities, creativity, and problem-solving skills. Browse through
          our expertly curated selection and give your child the head start they deserve.
        </p>
      </div>
    </div>
  );
};
