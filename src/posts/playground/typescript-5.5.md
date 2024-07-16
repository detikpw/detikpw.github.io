---
title: '[TIL] Typescript fix type inference while use filter'
tags: [next-js, til]
image:
  src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  url: "https://unsplash.com/photos/do-something-great-neon-sign-oqStl2L5oxI"
  caption: "Photo by Clark Tibbs"
  captionUrl: "https://unsplash.com/@clarktibbs"
date: 2024-07-16
published: true
---

TypeScript 5.5 introduces significant improvements in type inference for array operations, particularly with the filter method. Here's an example demonstrating the enhanced type narrowing [source](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/):


```typescript
  const mixedArray: (number | null)[] = [1, 2, null, 3, null, 4];

  // Before TypeScript 5.5
  const filteredBefore = mixedArray.filter(x => x !== null);
  // Type of filteredBefore: (number | null)[]

  // With TypeScript 5.5
  const filteredAfter = mixedArray.filter(x => x !== null);
  // Type of filteredAfter: number[]
```

https://www.youtube.com/watch?v=D0969cm_v7g
