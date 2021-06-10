import * as React from 'react'
import { CompareImages } from '../components/CompareImages'
import { CompareImagesDrag } from '../components/CompareImagesDrag'
import { CompareImagesScroll } from '../components/CompareImagesScroll'

const props = {
  height: 512,
  imgBefore:
    'https://ptzgovorit.ru/sites/default/files/original_nodes/den_chernogo_kota.jpg',
  imgAfter:
    'https://kisa.su/wp-content/uploads/2019/08/belyy-kot-v-dome-primeta.jpg',
}

const Diviator = ({ children }: React.Component['props']) => (
  <div style={{ margin: '20px 0' }}>
    <h4>{children}</h4>
  </div>
)

export const ComparePage = () => (
  <div>
    <Diviator />

    <Diviator>With mousemove</Diviator>
    <CompareImages {...props} />

    <Diviator>With scroll</Diviator>
    <CompareImagesScroll {...props} />

    <Diviator>With mousedrag</Diviator>
    <CompareImagesDrag {...props} />

    <Diviator />
  </div>
)
