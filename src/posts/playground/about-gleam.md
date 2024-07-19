---
title: '[TIL] Gleam: A Fresh Take on Functional Programming'
tags: [til, gleam, functional programming]
image:
  src: "https://gleam.run//images/social-image.png"
  url: "https://gleam.run/"
  caption: "https://gleam.run/"
  captionUrl: "https://gleam.run/"
date: 2024-07-19
published: true
---

Today I learned more about Gleam, a fascinating programming language that caught my eye. I was actually looking into Elixir, but Gleam popped up on my timeline recently, and I got distracted into revisiting its introduction just for fun. Gleam is a statically-typed functional language running on the Erlang virtual machine, promising to blend reliability with scalability. What really intrigues me is its type system with full type inference and algebraic data types, which could help catch errors early in development. As someone who's spent countless hours debugging, this feature alone has me excited about Gleam's potential.

While Gleam is still relatively new and its ecosystem is growing, it's showing promise in addressing common development challenges. Its ability to compile to both Erlang and JavaScript opens up possibilities for various applications, from backend services to web development. Here's an example from the Gleam documentation that showcases its pattern matching capabilities:

```
pub fn describe(x) {
  case x {
    0 -> "Zero"
    n if n < 0 -> "Negative"
    n if n > 0 -> "Positive"
  }
}

pub fn main() {
  io.println(describe(0))    // Prints: Zero
  io.println(describe(-5))   // Prints: Negative
  io.println(describe(10))   // Prints: Positive
}
```

I really like Gleam's syntax as it reminds me of when I used Elm, ReasonML, and F#. This example demonstrates Gleam's elegant pattern matching, which is a powerful feature in functional programming. Though it's interesting to explore new technologies like Gleam, I'll probably focus more on Elixir or Haskell for now, given its more active job market. Still, it's exciting to see how languages like Gleam might shape the future of programming.
