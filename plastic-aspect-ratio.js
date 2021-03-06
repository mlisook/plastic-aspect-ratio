/**
@license MIT
*/
/**
`plastic-aspect-ratio` is a Polymer 3.0 element which provides a container who's height is
dependent on its width. This allows you to set the width in any way, by percentage for example,
and still have the container retain its width to height aspect ratio.

Examples:
<plastic-aspect-ratio style="width: 45%;" aspect-width="1024" aspect-width="768">
  <img src="foo.jpg">
</plastic-aspect-ratio>

<plastic-aspect-ratio style="width: 100%;" aspect-width="16" aspect-width="9">
  <plastic-image preload fade sizing="contain" use-element-dim
    srcset="images/foo-s.jpg 150w, images/foo-sh.jpg 150w 2.0x, images/foo-m.jpg 405w, 
    images/foo-mh 2.0x 405w, images/foo-l 1024w, images/foo-t 500w 750h"
    placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAmElEQVQImWNmYGBgSExMzBATE7dSVFT8eO/evTcMDAwMjIFe5iYSIjybL136cunNW56FulIaEoJcfBdY5GWjvJ4/+SJhIcUhwavI5SbIxR+YvzRqH8unx7/Osf8VYpAVEWLgZuO8ljrfbwMDAwMD07u/j/ZYun5f9JfjSfGnHx9dGaCAJcBimwXjZ4Z+HllGn0XbXr+ASQAAi5UxQq88/fsAAAAASUVORK5CYII="></plastic-image>
</plastic-aspect-ratio>

@element plastic-aspect-ratio
@demo demo/index.html
*/

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `plastic-aspect-ratio`
 * A Polymer 3.0 Custom Element Where the Height Depends on the Width
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PlasticAspectRatio extends PolymerElement {
  static get template() {
    return html`
    <style>
       :host {
        display: inline-block;
        overflow: hidden;
      }
    </style>
    <div id="ctnr" style="box-sizing: border-box; position: relative; width: 100%;">
      <div id="spread" style="position: absolute; top: 0; left: 0;bottom: 0;right: 0;">
        <slot></slot>
      </div>
    </div>
`;
  }

  static get is() {
    return 'plastic-aspect-ratio';
  }
  static get properties() {
    return {
      /**
       * aspect ratio height - the relative height compared to the width
       */
      aspectHeight: {
        type: Number,
        value: 1
      },
      /**
       * aspect ratio width - the relative width on which the height is based
       */
      aspectWidth: {
        type: Number,
        value: 1
      }
    };
  }

  static get observers() {
    return [
      '_computeRatio(aspectHeight, aspectWidth)'
    ]
  }

  /**
   * sets the style so that the height is based on a ratio of width to height
   * @param {Number} aspH - the height component of the ratio
   * @param {Number} aspW - the width component of the ratio
   */
  _computeRatio(aspH, aspW) {
    let h = aspH && aspH > 0 ? aspH : 1;
    let w = aspW && aspW > 0 ? aspW : 1;
    this.$.ctnr.style.paddingTop = (100 * h / w) + "%";
  }
}

window.customElements.define(PlasticAspectRatio.is, PlasticAspectRatio);
