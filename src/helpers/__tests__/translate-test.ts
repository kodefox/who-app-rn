import { t } from '../translate';

it('should be a no-op for plain strings', () => {
  expect(t('')).toBe('');
  expect(t('Foo')).toBe('Foo');
  expect(t('Hello {foo}')).toBe('Hello {foo}');
});

it('should interpolate strings', () => {
  expect(t('Hello {foo}', {})).toBe('Hello {foo}');
  expect(t('Hello {foo}', { foo: 'bar' })).toBe('Hello bar');
  expect(t('Hello {foo} {bar}', { foo: 'x' })).toBe('Hello x {bar}');
  expect(t('Hello {foo} {bar}', { foo: 'x', bar: 'y' })).toBe('Hello x y');
});

it('should handle fragments (spans of text)', () => {
  expect(
    t.frag('Hello <b>world</b>!', { b: (str) => ({ bold: str }) }),
  ).toEqual(['Hello ', { bold: 'world' }, '!']);
  expect(
    t.frag('Hello <b>{foo}</b>!', {
      foo: 'world',
      b: (str) => ({ bold: str }),
    }),
  ).toEqual(['Hello ', { bold: 'world' }, '!']);
});
