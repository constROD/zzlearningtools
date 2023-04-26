import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'shared/constants/commons';

export const Navbar: React.FC = () => {
  return (
    <div className="flex w-full justify-center bg-base-100">
      <div className="container flex items-center">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href={ROUTES.HOME} className="text-xl">
              zzlearningtools
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <Link href={ROUTES.LEARN.INDEX}>Learn</Link>
                <ul className="bg-base-100 p-2">
                  <li>
                    <Link href={ROUTES.LEARN.ABC}>ABC</Link>
                  </li>
                  <li>
                    <Link href={ROUTES.LEARN.NUMBERS}>Numbers</Link>
                  </li>
                  <li>
                    <Link href={ROUTES.LEARN.COLORS}>Colors</Link>
                  </li>
                  <li>
                    <Link href={ROUTES.LEARN.SHAPES}>Shapes</Link>
                  </li>
                  <li>
                    <Link href={ROUTES.LEARN.ANIMALS}>Animals</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <Link href={ROUTES.CHALLENGES.INDEX}>Challenges</Link>
                <ul className="bg-base-100 p-2">
                  <li>
                    <Link href={ROUTES.CHALLENGES.CHALLENGE1}>Challenge 1</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
