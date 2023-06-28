import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA } from "@/graphql";
import { Card, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, refetch, loading } = useQuery(GET_ALL_DATA, {
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy:"cache-first"
  });
  const router = useRouter();

  return (
    <>
      <div className="container text-center">
        {loading && <Spinner animation="border" variant="primary" />}
        <div className="row my-3">
          {data?.allFilms?.films?.map((item, index) => (
            <div className="col-6 col-md-4 my-3" key={index}>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.director}
                  </Card.Subtitle>
                  <Card.Text>{item.releaseDate}</Card.Text>
                  <Card.Link
                    href="#"
                    onClick={() => router.push(`card/${item.id}`)}
                  >
                    View detail
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <button onClick={() => refetch()}>Reftech Query</button>
      </div>
    </>
  );
}
