import Head from "next/head";

export default function Home() {
  return (
    <div className="font-sans ">
      <Head>
        <title>Women's Day</title>
      </Head>

      {/* Cách nhúng nội dung file HTML */}
      <iframe
        src="/index.html"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}
