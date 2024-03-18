import React, { useEffect, useState } from "react";
import ProductPro from "./CoursePro";
import ProductNor from "./CourseNor";
import { getCourseFree, getCoursePro } from "../../../../fetchData/dataCourse";

function Product() {

    const [courseFreeData, setCourseFreeData] = useState([]);
    const [courseProData, setCourseProData] = useState([]);

    const getListFree = async () => {
        let res = await getCourseFree();

        if (res) {
            setCourseFreeData(res.data.data)
        }
        // console.log(res.data.data)
    }

    const getListPro = async () => {
        let res = await getCoursePro();

        if (res) {
            setCourseProData(res.data.data)
        }
        // console.log(res.data)
    }

    useEffect(() => {
        getListFree();
        getListPro();
    }, [])

    return <section className="section bg-gray-100 h-   ">
        <div className="container mx-auto">
            <div className="flex flex-col gap-y-10">
                <div className="mb-12">
                    <ProductPro courseProData={courseProData} />
                </div>
                <div>
                    <ProductNor courseFreeData={courseFreeData} />
                </div>
            </div>
        </div>
    </section>;
}

export default Product;
