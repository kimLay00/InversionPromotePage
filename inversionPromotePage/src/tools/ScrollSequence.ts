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
      const _maxImageSequence = this.images.length - 1,
            _currentImageIndex = Math.floor(this.percentScrolled * _maxImageSequence);
        requestAnimationFrame(() => this.canvas.renderIndex(_currentImageIndex));
    }
    
    get percentScrolled() {
      const container = this.scrollWith,
            doc = document.documentElement,
            currentOffsetY = doc.scrollTop || window.pageYOffset, //to document top px
            containerHeight = container.clientHeight || container.offsetHeight, //inner height of an element in pixels, include padding but exclude margin
            containerOffsetY = (container && container !== window)? container.offsetTop: 0,
            containerBrowsedHeight = (currentOffsetY - containerOffsetY),
            scrolledPortion = containerBrowsedHeight / containerHeight;

      return scrolledPortion > 1 ? 1 : scrolledPortion < 0 ? 0 : scrolledPortion;
    }
  }