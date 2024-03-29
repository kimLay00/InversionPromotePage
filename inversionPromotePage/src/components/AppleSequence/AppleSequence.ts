import { ref, toRef } from 'vue';
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
      
      return { msg, sequenceInfo, handler };
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

        function sequenceImageSetup(){
            for (let i = 0; i <= _self.sequenceInfo.imageSequenceTotal; i ++) {
                _sequenceImage.push(`${`000${i}`.slice(-4)}.jpg`);
            }
        }
    }
  };