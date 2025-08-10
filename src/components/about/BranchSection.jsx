"use client";

import { useState } from "react";
import { MapPin, Award, Search } from "lucide-react";

export default function BranchesSection() {
    const [searchTerm, setSearchTerm] = useState("");

    // Branch data
    const branches = {
        pune: [
            "Nigdi", "Bhosari", "Chinchwad", "Talegaon", "Baramati",
            "Kharghar", "Pimpri", "Hadapsar", "Warana Nagar", "Satara",
            "Peth Vadgaon", "Gadhinglaj", "Ichalkaranji", "Nipani"
        ],
        naviMumbai: ["Kamothe (Navi Mumbai)"]
    };

    // Filter function
    const filterBranches = (branchList) =>
        branchList.filter((branch) =>
            branch.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <section className="py-20 bg-white text-purple-600">
            <div className="max-w-6xl mx-auto px-6">
                <div
                    id="branches"
                    className="transition-all duration-1000 opacity-100 translate-y-0"
                >
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                            <MapPin className="text-purple-600" />
                            PHYSIC GYM BRANCHES
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We have branches at the following locations:
                        </p>

                        {/* Search Bar */}
                        <div className="relative w-full max-w-md mx-auto mb-4">
                            <input
                                type="text"
                                placeholder="Search branches..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full border border-gray-300 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <Search className="absolute right-4 top-3.5 text-gray-400" />
                        </div>

                        {/* Branch count */}
                        <p className="text-gray-500">
                            {filterBranches([...branches.pune, ...branches.naviMumbai]).length} branches found
                        </p>
                    </div>

                    {/* Branch Lists */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pune Branches */}
                        <div className="bg-purple-50 p-8 rounded-xl shadow-sm border border-purple-200">
                            <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                PUNE
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {filterBranches(branches.pune).map((branch, index) => (
                                    <div
                                        key={branch}
                                        className="p-3 bg-white rounded-lg text-purple-600 font-medium hover:bg-purple-100 transition-all duration-200 hover:scale-105 transform cursor-pointer"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        {branch}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navi Mumbai Branches */}
                        <div className="bg-purple-50 p-8 rounded-xl shadow-sm border border-purple-200">
                            <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                NAVI MUMBAI
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {filterBranches(branches.naviMumbai).map((branch, index) => (
                                    <div
                                        key={branch}
                                        className="p-3 bg-white rounded-lg text-purple-600 font-medium hover:bg-purple-100 transition-all duration-200 hover:scale-105 transform cursor-pointer"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        {branch}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
