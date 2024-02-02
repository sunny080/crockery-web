export default {
  title: 'Review Object',
  name: 'reviewObject',
  type: 'object',
  fields: [
    {
      title: 'User Image',
      name: 'userImage',
      type: 'customImage',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },

    {
      title: 'Reveiw',
      name: 'review',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'userImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
