import Gal_base from "./gallery_base"
import img1 from '../../../../assets/gallery/exhi/link1.jpg'
import img2 from '../../../../assets/gallery/exhi/link2.jpg'
import img3 from '../../../../assets/gallery/exhi/link3.jpg'
import img4 from '../../../../assets/gallery/exhi/link4.jpg'
import img5 from '../../../../assets/gallery/exhi/link5.png'
import img6 from '../../../../assets/gallery/exhi/link6.jpg'
import img7 from '../../../../assets/gallery/exhi/link7.jpg'
import img8 from '../../../../assets/gallery/exhi/link8.jpg'
import img9 from '../../../../assets/gallery/exhi/link9.jpg'
import img10 from '../../../../assets/gallery/exhi/link10.jpg'

import React from 'react'

function Exhibition_gal() {
  return (
    <Gal_base
        i1={img1}
        i2={img2}
        i3={img3}
        i4={img4}
        i5={img5}
        i6={img6}
        i7={img7}
        i8={img8}
        i9={img9}
        i10={img10}
    />
  )
}

export default Exhibition_gal