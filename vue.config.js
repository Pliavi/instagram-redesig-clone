module.exports = {
  pwa: {
    name: "SomePhotos",
    themeColor: "#E91E63",
    msTileColor: "#E91E63",
    iconPaths: {
      favicon32: "img/favicon32x32.png",
      favicon16: "img/favicon64x64.png",
      appleTouchIcon: "img/favicon152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/favicon144x144.png"
    },
    manifestOptions: {
      name: "SomePhotos",
      short_name: "SomePhotos",
      icons: [
        {
          src: "img/favicon192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "img/favicon512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "img/favicon192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "img/favicon512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
  }
};
