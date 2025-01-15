"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(
    typeof window !== "undefined" && !localStorage.getItem("cookiesConsent")
  );

  const handleAccept = () => {
    // Stocker le consentement
    localStorage.setItem("cookiesConsent", "accepted");

    // Charger Google Analytics
    const gaScript = document.createElement("script");
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=G-EV0Z09NLBQ`;
    gaScript.async = true;
    document.body.appendChild(gaScript);

    // Initialiser la couche de données et gtag
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    gtag("js", new Date());
    gtag("config", "G-EV0Z09NLBQ");

    setIsVisible(false);
  };

  const handleDecline = () => {
    // Stocker le refus
    localStorage.setItem("cookiesConsent", "declined");
    setIsVisible(false);
  };

  useEffect(() => {
    // Vérifie si le consentement est déjà donné
    const consent = localStorage.getItem("cookiesConsent");
    if (consent === "accepted") {
      handleAccept();
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#ffffff",
        color: "#000",
        padding: "15px",
        textAlign: "center",
        zIndex: 1000,
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <p>
        Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez
        accepter ou refuser.
      </p>
      <button
        onClick={handleAccept}
        style={{
          background: "#00C851",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          margin: "5px",
          borderRadius: "5px",
        }}
      >
        Accepter
      </button>
      <button
        onClick={handleDecline}
        style={{
          background: "#ff4444",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          margin: "5px",
          borderRadius: "5px",
        }}
      >
        Refuser
      </button>
    </div>
  );
};

export default CookieBanner;
