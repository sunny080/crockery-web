export default {
  title: 'Testimonial Section',
  name: 'testimonialSection',
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
      title: 'Desktop Background Image',
      name: 'desktopBackgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Desktop Background Image',
      name: 'mobileBackgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Reviews',
      name: 'reviews',
      type: 'array',
      of: [{type: 'reviewObject'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
      media: 'desktopBackgroundImage',
    },
  },
}
