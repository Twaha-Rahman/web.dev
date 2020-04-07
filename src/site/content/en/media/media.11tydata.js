module.exports = {
  // Tags are inherited by all posts.
  tags: ["pathItem", "media"],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: "media",
    cover: "/images/collections/media.svg",
    title: "Media",
    updated: "April 30, 2020",
    description: `Add audio and video to your web sites`,
    overview: `In this collection, you'll learn how to add basic audio and
    video capabilities to your web site.`,
    topics: [
      {
        title: "What is a media experience",
        pathItems: ["media-experience"],
      },
      {
        title: "File Basics",
        pathItems: [
          "application-basics",
          "containers",
          "streams",
          "codecs",
          "bitrate",
          "resolution",
          "encryption",
          "application-cheetsheet",
        ],
      },
      {
        title: "Use markup correctly",
        pathItems: [
          "the-video-tag",
          "the-audio-tag",
          "the-source-tag",
          "the-track-tag",
          "media-controls",
        ],
      },
      {
        title: "Serving",
        pathItems: ["preloading", "server-basics"],
      },
    ],
  },
};
