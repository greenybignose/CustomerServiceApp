import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import ChatComponents from './ChatComponents';

const Top = () => {

return(
<>
<Routes>
<Route path="/" element={<Menu />} >
</Route>
<Route path="/memberarea" element={<ChatComponents />} >
</Route>
</Routes>
</>
);

}

export default Top;
