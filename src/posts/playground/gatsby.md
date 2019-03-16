---
layout: post
title: Membuat Static Site Dengan Menggunakan Gatsby js
modified:
categories: blog
excerpt:
tags: [gatsby, web development]
author: detik_pw
share: true
comments: true
date: 2019-03-15T05:20:21+07:00
---
Alhamdulillah kelar juga nih blog (belum kelar pake banget juga sih), sebelumnya udah pernah mainan dengan gatsby v1, kalo ditanya
bedanya apa kalo di gatsby v2 yang saya tahu cuman kalo di gatsby 1 ada magic untuk wrap component dengan [layout-nya](https://www.gatsbyjs.org/docs/layout-components/#how-to-prevent-layout-components-from-unmounting) dan ada StaticQuery untuk query data untuk component yang bukan page.

Untuk style saya gunakan [Rebass](https://rebassjs.org/) yang dibuat oleh [jxnblk alias Brent Jackson](https://github.com/jxnblk), sempat lihat di timeline twitter om Jackson ini baru-baru ini direkrut oleh gatsby (omedetou selamat om!! hilih makin oot) yang saya suka sebenarnya karena konsep core [styled-system](https://github.com/styled-system/styled-system)-nya bikin paradigma beripikir kita tentang styling itu dianggap sebagai box / kotak kecil.

untuk plugin dan extra package yang saya pakai styled-component, remark-prismjs, transformer-remark, remark-responsive-iframe untuk handle iframe di page yang digenerate melalu markdown biar responsive bin elastis bin proporsional, ada juga plugin twitter supaya link yang saya masukkan jadi twitter card, react helmet untuk handle document head, saat ini saya juga pakai react responsive untuk handle responsive. Link googling sendiri ya.

oh ya tidak lupa saya ucapkan terima kasih kepada paman larry alias [Adith](https://www.linkedin.com/in/adith-widya-pradipta-3a777894/) yang udah saya repotkan dengan pertanyaan terkait dengan styling... u know.. css is scary.. :ghost:

<p align="center">
  <a href="https://me.me/i/what-is-a-backend-developer-backend-developer-it-mean-he-7dbe83e26f414035993a22bf279de60f">
    <image width="100%" src="https://pics.me.me/what-is-a-backend-developer-backend-developer-it-mean-he-41886990.png" />
  </a>
</p>