import React from 'react';
import DotGrid from './components/Animations/DotGrid';
import MatrixRain from './components/Animations/MatrixRain';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import MainContent from './components/Layout/MainContent';

export default function ACRSCryptoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-mono relative overflow-hidden">
      <DotGrid />
      <MatrixRain />
      
      <Header />
      <Navigation />
      <MainContent />
      
      <Footer />
    </div>
  );
}