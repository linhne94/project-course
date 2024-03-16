import React from "react";
import { product } from "../../../data/data";
import ProductPro from "./CoursePro";
import ProductNor from "./CourseNor";

function Product() {
    const { titlePro, titleNor, subtitlePro } = product
    return <section className="section bg-gray-100 h-   ">
        <div className="container mx-auto">
            <div className="flex flex-col gap-y-10">
                <div className="mb-12">
                    <ProductPro />
                </div>
                <div>
                    <ProductNor />
                </div>
            </div>
        </div>
    </section>;
}

export default Product;
