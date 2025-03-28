
import React from 'react';

export const UKUSFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" width="48" height="24">
    <clipPath id="uk-half">
      <rect x="0" y="0" width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-half)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
    
    <clipPath id="uk-t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    
    <clipPath id="us-half">
      <rect x="60" y="0" width="60" height="30" />
    </clipPath>
    <g clipPath="url(#us-half)">
      <path d="M60,0 v30 h60 v-30 z" fill="#fff" />
      <path d="M60,0 h60 v2.31 h-60 z M60,4.62 h60 v2.31 h-60 z M60,9.23 h60 v2.31 h-60 z M60,13.85 h60 v2.31 h-60 z M60,18.46 h60 v2.31 h-60 z M60,23.08 h60 v2.31 h-60 z M60,27.69 h60 v2.31 h-60 z" fill="#B22234" />
      <path d="M60,0 v16.15 h24 v-16.15 z" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="63.6" cy="2.02" r="0.9" />
        <circle cx="69.6" cy="2.02" r="0.9" />
        <circle cx="75.6" cy="2.02" r="0.9" />
        <circle cx="81.6" cy="2.02" r="0.9" />
        <circle cx="66.6" cy="4.04" r="0.9" />
        <circle cx="72.6" cy="4.04" r="0.9" />
        <circle cx="78.6" cy="4.04" r="0.9" />
        <circle cx="63.6" cy="6.06" r="0.9" />
        <circle cx="69.6" cy="6.06" r="0.9" />
        <circle cx="75.6" cy="6.06" r="0.9" />
        <circle cx="81.6" cy="6.06" r="0.9" />
        <circle cx="66.6" cy="8.08" r="0.9" />
        <circle cx="72.6" cy="8.08" r="0.9" />
        <circle cx="78.6" cy="8.08" r="0.9" />
        <circle cx="63.6" cy="10.1" r="0.9" />
        <circle cx="69.6" cy="10.1" r="0.9" />
        <circle cx="75.6" cy="10.1" r="0.9" />
        <circle cx="81.6" cy="10.1" r="0.9" />
        <circle cx="66.6" cy="12.12" r="0.9" />
        <circle cx="72.6" cy="12.12" r="0.9" />
        <circle cx="78.6" cy="12.12" r="0.9" />
        <circle cx="63.6" cy="14.14" r="0.9" />
        <circle cx="69.6" cy="14.14" r="0.9" />
        <circle cx="75.6" cy="14.14" r="0.9" />
        <circle cx="81.6" cy="14.14" r="0.9" />
      </g>
    </g>
    
    <line x1="60" y1="0" x2="60" y2="30" stroke="#000" strokeWidth="0.5" />
  </svg>
);

export const SpainFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="24" height="24">
    <rect width="750" height="500" fill="#c60b1e"/>
    <rect width="750" height="250" fill="#ffc400" y="125"/>
  </svg>
);

export const GermanFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="24">
    <rect width="5" height="3" y="0" x="0" fill="#000"/>
    <rect width="5" height="2" y="1" x="0" fill="#D00"/>
    <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
  </svg>
);
