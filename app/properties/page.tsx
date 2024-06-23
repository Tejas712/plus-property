import React from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/Properties";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p._id} property={p as Property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
