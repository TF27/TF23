import Gal_base from "./gallery_base"
import img1 from '../../../../assets/gallery/lec/l9.jpg'
import img2 from '../../../../assets/gallery/lec/l10.jpg'
import img3 from '../../../../assets/gallery/lec/l2.jpg'
import img4 from '../../../../assets/gallery/lec/l1.jpg'
import img5 from '../../../../assets/gallery/lec/l3.jpg'
import img6 from '../../../../assets/gallery/lec/l4.jpg'
import img7 from '../../../../assets/gallery/lec/l5.jpg'
import img8 from '../../../../assets/gallery/lec/l6.JPG'
import img9 from '../../../../assets/gallery/lec/l7.jpg'
import img10 from '../../../../assets/gallery/lec/l8.jpg'

import React from 'react'

function Lecture_gal() {
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

export default Lecture_gal