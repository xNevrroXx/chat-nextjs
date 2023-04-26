import React, {FC, ReactNode} from 'react';
// own modules
import Header from '@/components/layout/header/Header';
import Meta from '@/components/seo/meta/Meta';
import { IMeta } from '@/components/seo/meta/meta.interface';

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