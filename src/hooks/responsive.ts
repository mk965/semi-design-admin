// import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
// import { useDebounceFn } from '@vueuse/core';
import { useDebounceFn } from 'ahooks';
import useStore from '@/store/common/global';
import { addEventListen, removeEventListen } from '@/utils/event';
import { useEffect } from 'react';

const WIDTH = 992; // https://semi.design/zh-CN/basic/grid

function queryDevice() {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
}

export default function useResponsive(immediate?: boolean) {
  // const appStore = useAppStore();
  const toggleMenu = useStore(state => state.toggleMenu);
  const toggleDevice = useStore(state => state.toggleDevice);
  function resizeHandler() {
    if (!document.hidden) {
      const isMobile = queryDevice();
      toggleMenu(isMobile);
      toggleDevice(isMobile ? 'mobile' : 'desktop');
    }
  }
  const debounceFn = useDebounceFn(resizeHandler, { wait: 100 }).run;
  useEffect(() => {
    if (immediate) debounceFn();
    addEventListen(window, 'resize', () => debounceFn());
  })
  useEffect(() => {
    removeEventListen(window, 'resize', () => debounceFn());
  }, []);
}
