import {ImgLoader} from './ImgLoader';
import {Canvas} from './Canvas';

export class ScrollSequence {
    private opts: any;
    private container: any;
    private scrollWith: any;
    private images: any;
    private imagesToLoad: any;
    private priorityFrames: any;
    private loader: any;
    private canvas: any;

    constructor($options: any) {
      this.opts= {
        container: 'body',
        starts: 'out',
        ends: 'out',
        imagesRoot: '',
        cover: false,
        ...$options
      }
      //TODO: document querySelector to be replaced by _self.$ref?
      this.container = typeof $options.container === 'object' ? 
        $options.container : 
        document.querySelector($options.container);
      
      this.scrollWith = !$options.scrollWith ? 
        this.container : 
        typeof $options.scrollWith === 'object' ? 
          $options.scrollWith : 
          document.querySelector($options.scrollWith);
      
      this.images = Array($options.images.length);
      this.imagesToLoad = $options.images;
      this.priorityFrames = $options.priorityFrames;
      
      this.loader = new ImgLoader({
        imgsRef: this.images,
        images: this.imagesToLoad,
        imagesRoot: $options.imagesRoot,
        priorityFrames: this.priorityFrames
      });
      
      this.canvas = new Canvas({
        container: this.container,
        images: this.images,
        cover: $options.cover
      });
      
      this.init();
    }
    
    init() {
      this.canvas.setup();
      this.loader.once('FIRST_IMAGE_LOADED', () => {
        this.canvas.renderIndex(0);
      })
      this.loader.once('PRIORITY_IMAGES_LOADED', () => {
        window.addEventListener('scroll', () => this.changeOnWindowScroll());
      })
      this.loader.once('IMAGES_LOADED', () => {
        console.log('Sequence Loaded');
      })
    }
    
    changeOnWindowScroll() {
        console.warn("changeOnWindowScroll");
      const step = 100 / (this.images.length - 1);
      const mapToIndex = Math.floor(this.percentScrolled / step);
      requestAnimationFrame(() => this.canvas.renderIndex(mapToIndex));
    }
    
    get percentScrolled() {
      const {starts, ends} = this.opts;
      const el = this.scrollWith;
      const doc = document.documentElement;
      const clientOffsety = doc.scrollTop || window.pageYOffset;
      const elementHeight = el.clientHeight || el.offsetHeight;
      const clientHeight = doc.clientHeight;
      let target = el;
      let offsetY = 0;
      do {
          offsetY += target.offsetTop;
          target = target.offsetParent;
      } while (target && target !== window);
      
      let u = (clientOffsety - offsetY);
      let d = (elementHeight + clientHeight)
      
      if (starts === 'out') u += clientHeight;
      if (ends === 'in') d -= clientHeight;
      if (starts == 'in') d -= clientHeight;
      // start: out, ends: out
      // const value = ((clientOffsety + clientHeight) - offsetY) / (clientHeight + elementHeight) * 100;
      
      //start: in, ends: out
      // const value = (clientOffsety - offsetY) / (elementHeight) * 100;
      
      //start: out, ends: in
      // const value = ((clientOffsety + clientHeight) - offsetY) / (elementHeight) * 100;
      
      // Start: in, ends: in
      // (clientOffsety - offsetY) / (elementHeight - clientHeight)
      
      const value = u / d * 100;
      return value > 100 ? 100 : value < 0 ? 0 : value;
    }
  }