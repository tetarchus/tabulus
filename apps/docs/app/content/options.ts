const HORIZONTAL_ALIGN_TYPE = 'left | center | right';
const VERTICAL_ALIGN_TYPE = 'top | middle | bottom';

const options = {
  columns: [
    { id: 'id', title: 'Option' },
    { id: 'types', title: 'Value Types' },
    { id: 'default', title: 'Default Value' },
    { id: 'desc', title: 'Description' },
    { id: 'link', title: 'Example' },
  ],
  data: {
    columnOptions: {
      general: [
        {
          id: 'visible',
          types: 'boolean',
          default: 'true',
          desc: 'Whether the column should be displayed in the rendered table.',
        },
      ],
      layout: [
        {
          id: 'headerHorizontalAlign',
          types: HORIZONTAL_ALIGN_TYPE,
          default: 'left',
          desc: 'How to align content horizontally within a header cell.',
        },
        {
          id: 'headerVerticalAlign',
          types: VERTICAL_ALIGN_TYPE,
          default: 'left',
          desc: 'How to align content vertically within a header cell.',
        },
        {
          id: 'horizontalAlign',
          types: HORIZONTAL_ALIGN_TYPE,
          default: 'left',
          desc: 'How to align content horizontally within a body cell.',
        },
        {
          id: 'verticalAlign',
          types: VERTICAL_ALIGN_TYPE,
          default: 'left',
          desc: 'How to align content vertically within a body cell.',
        },
      ],
    },
    tableOptions: {
      layout: [
        {
          id: 'horizontalAlign',
          types: HORIZONTAL_ALIGN_TYPE,
          default: 'center',
          desc: 'How to align the table within its parent component.',
        },
      ],
      columns: [
        {
          id: 'columnDefaults',
          types: '@see ./column-options',
          default: '{}',
          desc: 'Set of default options to use for all columns in the table.',
        },
      ],
      style: [
        {
          id: 'theme',
          types: '@see ./styling/theme',
          default: 'standard',
          desc: 'The theme to use for the table. Can be built-in or completely custom.',
        },
      ],
    },
  },
};

export { options };
