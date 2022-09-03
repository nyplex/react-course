import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";

const DUMMY_QUOTES = [
    {
        id: "q1",
        author: "Alex",
        text: "Learning React is fun",
    },
    {
        id: "q2",
        author: "Max",
        text: "Learning React is great",
    },
];

const AllQuotes = () => {
  useEffect(() => {
    sendRequest()
  }, [])
    const {
        sendRequest,
        status,
        data: loadedQuotes,
    } = useHttp(getAllQuotes, true);

    return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
