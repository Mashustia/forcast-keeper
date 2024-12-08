import { PropsWithChildren } from 'react';

import { header } from "./header.module.css";

const Header = ({ children }: PropsWithChildren) => {
    return (
        <header className={header}>{children}</header>
    )
}

export default Header;