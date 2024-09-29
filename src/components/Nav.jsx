import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (

    <div className="bg-violet-200 ">
      <div className="flex p-5 items-center ">
        <img src="/vite.svg" alt="" />

        <div className=" mx-5 w-full flex lg:flex-row md:flex-row justify-between items-center" >
            <div className="flex lg:flex-row flex-col gap-3">
            <Link  to="/info">About</Link>
            <Link to="/sign">Sign In</Link>
            </div>

            <div>
                <button className="border border-violet-800 rounded px-2">Login</button>
            </div>

        </div>
        <div >

        </div>

      </div>
    </div>
  );
}

export default Nav;
