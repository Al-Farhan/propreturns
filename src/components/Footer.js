import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-white">
      <div className="flex flex-col bg-[#002D9C] px-10">
        <div className="flex items-center justify-between border-b border-white">
          <div className="py-16">
            <h1 className="text-2xl font-semibold">Stay in the loop.</h1>
            <p className="text-md">
              Interested in what we&apos;re doing? Get updated send straight to
              your inbox.
            </p>
          </div>
          <div className="">
            <input
              className="rounded-md m-2"
              placeholder="Email*"
              type="email"
              name=""
              id=""
            />
            <button className="px-4 py-2 bg-[#0078FF] hover:bg-[#0043CE] rounded-md ">
              Connect with us
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="space-y-2">
              <li>About</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Explore</h2>
            <ul className="space-y-2">
              <li>San Francisco</li>
              <li>New York</li>
              <li>Los Angeles</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Landlords</h2>
            <ul className="space-y-2">
              <li>List your Space</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Support</h2>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            Icons
          </div>
        </div>
      </div>
      <div className="bg-[#103084] px-10 py-10">
        <p className="text-sm font-semibold">
          <Link href={"#"}>OFFICE SPACE IN NEW YORK CITY</Link> {" / "}
          <Link href={"#"}>DOWNTOWN MANHATTAN</Link> {" / "}
          <Link href={"#"}>MIDTOWN MANHATTAN</Link> {" / "}
          <Link href={"#"}>BROOKLYN</Link>
        </p>
        <div className="grid grid-cols-6 gap-4 text-sm mt-2">
          <p className="">Chelsea</p>
          <p className="">Financial District</p>
          <p className="">Flatiron District</p>
          <p className="">Garment District</p>
          <p className="">Gramercy Park</p>
          <p className="">Grand Central Station</p>
          <p className="">Greenwich Village</p>
          <p className="">NoHo</p>
          <p className="">NoMad</p>
          <p className="">Penn Station</p>
          <p className="">SoHo</p>
          <p className="">Union Square</p>
        </div>
      </div>
      <div className="bg-[#103084] px-10 py-10">
        <p className="text-sm font-semibold">
          <Link href={"#"}>OFFICE SPACE IN SAN FRANCISCO BAY AREA</Link> {" / "}
          <Link href={"#"}>SAN FRANCISCO</Link>
        </p>
        <div className="grid grid-cols-6 gap-4 text-sm mt-2">
          <p className="">Chinatown</p>
          <p className="">Financial District</p>
          <p className="">Mission District</p>
          <p className="">North Beach</p>
          <p className="">SoMa</p>
          <p className="">Union Square</p>
        </div>
      </div>
      <div className="bg-[#103084] px-10 py-10">
        <p className="text-sm font-semibold">
          <Link href={"#"}>OFFICE SPACE IN LOS ANGELES</Link> 
        </p>
        <div className="grid grid-cols-6 gap-4 text-sm mt-2">
          <p className="">Santa Monica</p>
          <p className="">Brentwood</p>
          <p className="">Mar Vista</p>
          <p className="">Culver City</p>
          <p className="">Beverly Hills</p>
          <p className="">West Hollywood</p>
          <p className="">EI Segundo</p>
        </div>
      </div>
      <div className="bg-[#103084] px-10 py-8">
        <h2 className="text-xl">&copy; 2024 Propreturns. All rights reserved.</h2>
        <ul className="flex gap-2">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
