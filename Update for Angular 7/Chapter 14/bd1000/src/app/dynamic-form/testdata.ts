export const entity = {
  inkomstar: {
    label: 'inkomstar',
    value: '1',
    type: 'select',
    options: [
      { label: '2018', value: '3' },
      { label: '2019', value: '2' },
      { label: '2020', value: '1' }
    ],
    validation: {
      required: true
    }
  },
  typ_deklreg: {
    label: 'typ_deklreg',
    value: 'INK1',
    type: 'text',
    validation: {
      required: true
    }
  },
  ulag_fsk_tomt_sma: {
    label: 'sum_sk_skred ',
    value: '1000000.000000',
    type: 'text',
    validation: {
      required: true,
      pattern: '^[0-9\.]+$'
    }
  }
};
