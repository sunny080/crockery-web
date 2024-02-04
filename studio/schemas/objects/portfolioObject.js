export default {
  title: 'Portfolio Object',
  name: 'portfolioObject',
  type: 'object',
  fields: [
    {
      title: 'Brand',
      name: 'brand',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
    },
    {
      title: 'Thumbnail Image',
      name: 'thumbnailImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Gallery Images',
      name: 'galleryImages',
      type: 'array',
      of: [{type: 'customImage'}],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Pdf',
      name: 'pdf',
      type: 'file',
    },
    {
      title: 'Video Url',
      name: 'videoUrl',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'brand',
      media: 'thumbnailImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
