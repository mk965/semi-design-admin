/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-12 15:28:36
 * @LastEditTime: 2022-02-13 23:29:39
 * @Description: Modify here please
 */

const steps = [
    {
      element: '.semi-navigation-header',
      popover: {
        title: 'Logo',
        description: 'Open and Close sidebar',
        position: 'bottom'
      }
    },
    {
      element: '#semi-admin-breadcrumb',
      popover: {
        title: 'Breadcrumb',
        description: 'Indicate the current page location',
        position: 'bottom'
      }
    },
    {
      element: '#semi-admin-theme',
      popover: {
        title: 'Theme',
        description: 'Switch between Day mode and Night mode',
        position: 'bottom'
      }
    },
    {
      element: '#semi-admin-tags-view',
      popover: {
        title: 'Tags view',
        description: 'The history of the page you visited',
        position: 'bottom'
      }
    },
    {
      element: '.semi-navigation-collapse-btn',
      popover: {
        title: 'Collapse Sidebar',
        description: 'Collapse and Expand sidebar',
        position: 'top'
      }
    },
  ]
  
  export default steps
  