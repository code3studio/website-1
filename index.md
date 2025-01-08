---
title: PyIq - AI-powered Solana framework for autonomous crypto trading.
titleTemplate: ':title'
head:
  - [
      'meta',
      {
        property: 'og:description',
        content: 'AI-powered Solana framework for autonomous crypto trading.',
      },
    ]
layout: home
hero:
  name: PyIq
  text: AI Crypto Trading
  tagline: Intelligent trading powered by AI and Solana blockchain for data-driven strategies. Built with Python. 
  image:
    src: /images/code.webp
    alt: Hono
  actions:
    - theme: brand
      text: Get Started
      link: /docs/
    - theme: alt
      text: View our Docs
      link: https://github.com/honojs/hono
features:
  - icon: 🤖
    title: AI-Powered Decisions
    details: Combines machine learning with blockchain data to execute optimal trades with precision.
  - icon: ◎ 
    title: Solana Integration
    details: Leverages Solana's speed and low fees for seamless and efficient trade execution.
  - icon: 📊
    title: Advanced Analytics
    details: Real-time token pricing, sentiment analysis, and market depth evaluation for smarter trading.
  - icon: 🛡️
    title: Robust Risk Management
    details: Implements strict position limits, liquidity assessments, and risk evaluation to protect capital.
---

<script setup>
// Heavily inspired by React
// https://github.com/reactjs/react.dev/pull/6817
import { onMounted } from 'vue'
onMounted(() => {
  var preferredKawaii
  try {
    preferredKawaii = localStorage.getItem('kawaii')
  } catch (err) {}
  const urlParams = new URLSearchParams(window.location.search)
  const kawaii = urlParams.get('kawaii')
  const setKawaii = () => {
    const images = document.querySelectorAll('.VPImage.image-src')
    images.forEach((img) => {
      img.src = '/images/hono-kawaii.png'
      img.classList.add("kawaii")
    })
  }
  if (kawaii === 'true') {
    try {
      localStorage.setItem('kawaii', true)
    } catch (err) {}
    console.log('kawaii mode enabled. logo credits to @sawaratsuki1004 via https://github.com/SAWARATSUKI/ServiceLogos');
    setKawaii()
  } else if (kawaii === 'false') {
    try {
      localStorage.removeItem('kawaii', false)
    } catch (err) {}
    const images = document.querySelectorAll('.VPImage.image-src')
    images.forEach((img) => {
      img.src = '/images/code.webp'
      img.classList.remove("kawaii")
    })
  } else if (preferredKawaii) {
    setKawaii()
  }
})
</script>
