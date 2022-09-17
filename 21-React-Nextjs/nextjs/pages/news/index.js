import Link from "next/link";
import React, { Fragment } from "react";

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/next-js-is-great">NextJS is great</Link>
                </li>
                <li>
                    <Link href="/news/next-js-in-amazing">
                        NextJS is Amazing
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;
