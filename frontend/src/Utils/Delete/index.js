import React, { useState, useEffect } from 'react';

import ModalDelete from '../../Components/ModalDelete';

export default function Delete() {
     const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

     useEffect(() => {
          alert('oiioioio')
          setModalDeleteVisible(!modalDeleteVisible);
     }, [])

     return(
          alert('ola')
     )
}