import React from "react";
import properties from "@/properties.json";
import { Property } from "@/types/Properties";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
const HomeProperty = () => {
  const recentProperties = (properties as Property[])
    .sort((p) => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {!!recentProperties.length ? (
              recentProperties.map((p) => (
                <PropertyCard property={p} key={p._id} />
              ))
            ) : (
              <p>Not Found</p>
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperty;
