# Optional: Color Scheme Customization

If you want to match the purple/violet theme from my_portfolio, you can update the following in `src/index.css`:

## Current Theme (3d-portfolio)
- Primary colors: Blue tones (#839cb5, #2d2d38)
- Background: Black (#0e0e10)
- Text: White and light blue (#d9ecff)

## my_portfolio Theme
- Primary color: Purple/Violet (hsl(268, 77%, 58%))
- Dark variant: hsl(268, 78%, 51%)
- Light variant: hsl(268, 100%, 83%)
- Background: Dark blue-black (hsl(200, 12%, 5%))

## To Apply my_portfolio Colors to 3d-portfolio:

Replace the `@theme` section in `src/index.css` (around line 21-28) with:

```css
@theme {
  --font-sans: "Mona Sans", sans-serif;
  --color-white-50: #d9ecff;
  --color-black-50: #1c1c21;
  --color-black-100: #0e0e10;
  --color-black-200: #282732;
  --color-blue-50: #839cb5;
  --color-blue-100: #2d2d38;
  
  /* Add purple theme colors from my_portfolio */
  --color-purple-primary: hsl(268, 77%, 58%);
  --color-purple-dark: hsl(268, 78%, 51%);
  --color-purple-light: hsl(268, 100%, 83%);
  --color-body: hsl(200, 12%, 5%);
  --color-container: hsl(200, 10%, 8%);
}
```

Then you can use these colors in your components by updating class names or adding custom styles.

## Alternative: Keep Both Themes

You can keep the modern blue/black theme of 3d-portfolio since it complements the 3D elements well, while still personalizing the content. The 3D portfolio has a more modern, tech-focused aesthetic that works great for showcasing development work.
