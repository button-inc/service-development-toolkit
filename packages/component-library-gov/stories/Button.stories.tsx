import storyBuilder from '../../../stories/templates/ButtonTemplate';
import Button from '../src/Button';

const exported = storyBuilder(Button, 'Button');
const metaData = exported.default;
export { metaData as default };
export const { Primary, Secondary, Large, Small } = exported;
