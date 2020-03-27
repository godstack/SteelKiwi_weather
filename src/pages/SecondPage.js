import React from "react";
import { Comprehensive } from "../components/Comprehensive";
import { AskedQuestions } from "../components/AskedQuestions";
import { Sponsors } from "../components/Sponsors";
import { Footer } from "../components/Footer";
import "../css/SecondPage.css";

export const SecondPage = () => {
  return (
    <div className="second-page">
      <Comprehensive />
      <AskedQuestions />
      <Sponsors />
      <Footer />
    </div>
  );
};
