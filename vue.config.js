module.exports = {
  pwa: {
    name: "Instagram Redesign",
    themeColor: "#E91E63",
    msTileColor: "#E91E63",
    iconPaths: {
      favicon32: "favicon32x32.png",
      favicon16: "favicon64x64.png",
      appleTouchIcon: "favicon152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "favicon144x144.png"
    },
    manifestOptions: {
      name: "Instagram Redesign",
      short_name: "NewInsta",
      icons: [
        {
          src: "favicon192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "favicon512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "favicon192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "favicon512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
  }
};
