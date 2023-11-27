import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">Replace me</h2>
      <label htmlFor="name">test</label>
      <input id="name" type="text" />
      <a className="article_name" href="">
        whoknows
      </a>
    </article>
  );
}
