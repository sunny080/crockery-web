export default {
  title: 'Two Column Generic',
  name: 'twoColumnGeneric',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'genericSectionFields',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'content.heading',
      media: 'content.mobileImage',
    },
  },
}
