# Lit l10n bug

## Steps
1. Setup
```bash
npm ci --production
```

2. Server
```
python3 -m http.server
```

3. Browse
http://localhost:8000/

## Expected output
```
1. Some text with param ABC. Du texte avec paramètre ABC.
2. Some text with param CDE. Du texte avec paramètre CDE.
3. Some text with param 123. Du texte avec paramètre 123.
4. Some text with param 456. Du texte avec paramètre 456.
```

## Actual unexpected output
```
1. Some text with param ABC. Du texte avec paramètre 456.
2. Some text with param CDE. Du texte avec paramètre 456.
3. Some text with param 123. Du texte avec paramètre 456.
4. Some text with param 456. Du texte avec paramètre 456.
```
