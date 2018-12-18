# CSS & SCSS

## 1. Intialized Page

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
}
```

- `box-sizing` include margin and padding.
- Initialize font family

## 2. Linear-gradient

```
background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    ),
    url(../img/hero.jpg);
```

- cover a gradient on an image.

## 3. clip-path

```
clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
```

- define multiple points to clip a box.

[](www.bennettfeely.com/clippy)

## 4. Position - absolute

Set the parent relative

## 5. Height & Width auto

if set an image height, then it's width will be auto caculated.

## 6. the shaking of animation

add `backface-visibility: hidden`

## 7. If an inline element has padding

Use inline-block, then padding will be effect.

## 8. workflow behind screen - css

1. author
2. user
3. browser

4. importantce
5. sprcificity
6. source order

persudo class should have higer specifility than original one.

\*{} element have zero specifility.
(0,0,0,0)

(inline-style,id,class,element)

if everything equals, then use source mode, the latest one overwrite everything before.

## box

block-level: occupy as much as possible, which is usually 100%.

Inline boxes

occupy content's space
no line break
bo heights and width
padding and margins only horizental

Inline-block
set padding margin

## 9. relative unit

## 10. BEM class name system

stands for `block elements modifier`

`btn`
`btn__emotion`
`btn__emotion--modified`

## VSCode Plugins

| name     | package name   | description                   |
| -------- | -------------- | ----------------------------- |
| Colorize | colorize 0.8.1 | visualize css colors in files |

## CSS Fonts

Use google fonts.

www.fonts.google.com

## Install SCSS

https://medium.com/@oreofeolurin/configuring-scss-with-react-create-react-app-1f563f862724

Test: no reject sass can still work
