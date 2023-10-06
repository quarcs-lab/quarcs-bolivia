---
title: Building out a Story
author: Geoffrey Xue
date: 2023-09-26
links:
  project: https://github.com/DSSD-Madison/Nagoya
  second-link: https://www.google.com/
---

This is an example story demonstrating Markdown as story content. Below is a list of features (and examples of them) that work:
- Heading
- Text
- Tables
- Image
- Math and LaTeX
- *Embeddings* - Requires shortcode
- *HTML Formatting* - Requires shortcode, markdown within HTML not supported

### Heading
# H1
## H2
### H3
#### H4

### Text
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis tortor in nunc varius, at rutrum leo faucibus. Aliquam est sem, accumsan vitae magna vitae, vehicula scelerisque arcu. Donec a mi molestie, posuere metus id, pellentesque est. Fusce leo orci, porta eget urna a, congue ornare ipsum. Cras gravida eleifend metus sed dapibus. Maecenas laoreet mattis ultricies. Aenean eget mollis lectus, eget rhoncus velit. Donec nec purus ut lorem pharetra sodales. Cras sodales magna eu ex commodo, a interdum sem tincidunt. Nulla velit urna, tempus eu nunc auctor, egestas pharetra lectus. Nam maximus dolor sed elit imperdiet aliquam. Cras egestas, turpis ultrices sagittis dignissim, risus turpis fermentum velit, eu feugiat mi orci quis tellus. Suspendisse potenti. Nullam porttitor risus in posuere vestibulum.

Proin ornare ultrices tellus. Cras vitae nulla et ipsum dictum tristique a vitae sapien. Nam maximus tristique arcu, vitae feugiat turpis. Integer elementum eu turpis ac feugiat. Maecenas nisi turpis, placerat quis fringilla eget, fermentum sit amet enim. Aliquam hendrerit odio pulvinar, tristique eros eget, tristique augue. Vivamus quis rutrum ante.

### Markdown table
Works out of the box.

| 1 | 2 | 3 | 4 | 5 |
|:-:|:-:|---|---|---|
| a | b | c | d | e |
| f | g | h | i | j |
| l | m | n | o | p |
| q | r | s | t | u |

### Image
Images can be uploaded to the same folder as the story, and referenced from one folder before the story.

```text {linenos=true}
![Small Image](stories/geoffrey-xue-1/image.svg)
![Big Image](stories/geoffrey-xue-1/bigimage.jpg)
```

![Small Image](stories/geoffrey-xue-1/image.svg)
![Big Image](stories/geoffrey-xue-1/bigimage.jpg)

### Math and LaTeX
LaTeX is supported via KaTeX.
$$
\sum_{k=0}^n (k^2 + 1)
$$

This is an $i = n * l + i / n - e$ equation.

### Embedding
HTML is considered unsafe when rendering the Markdown, so embeds don't work out of the box.

```text {linenos=true}
<iframe title="Embedded cell output" src="https://embed.deepnote.com/076d71f5-53bf-4bc8-9b03-889bcc71b262/d74f010cb60f41758a0e1c574e299cda/d96050d2d625458ebd36f071e5776bc9?height=689.2250366210938" height="689.2250366210938" width="500"/>
```

<iframe title="Embedded cell output" src="https://embed.deepnote.com/076d71f5-53bf-4bc8-9b03-889bcc71b262/d74f010cb60f41758a0e1c574e299cda/d96050d2d625458ebd36f071e5776bc9?height=689.2250366210938" height="689.2250366210938" width="500"/>

You can get around this by adding an html shortcode to your code.

**Note: You must end your embed with a matching closing tag for it to render correctly.**

```text {linenos=true}
{{</* html */>}}
<iframe title="Embedded cell output" src="https://embed.deepnote.com/076d71f5-53bf-4bc8-9b03-889bcc71b262/d74f010cb60f41758a0e1c574e299cda/d96050d2d625458ebd36f071e5776bc9?height=689.2250366210938" height="689.2250366210938" width="500"></iframe>
{{</*/ html */>}}
```
\
{{< html >}}
<iframe title="Embedded cell output" src="https://embed.deepnote.com/076d71f5-53bf-4bc8-9b03-889bcc71b262/d74f010cb60f41758a0e1c574e299cda/d96050d2d625458ebd36f071e5776bc9?height=689.2250366210938" height="689.2250366210938" width="500"></iframe>
{{</ html >}}

### HTML Formatting

Similar to embeds, any HTML needs the html wrapper. Note that mixing Markdown with HTML is not supported currently, so we would not recommend using a mix of HTML and Markdown.

If you would like to style your content, tailwind is supported for formatting. Feel free to use tailwind to customize your story!

```text {linenos=true}
{{</* html */>}}
<div>
  <div>Custom</div>
  <div>HTML</div>
</div>
{{</*/ html */>}}
```
\
{{< html >}}
<div>
  <div>Custom</div>
  <div>HTML</div>
</div>
{{</ html >}}