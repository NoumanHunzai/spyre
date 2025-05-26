"use client";
import React from "react";

const Footer = () => (
  <footer className="w-full px-3 py-6 mt-16 bg-white/80 border-t border-border text-center text-muted-foreground text-sm flex justify-between">
    <div>
      <h1 className="text-3xl font-medium ">SPYRE</h1>
    </div>
    <div className="text-left space-y-2">
      <h2 className="text-xl">Features</h2>

      <div className="space-y-1">
        <p>ATS</p>
        <p>Valuator</p>
        <p>Applymate</p>
        <p>CV Distribuion</p>
      </div>
    </div>
    <div></div>
  </footer>
);

export default Footer;
