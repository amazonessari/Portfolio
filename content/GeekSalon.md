---
title: "GeekSalon"
date: 2019-09-27T22:58:27+09:00
draft: false
language: "English"
charge: "Design & Coding"
color: "#D4050D"
image: "work1.png"
name: "name1.svg"
---


# Overview

GeekSalonとはアプリの企画から開発、リリースまでを３ヶ月で完成できる大学生限定のプログラミングコミュニティです。このコミュニティは新たな価値の創出や相乗効果を期待し、この秋に女子体験会を各コース開催する事にしました。
今回は、この体験会で女子大学生の関心を集めるためのランディングページをデザインしました。

GeekSalon is a programming community for university students to complete the planning, development, and release of an app in three months.
Assuming a fictional trial event of this GeekSalon for female students, I designed a landing page as a design assignment with receiving feedback from seniors. However, when I proposed the design to the GeekSalon team, we decided to realize the event in autumn 2019 expecting to create new value and synergy.

# My role

## Research
Researched about GeekSalon, HTML, CSS, JavaScript
## Wireframe
Made all the contents in Figma
## Design
Designed the static page in Figma
## Code
Coded in HTML, CSS, and JavaScript


# Team

## Gordon Miyamoto
Senior Designer - Gave me a feedback
## Fumiya Sorimachi
Mentor Designer - Gave me a feedback
## Tetsuji Higashi
Backend engineer - Deployed the repository on the server
## Arashi Kawaguchi
Backend engineer - Deployed the repository on the server


# Process

{{< figure src="/geeksalon/organic.png">}}

まずは差別化を測る為にGeekSalonと競合他社のリサーチを行いました。その上でGeekSalonは学校ではなくあくまでもコミュニティである事とターゲットとなる女子大学生を考慮して、分かりやすく親しみやすい表現に努めました。

I expressed ease of study by using warm colors and organic form because GeekSalon is a community not a college and the event also targets students who do not major technology.

{{< figure src="/geeksalon/horror.jpg">}}

また、LPに含む項目の内容や流れを決める為に、ペルソナとユーザーシナリオを設定してユーザーの心情を考えながらワイヤフレームを作成しました。今回は危機感を煽るホラーストーリーというアプローチをとりました。

Besides, I created a wireframe after setting up a persona and a user scenario to affect users the best. In this project, I took an approach called a horror story that fans a crisis.

Figmaでデザインをした後、Parcelというバンドラーを使ってコーディングまで行いました。この量のコードを書くのは初めてで、レスポンシブ対応できるグルーピング、メニューバーなどのトグルの仕方、塊での改行など、多くを学びました。

After the design, I coded it using a web application bundler called Parcel. It was the first time to write this amount of code, so I learned a lot such as responsive grouping, how to toggle, and how to handle line breaks.
{{< highlight css >}}
//Will be together
span.break{ display: inline-block; }
{{< /highlight >}}
<div class="vimeo" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/379401282?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>