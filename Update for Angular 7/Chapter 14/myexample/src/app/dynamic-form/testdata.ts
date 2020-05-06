export const product = {
  name: {
    label: 'Name',
    value: '',
    type: 'text',
    validation: {
      required: true
    }
  },
  category: {
    label: 'Category',
    value: '',
    type: 'text',
    validation: {
      required: true,
      pattern: '^[A-Za-z]+$',
      minLength: 3,
      maxLength: 10
    }
  },
  price: {
    label: 'Price',
    value: '',
    type: 'text',
    validation: {
      required: true,
      pattern: '^[0-9\.]+$',
      Limit: 100,
    }
  }
};
