import * as React from 'react'
import { CompareImages } from '../components/CompareImages'
import { CompareImagesDrag } from '../components/CompareImagesDrag'

export const ComparePage = () => (
  <div>
    <p style={{ margin: '20px 0' }}>Сравнение фото до и после:</p>
    <p style={{ margin: '20px 0' }}>mousemove</p>
    <CompareImages
      height={512}
      imgBefore={
        'https://ptzgovorit.ru/sites/default/files/original_nodes/den_chernogo_kota.jpg'
      }
      imgAfter={
        'https://kisa.su/wp-content/uploads/2019/08/belyy-kot-v-dome-primeta.jpg'
      }
    />
    <p style={{ margin: '20px 0' }}>mousedrag</p>
    <CompareImagesDrag
      height={512}
      imgBefore={
        'https://ptzgovorit.ru/sites/default/files/original_nodes/den_chernogo_kota.jpg'
      }
      imgAfter={
        'https://kisa.su/wp-content/uploads/2019/08/belyy-kot-v-dome-primeta.jpg'
      }
    />
    <p style={{ margin: '20px 0' }}></p>
  </div>
)
