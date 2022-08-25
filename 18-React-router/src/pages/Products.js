import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The products page</h1>
            <ul>
                <li>
                    <Link to="/products/p1">A Book</Link>
                </li>
                <li>
                    <Link to="/products/p2">Online Course</Link>
                </li>
                <li>
                    <Link to="/products/p3">A Laptop</Link>
                </li>
                <li>
                    <Link to="/products/p4">A Table</Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;
