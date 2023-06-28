import { GET_DATA_BY_ID } from "@/graphql";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

function CardDetail() {
  const { query } = useRouter();
  const [databyid, { loading, data, error }] = useLazyQuery(GET_DATA_BY_ID, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (query?.slug) {
      databyid({ variables: { id: query.slug[0] } });
    }
  }, [query?.slug]);
  console.log("error", error);

  return (
    <div className="text-center container my-3">
      {!loading ? (
        <Card className="">
          <Card.Body>
            <Card.Title>{data?.film?.title}</Card.Title>
            {data?.film?.openingCrawl}
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
      {error && <h2>{error.message}</h2>}
    </div>
  );
}

export default CardDetail;
