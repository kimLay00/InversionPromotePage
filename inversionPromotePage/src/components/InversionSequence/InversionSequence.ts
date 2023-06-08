import { ref, toRef } from 'vue';
import ScrollOut from "scroll-out";
import {ScrollSequence} from '../../tools/ScrollSequence';

  export default {
    props: {
        sequenceInfo: Object,
    },
    setup(props) {
      const msg = ref('hello!');
      const sequenceInfo = toRef(props, 'sequenceInfo')
      const handler = () => {
        alert(props['sequenceInfo'].container);
      };
      const scrollOut: any = {};
      
      return { msg, sequenceInfo, handler, scrollOut };
    },
    created(){
    },
    mounted(){
        let _self = this,
            _sequenceImage: any = [];

        sequenceImageSetup();

        const appleSequence = new ScrollSequence({
            container: _self.sequenceInfo.container,
            scrollWith: _self.sequenceInfo.scrollWith,
            images: _sequenceImage,
            imagesRoot: _self.sequenceInfo.imagesRoot,
            priorityFrames: _self.sequenceInfo.priorityFrames,
            cover: _self.sequenceInfo.cover,
            playUntil: _self.sequenceInfo.playUntil,
            starts: _self.sequenceInfo.starts
        });

        initScrollOut();

        function sequenceImageSetup(){
          let _startIndex = _self.sequenceInfo.startFrame;
            for (let i = 0; i < _self.sequenceInfo.imageSequenceTotal; i ++) {
                let _imgIndex = _startIndex + i * 10;
                _sequenceImage.push(`${`000${_imgIndex}`.slice(-5)}.png`);
            }
        }
        function initScrollOut(){
          _self.scrollOut = ScrollOut({
            scope: _self.$el,
            targets: '.speak',
            cssProps: {
              viewportY: true,
            }
          })
        }
    },
    destroyed() {
      let _self = this;
      _self.scrollOut.teardown();
    }
  };