
export const formatCurrency = (n, currency = 'GTQ', locale='es-GT') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(n)
