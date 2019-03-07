---
layout: post
title: Mengelola Dotfiles
modified:
categories: blog
excerpt:
tags: [productivity, linux]
image:
  feature:
author: detik_pw
share: true
comments: true
date: 2017-08-27T18:16:03+07:00
---

Konfigurasi di os linux dan mac os umumnya disimpan dalam bentuk hidden files atau biasa disebut dengan dotfiles contoh .vimrc untuk vim .zshrc untuk zsh dll. Ada baiknya dotfiles ini dibackup karena apabila kita berganti device atau mengganti os file-file konfigurasi yang dulu kita gunakan bisa kita gunakan kembali.

Yang perlu disiapkan:

1. Niat
2. Git
3. Akun di repository management services misal [Github](https://github.com), [Gitlab](https://gitlab.com), atau [Bitbucket](https://bitbucket.org)

Yang perlu diperhatikan Karena metode yang digunakan ini menyimpan konfigurasi kita di repository management service terlebih jika kita beri akses publik mohon untuk tidak menyimpan file-file ini dalam git anda:

1. File yang sifatnya credential, misal private key, .aws dll
2. File yang sifatnya rahasia .slip_gaji, .list_mantan, .berat_badan .belanjaan_istri dll

Cara yang digunakan ini merunut pada [jaagr](https://github.com/jaagr/dots) karena gak perlu symlink, copy atau semacamnya.

Berikut langkah langkahnya

1. `alias dots='git –git-dir=$HOME/.dots.git/ –work-tree=$HOME`
Buat alias di shell kesayangan anda .zshrc atau .bashrc, yang fungsinya ialah membuat command dots yang mengeksekusi command git yang selalu merujuk direktori .dots.git (yang nanti akan kita buat) dengan working space yang digunakan direktori user home anda, jangan lupa untuk merefresh shell anda
2. `git init –bare $HOME/.dots.git`
dots remote add origin ${dots_repo_anda}
fungsinya ialah membuat direktori git dengan nama .dots.git di direktori home user anda dan menambahkan remote repo anda
3. `dots config status.showUntrackedFiles no`
Buat alias
`dots config alias.untracked “status -u .”`
`dots config alias.untracked-at “status -u”`
fungsinya ialah agar tidak menampilkan untracked file pada direktori $HOME yang kita gunakan sebagai work-tree, dan membuat alias baru untuk menampilkan untracked files
4. Gunakan alias dots seperti anda menggunakan command git
```bash
dots status dots add -u
dots commit -m “…“
dots push
List file yang tidak dipantau oleh git
dots untracked
dots status -u .config/
List file yang ditracked oleh git
dots ls-files
dots ls-files .config/polybar/
```
