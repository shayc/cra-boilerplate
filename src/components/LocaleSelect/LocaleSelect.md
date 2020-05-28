LocaleSelect examples:

###### LocaleSelect

```jsx
const [locale, setLocale] = React.useState('he-IL');

<LocaleSelect
  locales={['en-US', 'he-IL']}
  value={locale}
  onChange={(event) => setLocale(event.target.value)}
/>;
```
