import React, {FC, ReactNode} from 'react';
import Header from './header/Header';
import Meta from '../seo/meta/Meta';
import { IMeta } from '../seo/meta/meta.interface';

interface TLayoutProps {
    meta: IMeta,
    children: ReactNode
};

const Layout: FC<TLayoutProps> = ({meta, children}) => {
    return (
        <>
            <Meta {...meta}/>
            <Header />
            {children} 
        </>
    );
};

export default Layout;