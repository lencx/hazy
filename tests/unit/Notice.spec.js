import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Notice from '@/components/Notice.vue';
describe('Notice.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(Notice, {
            propsData: { msg },
        });
        expect(wrapper.text()).to.include(msg);
    });
});
//# sourceMappingURL=Notice.spec.js.map