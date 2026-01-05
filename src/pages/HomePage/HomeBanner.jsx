import React from "react";
import "./HomeBanner.css";

export default function HomeBanner({
  title = "Bienvenido a la tienda",
  subtitle = "Encuentra aquí una selección de productos de ejemplo.",
  className = "",
}) {
  return (
    <section className={`home-banner ${className}`.trim()}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </section>
  );
}
