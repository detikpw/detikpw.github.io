---
title: '[TIL] Menggunakan Konfigurasi Client di next js'
tags: [next-js, til]
image:
  src: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
  url: "https://unsplash.com/photos/C7B-ExXpOIE"
  caption: "Photo by Javier Allegue Barros"
  captionUrl: "https://unsplash.com/@soymeraki"
date: 2019-10-02
published: true
---

Di next js untuk menambahkan konfigurasi ada dua cara, ketika build dan ketika runtime, untuk konfigurasi ketika build bisa dilihat [disini](https://github.com/zeit/next.js#build-time-configuration)

Ketika runtime, ada dua akses konfigurasi yaitu publicRuntimeConfig dan serverRuntimeConfig, untuk yang konfigurasi yang hanya diimplementasika di server disimpan di serverRuntimeConfig dan untuk configurasi di client dan server bisa disimpan di publicRuntimeConfig, kedua akses konfigurasi tersebut disimpan di next.config.js

```javascript
  // next.config.js
  const env = required('./config')
  const {
    API_URL,
    API_PATH
  } = env;

  module.exports = {
    publicRuntimeConfig: {
      API_URL,
      API_PATH
    }
  };
```

```javascript
  // client
  import getConfig from 'next/config';

  const {publicRuntimeConfig} = getConfig();
  const {API_PATH, API_URL} = publicRuntimeConfig;
  
```

[source](https://github.com/zeit/next.js#runtime-configuration)
