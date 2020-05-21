import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";

export const Navigation = () => (
	<nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
		<div className="flex items-center flex-shrink-0 text-white mr-6">
			<Logo />
			<span className="font-semibold text-xl tracking-tight">Rostislav256</span>
		</div>
		<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div className="text-sm lg:flex-grow">
				<Link
					to="/"
					href="#"
					className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
				>
					Home
				</Link>
				<Link
					to="/projects"
					href="#"
					className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
				>
					Projects
				</Link>
				<Link
					to="/upload"
					href="#"
					className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
				>
					Upload article
				</Link>
			</div>
			<div>
				<a
					href="/subscribe"
					className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
				>
					Subscribe
				</a>
			</div>
		</div>
	</nav>
);
