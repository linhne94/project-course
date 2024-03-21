import React, { useState } from "react";
import BoxOpen from './BoxOpen';
import BoxClose from './BoxClose';

function BoxChatPage() {
    const [openBox, setOpenBox] = useState(false)
    const handleBox = () => {
        setOpenBox(!openBox)
    }
    return <div className="fixed bottom-6 right-7 z-100000 ">
        {openBox ? <BoxOpen handleCloseBox={handleBox} /> : <BoxClose handleOpenBox={handleBox} />}
    </div>;
}

export default BoxChatPage;
