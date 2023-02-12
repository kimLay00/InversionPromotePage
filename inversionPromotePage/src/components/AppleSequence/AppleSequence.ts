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
        // const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        sequenceImageSetup();
        // const appleSequence = new ScrollSequence({
        //     container: '.apple-sequence',
        //     scrollWith: '.apple-container',
        //     images: _sequenceImage,
        //     imagesRoot: 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/',
        //     priorityFrames: [0, 20, 40, 60, 90],
        //     cover: true,
        //     playUntil: 'scroll-out',
        //     starts: 'in'
        // });
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

        // function sequenceImageSetup(){
        //     for (let i = 0; i <= 131; i ++) {
        //         _sequenceImage.push(`${`000${i}`.slice(-4)}.jpg`);
        //     }
        // }

        function sequenceImageSetup(){
            for (let i = 0; i <= _self.sequenceInfo.imageSequenceTotal; i ++) {
                _sequenceImage.push(`${`000${i}`.slice(-4)}.jpg`);
            }
        }
    }
  };