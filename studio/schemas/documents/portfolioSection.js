export default {
  title: 'Portfolio Section',
  name: 'portfolioSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{type: 'portfolioObject'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
    },
  },
}
