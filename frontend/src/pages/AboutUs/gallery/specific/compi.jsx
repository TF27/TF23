import Gal_base from "./gallery_base"
import img1 from '../../../../assets/gallery/compi/comp1.jpg'
import img2 from '../../../../assets/gallery/compi/comp2.jpg'
import img3 from '../../../../assets/gallery/compi/comp3.jpg'
import img4 from '../../../../assets/gallery/compi/comp4.jpg'
import img5 from '../../../../assets/gallery/compi/comp5.jpg'
import img6 from '../../../../assets/gallery/compi/comp6.jpg'
import img7 from '../../../../assets/gallery/compi/comp7.jpg'
import img8 from '../../../../assets/gallery/compi/comp8.jpg'
import img9 from '../../../../assets/gallery/compi/comp9.jpg'
import img10 from '../../../../assets/gallery/compi/comp10.jpg'

import React from 'react'

function Compi_gal() {
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
        txt1='praveen'
    />
  )
}

export default Compi_gal