import { Anchor } from 'antd'
import React from 'react'
const onChange = (link) => {
    console.log('Anchor:OnChange', link);
};
const Anchors = () => {
  return (
    <div className='par'>
        <Anchor
          className='site-anchor'
          affix={false}
          onChange={onChange}
          items={[
            {
              key: '1',
              href: '/community_building_period',
              title: 'Community Building Period',
            },
            {
              key: '2',
              href: '/gsoc24-blog/phase1',
              title: 'Phase 1',
              children: [
                {
                  key: '3',
                  href: '/gsoc24-blog/week1',
                  title: 'Week 1'
                },
                {
                  key: '4',
                  href: '/gsoc24-blog/week2',
                  title: 'Week 2'
                },
              
              ]
            },
            {
              key: '5',
              href: '#api',
              title: 'Phase 2',
              children: [
                {
                  key: '6',
                  href: '#anchor-props',
                  title: 'Week 3',
                },
                {
                  key: '5',
                  href: '#link-props',
                  title: 'Week 4',
                },
              ],
            },
          ]}
        />

    </div>
  )
}

export default Anchors