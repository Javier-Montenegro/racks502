import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Racks502Landing.module.css";

export function Racks502Landing() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = "50230567796";
    const message =
      "Hola! Me interesa conocer más sobre los racks RACKS502.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const carouselImages = [
    {
      src: "/carousel1.jpeg",
      alt: "Rack detail 1",
    },
    {
      src: "/carousel2.jpeg",
      alt: "Rack detail 2",
    },
    {
      src: "/carousel3.jpeg",
      alt: "Rack detail 3",
    },
    {
      src: "/carousel4.jpeg",
      alt: "Rack detail 4",
    },
    {
      src: "/carousel5.jpeg",
      alt: "Rack detail 5",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <a href="#" className={styles.logoLink}>
              <ImageWithFallback
                src="/logo_header.jpg"
                alt="RACKS502 Logo"
                className={styles.logo}
                 width={75}
                 height={50}
              />
            </a>
          </div>

          <nav className={styles.nav}>
            <a href="/" target="_blank">INICIO</a>
            <a href="#productos">PRODUCTOS</a>
            <a href="#nosotros">NOSOTROS</a>
            {/* <a href="#contacto">CONTACTO</a> */}
          </nav>
          <button
            className={styles.whatsappBtn}
            onClick={handleWhatsAppClick}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            COTIZAR POR WHATSAPP
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/inicio.jpg"
          alt="RACKS502 Pickup Truck"
          className={styles.heroImage}
          width={1536}
          height={1024}
        />
        <div className={styles.heroContent}>
          <div className={styles.heroIntro}>
            <div className={styles.heroIntroLogo}>
              <Image
                src="/logo_no_bg.png"
                alt="Logo RACKS502"
                width={200}
                height={143}
              />
            </div>
            <div className={styles.heroIntroText}>
              {/* <p className={styles.valuePropsTitle}>
                HECHO PARA CARGAR
              </p>
              <p className={styles.valuePropsAccent}>
                LISTO PARA EXPLORAR
              </p> */}
               <h2 className={styles.valuePropsTitle}>
            HECHO PARA CARGAR
            <br />
            <span className={styles.valuePropsAccent}>
              LISTO PARA EXPLORAR
            </span>
          </h2>
            </div>
          </div>
          <button
            className={styles.ctaButton}
            onClick={handleWhatsAppClick}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            COTIZAR POR WHATSAPP
          </button>
          <div className={styles.heroLinks}>
            <a
              href="https://www.racks502.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              www.racks502.com
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61560357857942"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://instagram.com/racks.502"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M30 10 L45 20 L45 40 L30 50 L15 40 L15 20 Z" />
                <path d="M30 25 L30 35 M25 30 L35 30" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>
              ESTRUCTURA ROBUSTA
            </h3>
            <p className={styles.featureDescription}>
              Diseñados para soportar trabajo pesado.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
           <svg
  width="60"
  height="60"
  viewBox="0 0 60 60"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Base del pickup */}
  <path d="M8 38h44" />

  {/* Cabina */}
  <path d="M12 38v-10c0-2 2-4 4-4h10l6 6h8c2 0 4 2 4 4v4" />

  {/* Ventana */}
  <path d="M20 24v6h8" />

  {/* Batea */}
  <path d="M36 30h10" />

  {/* Ruedas */}
  <circle cx="18" cy="42" r="4" />
  <circle cx="42" cy="42" r="4" />
</svg>
            </div>
            <h3 className={styles.featureTitle}>
              COMPATIBLES CON VARIOS VEHICULOS
            </h3>
            <p className={styles.featureDescription}>
              Ajuste práctico y funcional para diferentes
              modelos.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 45 L25 25 L35 35 L45 15" />
                <circle
                  cx="25"
                  cy="25"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  cx="35"
                  cy="35"
                  r="3"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>USO DUAL</h3>
            <p className={styles.featureDescription}>
              Trabajo diario + aventura.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="30" cy="30" r="15" />
                <path d="M30 20 L30 30 L37 37" />
                <path d="M20 15 L25 20 M40 15 L35 20 M45 30 L40 30 M15 30 L20 30 M40 40 L35 35 M20 40 L25 35" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>
              FABRICACIÓN PROPIA
            </h3>
            <p className={styles.featureDescription}>
              Control total de calidad en cada detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className={styles.showcase}>
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseText}>
            <div className={styles.accentLine}></div>
            <h2 className={styles.showcaseTitle}>
              DISEÑADOS PARA
              <br />
              <span className={styles.showcaseAccent}>
                USO REAL
              </span>
            </h2>
            <p className={styles.showcaseDescription}>
              Nada de renders.
              <br />
              Esto es trabajo real.
            </p>
            <button
              className={styles.detailsButton}
              onClick={handleWhatsAppClick}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              VER DETALLES
            </button>
          </div>
          <div className={styles.showcaseImagesGrid}>
            {/* Top Row: Large image + 2 medium images */}
            <div className={styles.showcaseTopRow}>
              <Image
                src="/detalle.jpeg"
                alt="Rack instalado en pickup"
                className={`${styles.showcaseLargeImage} ${styles.zoomable}`}
                onClick={() => setLightboxImage("/detalle.jpeg")}
                width={720}
                height={380}
              />
              <div className={styles.showcaseMediumColumn}>
                <Image
                  src="/detalle1.jpeg"
                  alt="Vista lateral rack"
                  className={`${styles.showcaseMediumImage} ${styles.zoomable}`}
                  onClick={() => setLightboxImage("/detalle1.jpeg")}
                  width={100}
                  height={184}
                />
                <Image
                  src="/detalle3.jpeg"
                  alt="Detalle estructura"
                  className={`${styles.showcaseMediumImage} ${styles.zoomable}`}
                  onClick={() => setLightboxImage("/detalle3.jpeg")}
                  width={100}
                  height={184}
                />
              </div>
            </div>

            {/* Bottom Row: 3 small images */}
            <div className={styles.showcaseBottomRow}>
              <Image
                src="/logo.jpeg"
                alt="Detalle 1"
                className={`${styles.showcaseSmallImage} ${styles.zoomable}`}
                onClick={() =>
                  setLightboxImage(
                    "/logo.jpeg"
                  )
                }
                width={248}
                height={200}
              />
              <Image
                src="/detalle2.jpeg"
                alt="Detalle 2"
                className={`${styles.showcaseSmallImage} ${styles.zoomable}`}
                onClick={() =>
                  setLightboxImage(
                    "/detalle2.jpeg"
                  )
                }
                 width={248}
                height={200}
              />
              <Image
                src="/detalle4.jpeg"
                alt="Detalle 3"
                className={`${styles.showcaseSmallImage} ${styles.zoomable}`}
                onClick={() =>
                  setLightboxImage(
                    "/detalle4.jpeg"
                  )
                }
                width={248}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="nosotros" className={styles.valueProps}>
        <div className={styles.valuePropsOverlay}></div>
        <Image
          src="/carga.jpg"
          alt="Truck at sunset"
          className={styles.valuePropsImage}
            width={1448}
          height={538}
        />
        <div className={styles.valuePropsContent}>
          <div className={styles.accentLine}></div>
          <h2 className={styles.valuePropsTitle}>
            MÁS CARGA.
            <br />
            <span className={styles.valuePropsAccent}>
              MÁS LIBERTAD.
            </span>
          </h2>
          <p className={styles.valuePropsDescription}>
            Nuestros racks están diseñados para maximizar la
            capacidad de tu pickup sin comprometer estabilidad
            ni seguridad.
          </p>
          <p className={styles.valuePropsDescription}>
            Ya sea para trabajo pesado o para salir a explorar,
            tienes una solución robusta, funcional y lista para
            lo que venga.
          </p>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="productos" className={styles.productDetails}>
        <div className={styles.productDetailsContent}>
          <div className={styles.productDetailsText}>
            <h2 className={styles.productDetailsTitle}>
              RACKS PARA
              <br />
              <span className={styles.productDetailsAccent}>
                PICKUP
              </span>
            </h2>
            <ul className={styles.productDetailsList}>
              <li>Estructura en acero de alta resistencia</li>
              <li>Diseño resistente y funcional</li>
              <li>Acabados de alta calidad</li>
            </ul>
            <button
              className={styles.consultButton}
              onClick={handleWhatsAppClick}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              CONSULTAR DISPONIBILIDAD
            </button>
          </div>
          <div className={styles.productDetailsCarouselWrapper}>
            <Slider {...carouselSettings} className={styles.carousel}>
              {carouselImages.map((image, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className={`${styles.carouselImage} ${styles.zoomable}`}
                    onClick={() =>
                      setLightboxImage(
                        image.src.replace("w=800", "w=1200")
                      )
                    }
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaContent}>
          <h2 className={styles.finalCtaTitle}>
            ¿LISTO PARA EQUIPAR?
          </h2>
          <p className={styles.finalCtaDescription}>
            Escríbenos y recibe asesoría personalizada.
          </p>
          <button
            className={styles.finalCtaButton}
            onClick={handleWhatsAppClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ESCRÍBENOS POR WHATSAPP
          </button>
          <p className={styles.finalCtaNote}>
            ⚡ RESPUESTA RÁPIDA
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogoContainer}>
              <a href="#" className={styles.footerLogoLink}>
                <ImageWithFallback
                  src="/logo.jpeg"
                  alt="RACKS502 Logo"
                  className={styles.footerLogo}
                />
              </a>
            </div>
            <p className={styles.footerTagline}>
              HECHO PARA CARGAR.
              <br />
              <span className={styles.footerTaglineAccent}>
                LISTO PARA EXPLORAR.
              </span>
            </p>
          </div>
          <div className={styles.footerLinks}>
            {/* <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>
                ENLACES
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#productos">Productos</a>
                </li>
                <li>
                  <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </div> */}
            {/* <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>
                PRODUCTOS
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="#racks">Racks para Pickup</a>
                </li>
                <li>
                  <a href="#accesorios">Accesorios</a>
                </li>
                <li>
                  <a href="#personalizacion">
                    Personalizaciones
                  </a>
                </li>
              </ul>
            </div> */}
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>
                CONTÁCTANOS
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <a
                    href="https://wa.me/50255756434"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/racks.502"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📷 Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61560357857942" target="_blank" rel="noopener noreferrer">
                    📧 Facebook
                  </a>
                </li>
                   <li>
                  <a href="mailto:ventas@racks502.com" target="_blank" rel="noopener noreferrer">
                    📧 ventas@racks502.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            © 2026 RACKS502. Todos los derechos reservados.
          </p>
          <p className={styles.footerWebsite}>
            www.racks502.com
          </p>
        </div>
      </footer>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage}
          alt="Imagen ampliada"
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}