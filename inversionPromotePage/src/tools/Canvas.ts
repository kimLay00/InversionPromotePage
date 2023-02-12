export class Canvas {
    private images: any;
    private container: any;
    private cover: any;
    private displayIndex: any;
    private canvas: any;
    private ctx: any;

    constructor($canvasSetup: any) {
      this.images = $canvasSetup.images;
      this.container = $canvasSetup.container;
      this.cover = $canvasSetup.cover;
      this.displayIndex = 0;
    }
    
    setup() {
      this.canvas = document.createElement("canvas");
      this.container.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d')
      
      window.addEventListener('resize', () => this.resize());
      this.resize();
    }
    
    renderIndex($element: any) {
      if (this.images[$element]) {
          return this.drawImage($element);
      }
      // Find closest loaded image
      for (var t = Number.MAX_SAFE_INTEGER, r = $element; r >= 0; r--)
          if (this.images[r]) {
              t = r;
              break
          }
      for (var n = Number.MAX_SAFE_INTEGER, i = $element, o = this.images.length; i < o; i++)
          if (this.images[i]) {
              n = i;
              break
          }
      this.images[t] ? this.drawImage(t) : this.images[n] && this.drawImage(n)
    }
    
    drawImage(e: any) {
      this.displayIndex = e,
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const x = Math.floor((this.canvas.width - this.images[this.displayIndex].naturalWidth) / 2);
      const y = Math.floor((this.canvas.height - this.images[this.displayIndex].naturalHeight) / 2);
      if (this.cover) {
        
        this.drawImageCover(this.ctx, this.images[this.displayIndex]);
      } else {
        this.ctx.drawImage(this.images[this.displayIndex], x, y);
      }
    }
    
    resize() {
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.canvas.style.height = `${h}px`;
      this.canvas.style.width = `${w}px`;
      this.canvas.height = h;
      this.canvas.width = w;
      
      this.renderIndex(this.displayIndex);
    }
    
    /**
   * By Ken Fyrstenberg Nilsen
   *
   * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
   *
   * If image and context are only arguments rectangle will equal canvas
  */
    drawImageCover(ctx: any, img: any, x = 0, y = 0, w = ctx.canvas.width, h = ctx.canvas.height, offsetX = 0.5, offsetY = 0.5) {
  
        // keep bounds [0.0, 1.0]
        if (offsetX < 0) offsetX = 0;
        if (offsetY < 0) offsetY = 0;
        if (offsetX > 1) offsetX = 1;
        if (offsetY > 1) offsetY = 1;
  
        var iw = img.width,
            ih = img.height,
            r = Math.min(w / iw, h / ih),
            nw = iw * r,   // new prop. width
            nh = ih * r,   // new prop. height
            cx, cy, cw, ch, ar = 1;
  
        // decide which gap to fill    
        if (nw < w) ar = w / nw;                             
        if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
        nw *= ar;
        nh *= ar;
  
        // calc source rectangle
        cw = iw / (nw / w);
        ch = ih / (nh / h);
  
        cx = (iw - cw) * offsetX;
        cy = (ih - ch) * offsetY;
  
        // make sure source rectangle is valid
        if (cx < 0) cx = 0;
        if (cy < 0) cy = 0;
        if (cw > iw) cw = iw;
        if (ch > ih) ch = ih;
  
        // fill image in dest. rectangle
        ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
    }
  }