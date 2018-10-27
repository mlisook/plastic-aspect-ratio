# \<plastic-aspect-ratio\>

[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/mlisookplastic-aspect-ratio)
[![Stars on Vaadin Directory](https://img.shields.io/vaadin-directory/star/mlisookplastic-aspect-ratio.svg)](https://vaadin.com/directory/component/mlisookplastic-aspect-ratio)

A Polymer 3.0 Custom Element Where the Height Depends on the Width

This allows you to set the width in any way, by percentage for example,
and still have the container retain its width to height aspect ratio.

The element is also available for Polymer 2 - see install instructions below.

## Examples
```HTML
<plastic-aspect-ratio style="width: 45%;" aspect-width="1024" aspect-width="768">
  <img src="foo.jpg" style="width:100%;height:100%">
</plastic-aspect-ratio>
```
Typically you will style a single content item with width:100%, height:100%.

```HTML
<plastic-aspect-ratio style="width: 100%;" aspect-width="16" aspect-width="9">
  <plastic-image  style="width:100%;height:100%" lazy-load preload fade sizing="contain" use-element-dim
    srcset="images/foo-s.jpg 150w, images/foo-sh.jpg 150w 2.0x, images/foo-m.jpg 405w, 
    images/foo-mh 2.0x 405w, images/foo-l 1024w, images/foo-t 500w 750h" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAmElEQVQImWNmYGBgSExMzBATE7dSVFT8eO/evTcMDAwMjIFe5iYSIjybL136cunNW56FulIaEoJcfBdY5GWjvJ4/+SJhIcUhwavI5SbIxR+YvzRqH8unx7/Osf8VYpAVEWLgZuO8ljrfbwMDAwMD07u/j/ZYun5f9JfjSfGnHx9dGaCAJcBimwXjZ4Z+HllGn0XbXr+ASQAAi5UxQq88/fsAAAAASUVORK5CYII=">
    </plastic-image>
</plastic-aspect-ratio>
```

You don't have to use only a single content item. Anything that could be in a div is fine.
```HTML
<plastic-aspect-ratio style="width: 100%;" aspect-width="16" aspect-width="9">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mauris eu ante dignissim porta. Integer non tellus tincidunt, tristique erat vel, pretium nisi.</p>
  <paper-input label="consectetur"></paper-input>
</plastic-aspect-ratio>
```

## Install
### For Polymer 3 Projects
`npm i --save plastic-aspect-ratio`

### For Polymer 2 Projects
`bower install --save mlisook/plastic-aspect-ratio#^1.0.0`

## Issues and Contributions

Please file issues on the github page. Contributions via pull request are certainly welcome and appreciated. 

## License

MIT
