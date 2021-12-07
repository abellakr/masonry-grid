const posts = [];

const my_img = [
  "./img/event/club1.jpg",
  "./img/travel/banff2.jpg",
  "./img/model/model1.jpg",
  "./img/travel/banff3.jpg",

  "./img/model/model2.jpg",
  "./img/event/club2.jpg",
  "./img/street/street1.jpg",
  "./img/street/street2.jpg",

  "./img/travel/banff1.jpg",
  "./img/model/model3.jpg",
  "./img/street/street3.jpg",
  "./img/event/club7.jpg",

  "./img/event/club4.jpg",
  "./img/travel/banff4.jpg",
  "./img/model/model4.jpg",
  "./img/street/street4.jpg",

  "./img/model/model5.jpg",
  "./img/street/street5.jpg",
  "./img/event/club6.jpg",
  "./img/travel/banff5.jpg",
];

const images = [
  "./img/event/club2.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/5/9/cd4d9422bd325d6c9dc953.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/9c3654947d84e487ebcfae.jpg",
  "./img/travel/banff1.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/a509376c73b60ea6e24996.jpg",
  "./img/model/model1.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/9bcdc7bed34e0534cff3b0.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/94808224789bd4d2fd2f52.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/8dcf8a67b030d9aef115eb.jpg",
  "./img/street/street1.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/8996eb67b030d9aef0ce1c.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/89c80332076cba3fffe19d.jpg",
  "./img/event/club6.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/0/f0fa52c2e1db766ab5b004.jpg",
  "https://dr.savee-cdn.com/things/thumbnails/6/1/83d88d67b030d9aef082f8.jpg",
];

let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: my_img[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
